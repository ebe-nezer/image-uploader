import type { AppProps } from "next/app";
import Head from "next/head";
import Layout from "../components/Layout";
import ThemeContextProvider from "../context/ThemeContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeContextProvider>
      <Layout>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1,
  maximum-scale=5"
          />

          <link rel="icon" href="vercel.png" />

          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          />

          <title>Devchallenges</title>
        </Head>
        <Component {...pageProps} />
      </Layout>
    </ThemeContextProvider>
  );
}

export default MyApp;
