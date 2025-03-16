/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
       inter: "'Inter', sans-serif"

      },
      colors: {
        primary: {
          light: "#92C442",
          base: "#31A343",
          deep: "#049444",
        },
        secondary: {
          base: "#FECD2F",  
        },
        
      },

    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
}

