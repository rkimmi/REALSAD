import React from 'react'

import Header from './Header'
import Info from './Info'
import Card from './Card'
import Footer from './Footer'
import Weather from './Weather'

const App = () => (
  <div className='app-container'>
  <Weather />
    <div className='background' />
    <Header />
    <div className='body-container'>
      <Info />
      <Card />
    </div>
    <Footer />
  </div>
)

export default App
