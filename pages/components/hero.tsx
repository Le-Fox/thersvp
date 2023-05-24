import Link from 'next/link'
import React from 'react'

type Props = {}

function Hero({}: Props) {
  return (
    <div>
      <Link href={'/'}>
        <div className='pt-28 content-center text-center   font-Mathanifo break-keep'>
        <h1 className='text-7xl md:text-10xl lg:text-10xl'> Busi <span className='text-4xl lg:text-8xl'> &amp;</span> Josh</h1>
        {/* <h1>Busi <p className='font-Parisienne'>&</p> Josh</h1> */}
        </div>
      </Link>
  </div>
  )
}

export default Hero