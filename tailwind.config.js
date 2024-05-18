/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        red: "hsl(0, 66%, 56%)",
        White: "hsl(0, 0%, 100%)",
        green: "hsl(169, 82%, 27%)",
        darkGrey: "hsl(187, 24%, 22%)",
        mediumGrey: "hsl(186, 15%, 59%)",
        lightGreen: "hsl(148, 38%, 91%)",
      },
    },
  },
  plugins: [],
};
