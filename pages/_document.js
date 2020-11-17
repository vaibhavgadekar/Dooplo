import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html>
                <Head>
                    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
                    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
                    <meta name="forntEnd-Developer" content="Mamunur Rashid" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <title> Dooplo - Gaming HTML Template</title>
                    <link rel="shortcut icon" href="assets/images/favicon.html" type="image/x-icon" />
                    <link rel="stylesheet" href="assets/css/bootstrap.min.css" />
                    <link rel="stylesheet" href="assets/css/plugin.css" />
                    <link rel="stylesheet" href="assets/css/style.css" />
                    <link rel="stylesheet" href="assets/css/responsive.css" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                    <script src="assets/js/jquery.js"></script>
                    <script src="assets/js/popper.min.js"></script>
                    <script src="assets/js/bootstrap.min.js"></script>
                    <script src="assets/js/plugin.js"></script>
                    <script src="assets/js/TweenMax.js"></script>
                    <script src="assets/js/mousemoveparallax.js"></script>
                    <script src="assets/js/main.js"></script>
                </body>
            </Html>
        )
    }
}

export default MyDocument