import React from 'react';
import {images} from '../../constants'

import './AboutUs.css';

const AboutUs = () => (
  <div
    className='app__aboutus app__bg flex__center section__padding'
    id='about'
  >
    <div className='app__aboutus-overlay flex__center'>
      <img src={images.G} alt='g letter' />
    </div>
    <div className='app__aboutus-content flex__center'>
      <div className='app__aboutus-content_about'>
        <h1 className='headtext__cormorant'>About Us</h1>
        <img src={images.spoon} alt='about_spoon' className='spoon__img' />
        <p className='p__opensans'>
          Hear ye, hear ye, come one, come all. It's ya regualar spot and all of
          y'all are invited, so go and enlight it, spread it, let 'em know
          Gericht is for show.
        </p>
        <button type='button' className='custom__button'>
          Know More
        </button>
      </div>
      <div className='app__aboutus-content_knife flex__center'>
        <img src={images.knife} alt='about_spoon' className='about__knife' />
      </div>
      <div className='app__aboutus-content_history'>
        <h1 className='headtext__cormorant'>Our History</h1>
        <img src={images.spoon} alt='about_spoon' className='spoon__img' />
        <p className='p__opensans'>
          21 jump street, where it all started, and you know the imagination is the hardest, but we made it work like a round o'clock
        </p>
        <button type='button' className='custom__button'>
          Know More
        </button>
      </div>
    </div>
  </div>
)

export default AboutUs;
