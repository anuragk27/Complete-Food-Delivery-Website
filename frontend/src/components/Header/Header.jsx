import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
      <div className="header-contents">
        <h2>Order your favourite food</h2>
        <p>Discover delicious meals from your favorite local restaurants, delivered fast and fresh with Tomato. 
          Simple ordering, real-time tracking, and great food, right at your doorstep!</p>
        <button>View Menu</button>
      </div>
    </div>
  )
}

export default Header