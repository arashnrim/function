const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  mode: "jit",
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Clash Display"'],
        sans: ["Inter"],
        mono: ["'JetBrains Mono'"],
      },
      colors: {
        gray: colors.trueGray,
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: "#FFF",
            h1: {
              color: "#FFF",
              fontFamily: "'Clash Display'",
              fontWeight: "700",
            },
            h2: {
              color: "#FFF",
              fontFamily: "'Clash Display'",
              fontWeight: "700",
            },
            h3: {
              color: "#FFF",
              fontFamily: "'Clash Display'",
              fontWeight: "700",
            },
            h4: {
              color: "#FFF",
              fontFamily: "'Clash Display'",
              fontWeight: "700",
            },
            h5: {
              color: "#FFF",
              fontFamily: "'Clash Display'",
              fontWeight: "700",
            },
            h6: {
              color: "#FFF",
              fontFamily: "'Clash Display'",
              fontWeight: "700",
            },
            a: {
              color: "#FFF",
              textDecoration: "underline dotted",
              textUnderlineOffset: "5px",
              "&:hover": {
                opacity: "75%",
                transitionProperty: "opacity",
                transitionDuration: "200",
              },
            },
            blockquote: {
              color: "#FFF",
            },
            strong: {
              color: "#FFF",
            },
            code: {
              color: "#FFF",
              fontFamily: "'JetBrains Mono'",
            },
          },
        },
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
