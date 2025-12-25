import React from 'react'
import Header from './Header'
import CakesSection from './CakesSection'
import Container from './Container'
import MenuSection from './MenuSection'
import CupcakesSection from './CupcakesSection'

const Home = () => {
  return (
    <div>
        <Header/>
        <Container>
            <CakesSection/>
            <CupcakesSection/>
            <MenuSection/>
        </Container>
    </div>
  )
}

export default Home