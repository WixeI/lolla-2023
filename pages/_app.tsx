import "../styles/globals.css";
import "@fontsource/lalezar";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
