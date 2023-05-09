import Head from 'next/head'
// import NavBarComponent from './components/NavBar'
// import RsvpFormComponent from './components/RsvpForm'
import { useState } from "react"
import Button from './components/Button'
import Hero from './components/Hero'

export default function Home() {
  const [navbar, setnavbar] = useState(false);
  return (
   <div className='bg-creamy-brown'>
      <Head>
        <title>Busi & Josh</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/hand-in-hand.png" />
      </Head>

      <main className='snap-y snap-mandatory transition overflow-hidden'>
        {/* <NavBarComponent/>  */}
        <section className=" text-kinda-black bg-repeat-x  bg-top bg-auto  bg-[url('../public/TightBackgroundImage.jpg')] lg:min-h-screen  snap-start z-20 flex  flex-col justify-center items-center">

            <Hero/>

          <div className='lg:px-44 flex  flex-col justify-start items-start'>
            <div className='text-left md:text-lg text-xl font-Mathanifo'>
              <p className='lg:pl-4 lg:m-4 mb-2'>26.09.14</p>
            </div>
            <Button/>
          </div>
          
          
        </section>
        <div className='lg:px-44 '>
            
          <section  id="ourStory" className='snap-center  relative min-h-1/2   border-b-3 border-kinda-black my-5'>
            <div className='text-center font-Mathanifo lg:text-6xl mb-4 text-4xl'>
              <h2>
              Our Story
              </h2>
            </div>
            
            <div className='leading-6 text-center font-AddingtonT lg:text-2xl text-base'>
              <p>
              Busi and Josh met back in October 2018 after being set up on a blind date through mutual friends. Busi was struck by Josh’s kindness, while Josh instantly fell for Busi’s dark sense of humour.
              </p>

              <br />

              <p>
              They couldn’t keep away from each other in the following weeks. Before they knew it, weeks rolled into months, then months rolled into years. In June last year, Josh got down on one knee… Busi said yes!
              </p>

              <br />

            </div>
            
          </section>

          <section  id="schedule" className='snap-center min-h-1/2  border-b-3 border-kinda-black my-5'>

            <div className='text-center font-Mathanifo lg:text-6xl mb-4 text-4xl'>
              <h2>
                Schedule
              </h2>
            </div>

          </section>


          <section  id="GiftRegistry" className='snap-center min-h-1/2 border-b-3 border-kinda-black my-5'>

            <div className='text-center font-Mathanifo lg:text-6xl mb-4 text-4xl'>
              <h2>Our Gift Registry</h2>
            </div>
            
            <div className='leading-normal font-AddingtonT lg:text-2xl text-base'>
              <p>
              Should you wish to honour us with a gift, we hope that this registry will make it more convenient for you to select something that you know we will love.
              </p>
              <br />
              
            </div>
            
          </section>

          <section id="RSVP" className='snap-center min-h-1/2 border-b-3 '>
            <div className='text-center font-Mathanifo lg:text-6xl mb-4 text-4xl'>
              <h2>RSVP</h2>
            </div>
            
            <div className='leading-normal font-AddingtonT lg:text-2xl text-base'>
              <p>
              The favour of your response is requested as soon as you can.
              </p>
              <br />
            </div>

            <div className='flex justify-center'>
              <Button/>
            </div>

            
          </section>

          <section>
          {/* <RsvpFormComponent/> */}
          </section>
          
        </div>
      </main>
    </div>
  )
}
