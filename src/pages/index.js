import Hero from '@/components/Hero'
import Layout from '@/components/layout'
import BlogSection from '@/components/BlogSection'

export default function Home() {
	return (
		<Layout
			title="Ouassim - Developer, Designer."
			description="Front-end developer, Javascript enthusiast, and in love with React"
		>
			<Hero />
			<BlogSection />
		</Layout>
	)
}
