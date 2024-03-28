import React from 'react'
import './Home.css'
import Header from '../../components/Header/Header'

function Home() {
  return (
    <div>
        <Header />
        <div className='header-components'>
            <h2>
                Order your favourite food here
            </h2>
            <p>Welcome to our gastronomic haven, where every dish is meticulously crafted with passion, precision, and a sprinkle of magic. Dive into a symphony of flavors, where each bite is a journey through culinary artistry, blending tradition with innovation. </p>
            <button>View Menu</button>
        </div>
    </div>
  )
}

export default Home