import Head from 'next/head'
import { useRouter } from 'next/router'

import { Container, VStack } from '@chakra-ui/react'

import Header from './Header'
import Footer from './Footer'

function Layout(props) {
    const router = useRouter()
    const { children, ...customMeta } = props

    const meta = {
        title: 'Ouassim - Developer, Designer.',
        description: `Front-end developer, Javascript enthusiast, and in love with React`,
        image: 'https://leerob.io/static/images/banner.png',
        type: 'website',
        ...customMeta
    }
    return (
        <>
            <Head>
                <title>{meta.title}</title>
                <meta name="description" content={meta.description} />
                <meta
                    property="og:url"
                    content={`https://ouassim-io.vercel.app${router.asPath}`}
                />
                <link
                    rel="canonical"
                    href={`https://ouassim-io.vercel.app${router.asPath}`}
                />
                <meta property="og:type" content={meta.type} />
                <meta property="og:site_name" content="Ouassim Ghribi" />
                <meta property="og:description" content={meta.description} />
                <meta property="og:title" content={meta.title} />
                <meta property="og:image" content={meta.image} />
            </Head>
            <Header />
            <Container
                maxW="container.sm"
                display="flex"
                minH={{ base: 'auto', md: '100vh' }}
                px={{ base: 4, md: 0 }}
                mt="140px"
            >
                <VStack flex={1} spacing={16} alignItems="stretch" w="full">
                    <VStack
                        spacing={12}
                        flex={1}
                        alignItems="flex-start"
                        w="full"
                        as="main"
                    >
                        {children}
                    </VStack>
                    <Footer />
                </VStack>
            </Container>
        </>
    )
}

export default Layout
