/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1280",
    },
    colors: {
      red: {
        900: "#df5c5c",
        200: "#ffd4d4",
      },

      gray: {
        900: "#A6A6A6",
        200: "#e1e1e1",
      },

      black: {
        900: "#141A1C",
        800: "#0C1315",
        500: "#212b2e",
      },
      gold: {
        900: "#8F7C61",
        500: "#9e7d4e",
      },
    },
    fontFamily: {
      inconso: ["Inconsolata", "monospace"],
      sans: ["Open Sans", "sans-serif"],
    },
    fontSize: {
      xs: [
        "0.75rem",
        {
          lineHeight: "1rem",
        },
      ],
      sm: [
        "0.875rem",
        {
          lineHeight: "1.5rem",
        },
      ],
      base: [
        "1rem",
        {
          lineHeight: "1.75rem",
        },
      ],
      lg: [
        "2.62rem", // 42px
        {
          lineHeight: "1.30952em",
        },
      ],
      xl: [
        "5.31rem", // 85px
        {
          lineHeight: "1",
        },
      ],
    },
    extend: {
      maxWidth: {
        "8xl": "90rem",
      },
    },
  },
  plugins: [],
};
