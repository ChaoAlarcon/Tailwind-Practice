 /** @type {import('tailwindcss').Config} */
 export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {

      screens:{

        tv: "1400px",
        
      },

      height:{
        header: "200px",
        "header-phone": "1000px",
      },
      colors: {
        primary: "#FF6B00",
        
      },
      
    },
  },
  plugins: [],
}