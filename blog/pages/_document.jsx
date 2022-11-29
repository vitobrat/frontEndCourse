import { Html, Head, Main, NextScript } from "next/document";

export default function Document(){
  return(
    <Html>
      <Head>
        <link rel="shortcut icon" href="icon.png" type="img/png"/>
        <meta name="description" content="This is my blog"/> 
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap" rel="stylesheet"/>
      </Head>
      <body>
        <Main></Main>
        <NextScript/>
      </body>
    </Html>
  )
}