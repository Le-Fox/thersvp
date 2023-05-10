import React from 'react'

type Props = {}

function Button({}: Props) {
  return (
<div className='text-left lg:text-2xl text-sm md:text-base'>
    <button className='lg:border-3 border-[1.5px] rounded font-AddingtonT lg:w-28 lg:h-16 md:w-[90px] md:h-12 border-kinda-black '>RSVP</button>
  </div>
  )
}

export default Button