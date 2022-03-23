import { extendTheme, ThemeConfig } from "@chakra-ui/react"

const breakpoints = ['40em', '52em', '64em']

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
}

const theme = extendTheme({
  config,
  colors: {
    brand: {
      orange: '#FF9000',
      // blue: '#0055ff',
      blue: '#4141FF',
      blueLight: '#0055ffAA',
      purple: "#4141FF",
      50: '#C2D6FF',
      100: '#ADC9FF',
      200: '#99BBFF',
      300: '#85ADFF',
      400: '#70A0FF',
      500: '#5C92FF',
      600: '#4785FF',
      700: '#3377FF',
      800: '#1F69FF',
      900: '#0055ff'
    },
    black: '#16161D',
    // customBlue: '#4455ff'
  },
  breakpoints,
  icons: {
    logo: {
      path: (
        <svg
          width="3000"
          height="3163"
          viewBox="0 0 3000 3163"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="3000" height="3162.95" fill="none" />
          <path
            d="M1470.89 1448.81L2170 2488.19H820V706.392H2170L1470.89 1448.81ZM1408.21 1515.37L909.196 2045.3V2393.46H1998.84L1408.21 1515.37Z"
            fill="currentColor"
          />
        </svg>
      ),
      viewBox: '0 0 3000 3163',
    },
  },
  styles: {
    global: {
      a: {
        _hover: {
          textDecoration: "none !important",
        },
      },
    },
  },
  components: {
    Button: {
      variants: {
        "link": {
          color: 'black',
          _hover: {
            textDecoration: "none !important",
            color: 'gray.500'
          },
        },
        "solid": {
          color: 'white',
          backgroundColor: 'brand.blue',
          // _hover: {}
        },
      }
    }
  }
});

export default theme
