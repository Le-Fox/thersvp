function email(){
    // using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
//javascript
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)
const msg = {
  to: 'asanda99@gmail.com', // Change to your recipient
  from: 'smkupa@gmail.com', // Change to your verified sender
  subject: 'Sthandwa sami',
  text: 'Hi my love I know you must be upest with me right now but please call me before you go to sleep',
  html: '<strong> Hi my love I know you must be upest with me right now but please call me before you go to sleep </strong>',
}
sgMail
  .send(msg)
  .then(() => {
    console.log('Email sent')
  })
  .catch((error:any) => {
    console.error(error)
  })
}
export  default email
