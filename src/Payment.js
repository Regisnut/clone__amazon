import React, {useEffect, useState} from 'react'
import CheckoutProduct from './CheckoutProduct'
import "./Payment.css"
import { useStateValue } from './StateProvider'
import {Link, useHistory} from "react-router-dom"
import {
    CardElement,
  useElements,
  useStripe
} from '@stripe/react-stripe-js';
import CurrencyFormat from "react-currency-format"
import {getBasketTotal} from "./Reducer"
import axios from "./axios"
import {db} from "./firebase"

function Payment() {
const history = useHistory();

    const [{basket, user}, dispatch] = useStateValue()

const stripe = useStripe();
const elements = useElements();

const [succeeded, setSucceeded]=useState(false);
const [processing, setProcessing]=useState("");
const [error, setError] = useState(null);
const [disabled, setDisabled]=useState(true);
const [clientSecret, setClientSecret] = useState(true);

useEffect(() => {
// generate stripe secret
const getClientSecret = async () => {
  
const response = await axios({
    method:"post",
    url:`http://localhost:5001/start-next/us-central1/api/payments/create?total=${getBasketTotal(basket) * 100}`,
});
setClientSecret(response.data.clientSecret)
}
getClientSecret();
}, [basket])

console.log("SECRET", clientSecret)


const handleSubmit = async (event)=>{
    // stripe stuff
    event.preventDefault();
    setProcessing(true);

    const payload = await stripe.confirmCardPayment(clientSecret,{
        payment_method:{
            card: elements.getElement(CardElement)
        }
    }).then(({paymentIntent})=>{
        // paymentIntent = payment confirmation

         db.collection("users").doc(user?.uid).collection("orders").doc(paymentIntent.id)
         .set({
             basket:basket, 
             amount:paymentIntent.amount, 
             created: paymentIntent.created})

        setSucceeded(true);
        setError(null);
        setProcessing(false);

        dispatch({
            type : "EMPTY_BASKET"
        })

        history.replace("/orders")
    })


}
const handleChange=(event)=>{
    // listen for changes in the card Element
    // display any errors as the customer types card details
setDisabled(event.empty);
setError(event.error?event.error.message:"");
}
    return (
        <div className="payment">
            <div className="payment__container">

<h1>

Checkout (<Link to="/checkout">{basket?.length} items</Link>)
</h1>


                {/* adresse */}
                <div className="payment__section">
<div className="payment__title">
    <h3>Delivery address</h3>
</div>
<div className="payment__address">
<p>{user?.email}</p>
<p>123 React Lane</p>
<p>Los Angeles</p>
</div>
                </div>
                  {/* basket  */}
                     <div className="payment__section">
                    <div className="payment__title">
    <h3 className="payment__review">Review items and delivery</h3>
    </div>
    <div className="payment__items">
        {basket?.map(item=>
            (<CheckoutProduct
            
                id={item.id}
      title={item.title}
      image={item.image}
      price={item.price}
      rating={item.rating}
      />)
        )}
    </div>

                </div>
                    {/* Payment method */}
                       <div className="payment__section">
                    <div className="payment__title">
    <h3>Payment Method</h3>
</div>

<div className="payment__details">
    {/* stripe */}
    <form onSubmit={handleSubmit}>
        <CardElement onChange={handleChange} className="payment__cardElement"/>
        <div className="payment__priceContainer">
             <CurrencyFormat
            renderText={(value)=>(
                <>
                <h3>{`Order Total (${basket.length} items): `}
                    <strong>
                   {value}
                    </strong>
                </h3>
            
                </>
            )} 
decimalScale={2}
value={getBasketTotal(basket)}
displayType={"text"}
thousandSeparator={true}
prefix={"€"} 
           />
           <button disabled={processing || disabled || succeeded}>
              <span>{processing? <p>Processing</p>:"Buy Now"}</span>
              </button>
        </div>
        {/* error */}
        {error && <div>{error}</div>}
    </form>
</div>

                </div>
            </div>
            
        </div>
    )
}

export default Payment
