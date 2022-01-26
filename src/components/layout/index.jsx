import { Container, VStack } from '@chakra-ui/react'

import Header from './Header'
import Footer from './Footer'

function Layout({ children }) {
	return (
		<>
			<Header />
			<Container
				maxW="container.sm"
				display="flex"
				minH={{ base: 'auto', md: '200vh' }}
				px={{ base: 4, md: 0 }}
				centerContent
			>
				<VStack flex={1} spacing={16} alignItems="stretch" w="full">
					<VStack spacing={16} flex={1} w="full" as="main">
						{children}
					</VStack>
					<Footer />
				</VStack>
			</Container>
		</>
	)
}

export default Layout
