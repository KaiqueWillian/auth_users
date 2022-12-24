/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        login: "url('/src/assets/bg-login.jpg')",
      },
    },
  },
  plugins: [],
};
