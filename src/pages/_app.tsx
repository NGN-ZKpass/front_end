import "@/styles/globals.css";
import type { AppProps } from "next/app";
import StarknetProvider from "./StarknetProvider";


export default function App({ Component, pageProps }: AppProps) {

  return (
    <StarknetProvider>
      <Component {...pageProps} />
       </StarknetProvider>
  )
}
