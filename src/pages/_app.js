import { ChakraProvider, useColorMode } from '@chakra-ui/react'
import theme from '@/styles/theme'
import '@/styles/globals.css'
import { prismLightTheme, prismDarkTheme } from '@/styles/prism'
import { css, Global } from '@emotion/react'

const GlobalStyle = ({ children }) => {
    const { colorMode } = useColorMode()

    return (
        <>
            <Global
                styles={css`
                    ${colorMode === 'light' ? prismLightTheme : prismDarkTheme};
                `}
            />
            {children}
        </>
    )
}

function MyApp({ Component, pageProps }) {
    return (
        <ChakraProvider theme={theme}>
            <GlobalStyle>
                <Component {...pageProps} />
            </GlobalStyle>
        </ChakraProvider>
    )
}

export default MyApp
