import React from 'react'
import "./Home.css"
import Product from './Product'

function Home() {
    return (
        <main className="home">
          
               
        <img
        className="home__image"
        // src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        src="https://images-eu.ssl-images-amazon.com/images/G/08/kindle/journeys/NTE4NDY4NmUt/NTE4NDY4NmUt-YTE4YWJkNTMt-w3000._CB404261511_.jpg"
        alt="banner"
        />
        <div className="home__row row2"> 
           <Product id="12321341" title="the lean startup" price={29.99} image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
               rating={4}/>
              <Product
          id={1234555656}
          title="Echo Plus (2eme generation)"
          price={89.99}
          rating={4}
          image="https://m.media-amazon.com/images/I/71WvxHqKqeL._AC_UY436_FMwebp_QL65_.jpg"
        />
        </div>
         <div className="home__row row2">
           <Product
          id={123455566755}
          title="Apple iPad (10.2-inch, Wi-Fi, 32GB) - Space Gray (Latest Model)"
          price={329.99}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/6162WMQWhVL._AC_SL1500_.jpg"
        />
        <Product
          id={123455}
          title="Echo Dot (3ème génération), Enceinte connectée avec Alexa"
          price={29.99}
          rating={5}
          image="https://images-eu.ssl-images-amazon.com/images/I/61u48FEs0rL._AC_UL480_SR480,480_.jpg"
        />{" "}
        <Product
          id={123455}
          title="Xiaomi Mi TV Box S - Streaming Player, Black"
          price={53}
          rating={4}
          image="https://images-eu.ssl-images-amazon.com/images/I/41p0Y51KAdL._AC_UL200_SR200,200_.jpg"
        />
        </div>
         <div className="home__row">
        <Product
          id={123455}
          title="SAMSUNG QN32Q50RAFXZA Flat 32 QLED 4K 32Q50 Series Smart TV"
          price={497.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/51NKhnjhpGL._AC_SL1024_.jpg"
        />
        </div>

       
        </main>
    )
}

export default Home
 