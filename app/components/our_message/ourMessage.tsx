import React from 'react'

import "./message.css"
import Image from 'next/image'

const OurMessage = () => {
  return (
    <>
      <section className="our_message">
        <div className='center-text'>
          <h1>One Day OR Day One</h1>
          <p>It's up to you</p>
        </div>
        <div className="message-content">
          <div>

          
            <div className="message-text">
              <h1>
                WE ARE CHANGING THE WAY THINGS ARE DONE.
              </h1>
              <div className="border-bottom"></div>
              <h2>OXION IS WHERE FITNESS MEETS FUN!!!</h2>
            </div>
            </div>

          <div className="message-img">
            <Image
              src="/images/our-message.jpg"
              alt="image"
              width={500}
              height={500}
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default OurMessage