/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
"primary": "#023179",
"secondary": "#ff8b00",
"accent": "#ffffff",
"neutral": "#ffffff",
"base-100": "#ffffff",
          

 
"info": "#ffffff",
          

 
"success": "#61a229",
          

 
"warning": "#ffffff",
          

 
"error": "#dd3333",        },
      },
    ],
    },
}

