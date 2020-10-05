import React from 'react'
import "./Checkout.css"
import { useStateValue } from './StateProvider'
import Subtotal from "./Subtotal"
import CheckProduct from "./CheckoutProduct"
import CheckoutProduct from './CheckoutProduct'

function Checkout() {

    const [{basket, user}, dispatch]=useStateValue();

    return (
        <div className="checkout">
            {/* LEFT */}
      <div className="checkout__left">
          <img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="amazon Link" className="checkout__ad"/>
       <div>
           <h3>Hello, {user?.email}</h3>
       </div>
      <h2 className="checkout__title">
          Your shopping Basket
      </h2>
      {basket?.map(item=>(<CheckoutProduct
      id={item.id}
      title={item.title}
      image={item.image}
      price={item.price}
      rating={item.rating}
      />))}


      </div>
     {/* RIGHT */}
     <div className="checkout__right">
         <Subtotal/>
     </div>
        </div>
    )
}

export default Checkout
