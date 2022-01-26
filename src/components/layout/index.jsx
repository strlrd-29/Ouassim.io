import Head from 'next/head'

import { Container, VStack } from '@chakra-ui/react'

import Header from './Header'
import Footer from './Footer'

function Layout({ children, title, description }) {
	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name="description" content={description} />
			</Head>
			<Header />
			<Container
				maxW="container.sm"
				display="flex"
				minH={{ base: 'auto', md: '200vh' }}
				px={{ base: 4, md: 0 }}
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
