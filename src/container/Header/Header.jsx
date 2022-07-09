import React from 'react'
import { SubHeading } from '../../components'
import { images } from '../../constants'

import './Header.css'

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className='app__wrapper_info'>
      <SubHeading title='Chase the new flavor' />
      <h1 className='app__header-h1'>The Key to Fine Dining</h1>
      <p className='p__opensans' style={{ margin: '2rem 0' }}>
        We got meat to eat, drinks to chill, freaks to meet, and chronic we can
        smoke on, while we have our locs on.
      </p>
      <button className='custom__button'>Explore Menu</button>
    </div>
    <div className='app__wrapper_img'>
      <img src={images.welcome} alt='welcome' />
    </div>
  </div>
)

export default Header
