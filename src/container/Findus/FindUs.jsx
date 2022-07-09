import React from 'react';
import { SubHeading } from '../../components'
import { images} from '../../constants'

const FindUs = () => (
  <div className='app__bg app__wrapper section__padding' id='contact'>
    <div className='app__wrapper_info'>
      <SubHeading title='Contact' />
      <h1 className='headtext__cormorant' style={{ marginBottom: '3rem' }}>
        Find us
      </h1>
      <div className='app__wrapper-content'>
        <p className='p__opensans'>
          21 Jumpstreet, Broadway near Redemption, on the eastside of BRG
        </p>
        <p
          className='p__cormorant'
          style={{ color: '#DCCA87', margin: '2rem 0' }}
        >
          Opening Hours
        </p>
        <p className='p__opensans'>Mon - Fri: African time - God's time</p>
        <p className='p__opensans'>Sat - Sun: African time - God's time</p>
      </div>
      <button className='custom__button' style={{ marginTop: '2rem' }}>Visit us</button>
    </div>
    <div className='app__wrapper_img'>
      <img src={images.findus} alt='findus' />
    </div>
  </div>
)

export default FindUs;
