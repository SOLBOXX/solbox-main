import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slideUp: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      
      animation: {
        slideUp: 'slideUp 0.5s ease-out',
      },

      colors: {
        white: '#FDFCF5',
        black: '#000007',
        primary: '#00BCD4',
        lightPrimary: '#2C69E2',
        secondary: "#3433A2",
        tertiary: "#041C62",
        lapis: "#9747FF",
        indigo: "#5F0078"
      },
    },
  },
  plugins: [],
};
export default config;
