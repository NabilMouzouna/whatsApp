/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bodyColor : "#464545",
        chatRoom : "#010101",
        asideColor : "#212021",
        headerColor : "#292828",
        messageColor : "#B0B1B4",
      },
    },
  },
  plugins: [],
};
