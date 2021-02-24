import Document, { Html, Head, Main, NextScript } from 'next/document';

{/* Está é a forma de "controlar" o html da aplicação com o next (!Carrega uma única vez por visita do usuario) */ }
export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link rel="shortcut icon" href="favicon.png" type="image/png" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Rajdhani:wght@600&display=swap" rel="stylesheet" />
                </Head>
                <body>
                    <Main /> {/* Aplicação */}
                    <NextScript /> {/* Alguns scripts injetados na aplicação pelo next de forma automatizada */}
                </body>
            </Html>
        );
    }
}