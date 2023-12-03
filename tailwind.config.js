/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {}
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui')
    //    require('@tailwindcss/forms')({
    //      strategy: 'base' // only generate global styles
    //    })
  ]
};
