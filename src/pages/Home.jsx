import React from 'react'
import '../assets/css/home.css'
import Carousel from '../components/Carousel'
import { useContext,createContext  } from 'react'
import { ApiContext } from '../context/ApiProvider'
import Reloader from '../components/Reloader'
import { useState } from 'react'
import { useEffect } from 'react'


const Home = () => {

  const{data} = useContext(ApiContext)
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
 
  
  
  return (
    <>
     {loading?<Reloader/>: <main>
    
         <div className='hero-container'>
        <div className="container">
             <div className="row">
                <div className="left-side col-12 col-md-6">
                    <div className="discount-info"></div>
                    <div className="mid-info">
                        <h2>Curated marketplace collections
                            built for quality everyday living.</h2>
                        <p> Carefully curated products from trusted sellers, designed to deliver quality, value, and a seamless shopping experience for everyday needs. </p>
                    </div>
                    <div className="btm-info ">
                        <a href="#">Shop now</a>
                        <h5>$ 24.99</h5>
                        <p> With prices starting from </p>
                    </div>


                </div>
                <div className="right-side col-12 col-md-6"></div>
            </div>


        </div>
           
        </div>
        {}

        <div className="carousel-section">
            <Carousel datas={data}/>
        </div>

    </main>}</>
   
   
  
  )
}

export default Home