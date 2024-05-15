/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'nunito': ['Nunito', 'sans-serif'],
      },
      boxShadow: {
        'login-card': '0px 0px 64px 0px #00000040',
      },
      colors: {
        'primary-blue': '#02274F',
        'primary-yellow': '#FDCF00',
        'greyish-white': '#fafafa',
        "picture-text": "#2F2F2F",
        'inputfield-background': '#f1f1f1',
        "userpage-background": "#f1f5f9"
      },
    },
  },
  plugins: [],
};
