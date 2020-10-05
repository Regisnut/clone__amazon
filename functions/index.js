const functions = require('firebase-functions');
const express = require("express");
const cors = require("cors");

const stripe = require("stripe")("sk_test_p6CytBydiLA9PsD9Yhhb67ZQ00qhjcLHuU")

//API

//App config
const app = express();

// middleware
app.use(cors({origin : true}));
app.use(express.json());

//API route
app.get("/", (request, response)=>response.status(200).send("Hello world"))

app.post("/payments/create", async(request, response)=>{
    const total = request.query.total;
    console.log("POST OKKKKK --> total ", total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount:total,//subunits of the currency
        currency:"eur" 
    });

    response.status(201).send({
        status : 201,
        amount : total,
        clientSecret : paymentIntent.client_secret,
    })

})
//listen command
 exports.api = functions.https.onRequest(app);

//  exple endpoint
//http://localhost:5001/start-next/us-central1/api