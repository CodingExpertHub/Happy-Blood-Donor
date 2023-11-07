/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}', './public/index.html'],
  theme: {
      extend: {
          colors: {
              primary: '#1B73E8',
          },
          backgroundImage: (theme) => ({
            'gradient': 'linear-gradient(90deg, #EB3738, #6F3AFA)',
          }),
      },
  },
  plugins: [],
};
