import { useState } from "react"

function RsvpFormComponent(){
  // Handles the submit event on form submit.
  const handleSubmit = async (event:any) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault()

    // Get data from the form.
    const data = {
      first: event.target.first.value,
      last: event.target.last.value,
    }

    // Send the data to the server in JSON format.
    const JSONdata = JSON.stringify(data)

    // API endpoint where we send form data.
    const endpoint = '/api/form'

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: 'POST',
      // Tell the server we're sending JSON.
      headers: {
        'Content-Type': 'application/json',
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    }

    // Send the form data to our forms API on Vercel and get a response.
    const response = await fetch(endpoint, options)

    // Get the response data from server as JSON.
    // If server returns the name submitted, that means the form works.
    const result = await response.json()
    alert(`Is this your full name: ${result.data}`)
  }
  const [navbar, setnavbar] = useState(false);
    return (
    <div className="bg-green-700 text-center grid grid-cols-1 gap-3 border-2 border-red-600">
      <form onSubmit={handleSubmit}>
      {/* flex items-center  justify-center space-x-4 space-y-3 */}
          <div className="grid grid-cols-2 gap-4  content-start">
              <label htmlFor="Guest Name">Guest Name</label>
              <input className="bg-black" type="text" id="first" name="first" required />
          </div>

          <div className="grid grid-cols-2 gap-4 content-start ">
              <label htmlFor="Plus1 Name">Additional Guest</label>
              <input className="bg-black text-white" type="text" id="last" name="last" required />
          </div>
          <div className="grid grid-cols-2 gap-4 content-start">
              <label htmlFor="Guest Email-address">Email-Address</label>
              <input className="bg-black" type="Email" id="last" name="last" required />
          </div>

        <button className="" type="submit">Submit</button>
      </form>
    </div>
    )
}

export default RsvpFormComponent