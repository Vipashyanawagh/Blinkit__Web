import React from 'react'
import { Airplay } from 'lucide-react'
import Navbar from '../components/landing/Navbar'
import StockCard from '../components/landing/StockCard'
import CardPlate from '../components/landing/CardPlate'
import CardPlate1 from '../components/landing/CardPlate1'
import Footer1 from '../components/landing/Footer1'
import Footer from '../components/landing/Footer'
import Cardbox from '../components/landing/Cardbox'
function Landing() {
  return (
    <div>

      <Navbar />
     
     <StockCard/>
     <Cardbox />
     <CardPlate/>
     <CardPlate1/>
     <Footer/>
     <Footer1/>
    </div>
  )
}

export default Landing