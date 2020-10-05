import React, {useEffect} from 'react';
import './App.css';
import Header from "./Header"
import Home from "./Home"
import Checkout from "./Checkout"
import Login from "./Login"
import {auth} from "./firebase"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import { useStateValue } from './StateProvider';
import Payment from"./Payment"
import {loadStripe} from "@stripe/stripe-js"
import {Elements} from "@stripe/react-stripe-js"
import Orders from "./Orders"

const promise = loadStripe("pk_test_4pXlekeUdu7xF1UDMLRKkD78009gmPbaMU");


function App() {
  const[{user}, dispatch] = useStateValue();
// listener auth
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(authUser => {
      console.log("authUser=>", authUser)
      if (authUser) {
        // if user is logged in
        dispatch({ type: "SET_USER", user: authUser });
      } else {
        // if user is logged out
        dispatch({ type: "SET_USER", user: null });
      }
    });
    return () => {
      // Any cleanup operations go in here...
      unsubscribe();
    };
  }, []);

  return (<Router>
    <div className="App">
   
<Switch>

 <Route path="/orders">
      <Header/>
      <Orders/> 
  </Route>

 <Route path="/login">
<Login/> 
  </Route>

   <Route path="/checkout">
         <Header/>
<Checkout/>
  </Route>

 <Route path="/payment">
         <Header/>
<Elements stripe={promise}>
<Payment/>
</Elements>

  </Route>

  <Route path="/">
        <Header/>
 <Home />
  </Route>

</Switch>

    </div>
    </Router>
  );
}
  
export default App;
