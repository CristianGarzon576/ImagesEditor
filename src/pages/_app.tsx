import { trpc } from "@/utils/trcp";
import type { AppProps } from 'next/app';

import './globals.css'
 
function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default trpc.withTRPC(MyApp)
