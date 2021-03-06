import Document, { Html, Head, Main, NextScript } from 'next/document'
import theme from '@/styles/theme'
import { ColorModeScript } from '@chakra-ui/react'

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <link rel="icon" href="/media/favicon/code.png" />
                    <link
                        rel="preload"
                        href="/fonts/inter-var-latin.woff2"
                        as="font"
                        type="font/woff2"
                        crossOrigin="anonymous"
                    />
                    <link
                        href="/fonts/ibm-plex-sans-var.woff2"
                        as="font"
                        type="font/woff2"
                        crossOrigin="anonymous"
                    />
                    <script
                        defer
                        data-domain="ouassim.me"
                        src="https://plausible.io/js/plausible.js"
                    ></script>
                </Head>
                <body>
                    <ColorModeScript
                        initialColorMode={theme.config.initialColorMode}
                    />
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
