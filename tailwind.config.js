/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "400px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px"
    },
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.hide-scrollbar': {
          '-webkit-overflow-scrolling': 'touch',
          '::-webkit-scrollbar': {
            display: 'none',
          },
          'scrollbar-width': 'none',
        },
      });
    },
  ],
};
