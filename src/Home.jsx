import React from 'react'
import Header from './Header'
import CakesSection from './CakesSection'
import Container from './Container'
import MenuSection from './MenuSection'
import CupcakesSection from './CupcakesSection'
import SpecialOfferBanner from './SpecialOfferBanner'
import BoxOfferBanner from './BoxOfferBanner'

const Home = () => {
  return (
    <div>
        <Header/>
        <Container>
            <CakesSection/>
            <CupcakesSection/>
            <SpecialOfferBanner/>
            <BoxOfferBanner/>
            <MenuSection/>
        </Container>
    </div>
  )
}

export default Home