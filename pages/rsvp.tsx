import React from 'react'
import { Form,Button } from 'semantic-ui-react'
import RsvpFormComponent from './components/RsvpForm'
import Hero from './components/hero'
import { useState } from 'react'
import { RsvpInput } from '@/typings'

type Props = {
  rsvpInput: RsvpInput
}


function Rsvp({rsvpInput}: Props) {

  const [rsvp,setRsvp] = useState(rsvpInput)

   const handleChange = (e: { target: { name: any, value: string } }) =>{

    const {name , value} = e.target

    setRsvp((prev:RsvpInput) =>{

      return { ...prev, [name]: value }
    })

   } 

   const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    console.log(rsvp)
    
   }

  return (
    <div className='flex flex-col justify-center items-center content bg-creamy-brown md:min-h-screen min-h-1/2 min-w-full'>
        <section className="text-kinda-black bg-repeat-x  bg-top bg-auto  bg-[url('../public/TightBackgroundImage.jpg')] md:min-h-screen  snap-start z-20 flex  flex-col justify-center items-center w-screen">
            <Hero/>
          <div className='lg:px-44 flex  flex-col justify-center items-center'>
            <div className='text-left md:text-lg text-lg font-Mathanifo '>
              <p className=' lg:m-4 mb-2'>26.09.14</p>
            </div>
            <div className='right-20  text-left md:text-6xl text-5xl lg:text-6xl font-Mathanifo flex justify-center items-center pt-2 pb-2'>
              <p className=''>RSVP</p>
            </div>
          </div>
          
        </section>
        <section className=" md:min-h-1/2 min-h-screen min-w-full pt-5 bg-repeat-x  bg-bottom md:bg-auto sm:bg-contain  lg:bg-[url('../public/TightBackgroundImageUpsideDown.png')] bg-[url('../public/TightBackgroundImageUpsideDownSmaller.png')]  flex justify-center md:items-center items-start">
            <div className='flex flex-col justify-center items-center mt-10 font-AddingtonT text-kinda-black '>
                <div className='text-left md:text-6xl text-4xl font-Mathanifo flex justify-center items-center lg:pb-6 pb-4'>
                    <p className=''>Please Enter your details</p>
                </div>
                  <Form  onSubmit={handleSubmit} className=' space-y-2'>
                    <Form.Group widths='equal' className=' flex-col space-y-2' >
                      <Form.Input label='Name'  name='name' placeholder='Name' onChange={handleChange}/>
                      <Form.Input label='Surname' name='surname' placeholder='Surname'onChange={handleChange} />
                    </Form.Group>
                    <Form.Group className=' flex-col space-y-2'>
                      <Form.Input label='Email-Address' name='email' placeholder='Email-Address'onChange={handleChange}/>
                      <Form.Input label='Phone' name ='PhoneNumber' placeholder='Phone' onChange={handleChange}/>
                    </Form.Group>
                    <Button type='submit' className='rounded border-2 border-kinda-black mt-4 p-1 flex justify-center items-center' >Submit</Button>
                  </Form>
            </div>
        </section>
        
    </div>
  )
}

export default Rsvp