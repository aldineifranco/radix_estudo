/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "blue-100": "#0A66C2",
        "gray-100": "#191919",
        "gray-60": "#666666",
        "neutral-100": "#F4F2EE",
      },
    },
  },
  plugins: [],
};
