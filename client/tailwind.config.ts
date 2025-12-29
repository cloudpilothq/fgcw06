import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Mapping Carlson's primary/secondary to FGCW Green/Yellow
        fgcGreen: "#006837", // replaces --primary (#7a0019)
        fgcYellow: "#ffcc00", // replaces --secondary/--gold (#fc3)
        fgcIvory: "#f7f3f1",  // matches --light / --ivory
        fgcBorder: "#9e9785", // matches --mm-color-border
      },
      fontFamily: {
        // Using the exact font stack from your CSS
        sans: ['"Open Sans"', 'Roboto', '"Segoe UI"', 'sans-serif'],
      },
      // Breakpoints from your CSS variables
      screens: {
        'xs': '0px',
        'sm': '576px',
        'md': '768px',
        'lg': '992px',
        'xl': '1340px',
        'xxl': '1400px',
      },
    },
  },
  plugins: [],
};
export default config;