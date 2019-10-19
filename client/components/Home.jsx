import React from 'react'
import { Link, Redirect } from 'react-router-dom'

const Home = () => {
    return (
      <div className='home-container'>
        <Redirect to='/strangeislands'></Redirect>
        Home
        <Link to='/strangeislands'>click</Link>
      </div>
    )
}


export default Home