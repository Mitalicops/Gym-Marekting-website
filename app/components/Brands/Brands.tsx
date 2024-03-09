import Image from 'next/image'
import React from 'react'

import "./brands.css"

const Brands = () => {
  return (
    <section className='brands'>
      <div className="brands-img">
      <h1>Brands We've <br />partnered with</h1>
        <Image
          src="/images/Adidas.jpg"
          alt="brand-1"
          width={200}
          height={200}
        />
        <Image
          src="/images/Puma.jpg"
          alt="brand-2"
          width={200}
          height={200}
        />
        <Image
          src="/images/Nike.png"
          alt="brand-3"
          width={200}
          height={200}
        />
       
        
      </div>
    </section>
  )
}

export default Brands