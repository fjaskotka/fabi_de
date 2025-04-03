import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      margin: {
        '1/4': '25%',
        '1/2': '50%',
      },
      backgroundImage: {
        'custom-image': "url('../src/assets/background.jpeg')",
      },
      colors: {
        primary: {
          light: '#CAF08B',//'#9FBC8D', // Light variant of your primary color
          DEFAULT: '#869F5C',//'#CED058', // Default primary color
          dark: '#1e40af', // Dark variant of your primary color
        },
        secondary: {
          light: '#fbbf24', // Light variant of your secondary color
          DEFAULT: '#f59e0b', // Default secondary color
          dark: '#b45309', // Dark variant of your secondary color
        },
      },
      textColor: {
        default: '#171717', // your desired default text color
      },
      fontWeight: {
        light: '300',
        normal: '400',
        bold: '700',
      },
    },
  },
  plugins: [],
}

export default config

