/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js, jsx, ts,tsx}"],
  theme: {
    extend: {
      ///내가 좋아하는 색상을 지정해서 씀
      colors:{
        'type-one-blue' : "#4158D0",
        'type-one-puple' : "#C850C0",
        'type-one-yellow' : "#FFCC70",
        'pastel-purple' : "#E0C3FC",
        'pastel-blue' : "#8EC5FC",
        'pastel-green-blue' : "#97D9E1",
        'type-lime-light' : "#FFFB7D",
        'type-lime-normal' : "#85FFBD",
        'type-three-pink' : "#FA8BFF",
        'type-three-blue' : "#2BD2FF",
        'type-three-green' : "#2BFF88",

      }

    },
  },
  plugins: [],
}
