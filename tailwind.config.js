module.exports = {
  content: ["./*.{html,js}",
  "./components/**/*.{js,ts,jsx,tsx}" 
           ],
  theme: {
    extend: {
      screens: {
        'mdx': {'max': '768px'},
        // => @media (max-width: 768px) { ... }
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        palette:{
          grey1:"#272c34",
          grey2:"#31435A",
          grey3:"#1b2124",
          blue1:"#0097fb", 
        },
        venox: {
          10: "#0097FB",
          50: "#32a2f2",
          100: "#2898e8",
          200: "#1e8ede",
          300: "#1484d4",
          400: "#0a7aca",
          500: "#0070c0",
          600: "#0066b6",
          700: "#005cac",
          800: "#0052a2",
          900: "#004898",
        },
      },
    },
  },
  plugins: [],
};
