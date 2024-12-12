import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './Components/Header'
import SliderHeader from './Components/SliderHeader'
import SmartMarketSection from './Components/SmartMarketSection'
import TopOffers from './Components/TopOffers'
import DailyStaples from './Components/DailyStaples'
import SLiderFooter from './Components/SliderFooter'
import Footer from './Components/Footer'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <SliderHeader/>
    <SmartMarketSection heading='My Smart Basket'/>
    <SmartMarketSection heading='Best Selling'/>
    <TopOffers/>
    <SLiderFooter/>
    <Footer/>
    
  </StrictMode>,
)
