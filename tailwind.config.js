/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./**/*.html",
  ],
  theme: {
    extend: {
      colors: {
        twitterWhite: "#e7e9ea",
        twitterBlue: "#308cd8",
        twitterBorder: "#2f3336",
        twitterLightGray: "#71767b",
        twitterDarkGray: "#17181c",
        darkblue: "#0E21A0",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  prefix: "tw-",
  important: true,
  corePlugins: {
    preflight: false,
  },
  plugins: [],
};
