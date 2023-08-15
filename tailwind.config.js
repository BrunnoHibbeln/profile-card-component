/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-cyan": "hsl(185, 75%, 39%)",
        "very-dark": "hsl(229, 23%, 23%)",
        "dark-grayish": "hsl(227, 10%, 46%)",
        "dark-gray": "hsl(0, 0%, 59%)",
      },
      fontSize: {
        base: "1.125rem",
      },
      spacing: {
        375: "23,5rem",
      },
    },
  },
  plugins: [],
};
