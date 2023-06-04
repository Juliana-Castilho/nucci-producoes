/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    borderColor: (theme) => ({
      ...theme('colors'),
      primary: '#d98e11',
      secondary: '#f1dda7',
      identity: '#212a4f',
    }),
    extend: {
      colors: {
        primary: '#d98e11',
        secondary: '#f1dda7',
        identity: '#212a4f',
      },
    },
  },
  plugins: [],
};
