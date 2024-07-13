import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="description"
          content="MVP de um aplicativo de delivery de comida - DESAFIO TÉCNICO"
        />
        <link rel="icon" href="/favicon.ico" />
        <title>QUEM TEM BOCA</title>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
