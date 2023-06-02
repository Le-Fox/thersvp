import React from 'react'
import { Form,Button } from 'semantic-ui-react'
import RsvpFormComponent from './components/RsvpForm'
import Hero from './components/hero'
import { useState } from 'react'
import { RsvpInput } from '@/typings'
import {google} from 'googleapis'

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
   // console.log(rsvp)

    fetch("http://localhost:3000/api/addToSheet",{
      method: "POST",
      mode:'same-origin',
      headers:{
        "CONTENT_TYPE": "Application/JSON"
      },
      body: JSON.stringify(rsvp),
    }).then((r) => r.json())
      .then((data:RsvpInput) => {
        // The response comes here
        console.log(data);
      })
      .catch((error) => {
        // Errors are reported there
        console.log(error);
      });
    
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




// <script src="https://apis.google.com/js/api.js"></script>
// <script>
//   /**
//    * Sample JavaScript code for sheets.spreadsheets.values.append
//    * See instructions for running APIs Explorer code samples locally:
//    * https://developers.google.com/explorer-help/code-samples#javascript
//    */

//   function authenticate() {
//     return gapi.auth2.getAuthInstance()
//         .signIn({scope: "https://www.googleapis.com/auth/drive https://www.googleapis.com/auth/drive.file https://www.googleapis.com/auth/spreadsheets"})
//         .then(function() { console.log("Sign-in successful"); },
//               function(err) { console.error("Error signing in", err); });
//   }
//   function loadClient() {
//     gapi.client.setApiKey("YOUR_API_KEY");
//     return gapi.client.load("https://sheets.googleapis.com/$discovery/rest?version=v4")
//         .then(function() { console.log("GAPI client loaded for API"); },
//               function(err) { console.error("Error loading GAPI client for API", err); });
//   }
//   // Make sure the client is loaded and sign-in is complete before calling this method.
//   function execute() {
//     return gapi.client.sheets.spreadsheets.values.append({
//       "spreadsheetId": "1fTqHPuQp54V5wEY9QYq1A_WzFNlPsnp5pNtT0QMWl0c",
//       "range": "A2:D2",
//       "includeValuesInResponse": true,
//       "insertDataOption": "INSERT_ROWS",
//       "responseDateTimeRenderOption": "FORMATTED_STRING",
//       "responseValueRenderOption": "FORMATTED_VALUE",
//       "valueInputOption": "RAW",
//       "prettyPrint": true,
//       "alt": "json",
//       "resource": {
//         "values": [
//           [
//             "Senzo",
//             "Mkupa",
//             "smkupa@gmail.com",
//             "0637336440"
//           ]
//         ]
//       }
//     })
//         .then(function(response) {
//                 // Handle the results here (response.result has the parsed body).
//                 console.log("Response", response);
//               },
//               function(err) { console.error("Execute error", err); });
//   }
//   gapi.load("client:auth2", function() {
//     gapi.auth2.init({client_id: "YOUR_CLIENT_ID"});
//   });
// </script>
// <button onclick="authenticate().then(loadClient)">authorize and load</button>
// <button onclick="execute()">execute</button>
