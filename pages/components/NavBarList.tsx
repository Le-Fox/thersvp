import Link from 'next/link'
import React from 'react'

type Props = {}

function NavBarList({}: Props) {
  return (
    <div>
        <ul className="h-screen md:h-auto items-center justify-center md:flex bg-creamy-brown relative">
            <li className="md:pb-6 lg:pt-6 text-xl text-black py-2 md:px-6 text-center rounded-full border-b-2 md:border-b-0 hover:bg-stone-400">
                <Link href={'#ourStory'}>Our Story</Link>
            </li>
            <li className="md:pb-6 lg:pt-6 text-xl text-black py-2 md:px-6 text-center rounded-full border-b-2 md:border-b-0 hover:bg-stone-400">
            Schedule
            </li>
            <li className="md:pb-6 lg:pt-6 text-xl text-black py-2 md:px-6 text-center rounded-full border-b-2 md:border-b-0 hover:bg-stone-400">
            Our Gift Registry
            </li>
            <li className="md:pb-6 lg:pt-6 text-xl text-black py-2 md:px-6 text-center rounded-full border-b-2 md:border-b-0 hover:bg-stone-400">
            RSVP
            </li>  
        </ul>
    </div>
  )
}

export default NavBarList