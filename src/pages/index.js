import Layout from '@/components/layout'
import { Heading, Link } from '@chakra-ui/react'

export default function Home() {
	return (
		<Layout
			title="Ouassim - Developer, Designer."
			description="Front-end developer, Javascript enthusiast, and in love with React"
		>
			<Heading>Hello World</Heading>
			<Link>Next JS</Link>
		</Layout>
	)
}
