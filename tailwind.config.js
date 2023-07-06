/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'regal-black': '#13151f',
      },
      padding: {
        '52px': '52px',
      },
      margin: {
        '-120px': '-120px',
        '1%': '1%',
      },
      translate: {
        '-50%': '-50%',
      }
    },
  },
  plugins: [],
}