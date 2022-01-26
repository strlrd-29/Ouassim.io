import Hero from '@/components/Hero'
import Layout from '@/components/layout'
import Section from '@/components/Section'

export default function Home() {
	return (
		<Layout
			title="Ouassim - Developer, Designer."
			description="Front-end developer, Javascript enthusiast, and in love with React"
		>
			<Hero />
			<Section header={'Blog Posts'}>
				<p>This is the blog post section </p>
			</Section>
		</Layout>
	)
}
