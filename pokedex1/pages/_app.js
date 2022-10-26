import "../styles/globals.scss"
import { NextUIProvider } from '@nextui-org/react';
import{darkTheme } from "../theme/darkTheme";

function MyApp({ Component, pageProps }) {
  return (
    // 2. Use at the root of your app
    <NextUIProvider theme={darkTheme}>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}

export default MyApp;
