/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'creamy-brown': '#ECDDCF',
        'kinda-black':'#2F2D2A'
      },
      fontFamily: {
        Mathanifo:["mathanifo"],
        Parisienne:["Parisienne"],
        Addington:["AddingtonCF-Regular"],
        AddingtonT:["Addington-thin"]
      },
      fontSize: {
        '10xl':"10rem",
        '11xl':"12rem"
      },
      borderWidth:{
        '3':'2.5px',
      },
      minHeight: {
        '1/2':"50%",
      }
      

    },
  },
  plugins: [],
}
