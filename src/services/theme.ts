// theme.ts
import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "light",  // or "dark"
  useSystemColorMode: false,  // Set to true if you want to use the system's color mode
};

const theme = extendTheme({
  config,
  styles: {
    global: {
      // Global styles to set the background color for the entire app
      body: {
        //bg: "gray.100",  // Change this to the color you want
        bg: "blue.800",
        //color: "black",  // Adjust text color accordingly
        color: "whiteAlpha.900",
      },
    },
  },
});

export default theme;
