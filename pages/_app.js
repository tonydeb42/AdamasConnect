import Head from 'next/head';
import '../styles/globals.css';
import NavbarProvider from '../providers/NavbarProvider';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
        <title>Adamas Connect</title>
      </Head>
      <NavbarProvider>
        <Component {...pageProps} />
      </NavbarProvider>
    </>
  )
}
