import Hero from '@/components/Hero'
import Layout from '@/components/layout'
import BlogSection from '@/components/BlogSection'
import InstagramSection from '@/components/InstagramSection'

import { getBlogPosts } from '@/utils/get-blog-posts'
import { readData } from '@/utils/read-data'

export default function Home({ posts, Posts }) {
	return (
		<Layout
			title="Ouassim - Developer, Designer."
			description="Front-end developer, Javascript enthusiast, and in love with React"
		>
			<Hero />
			<BlogSection posts={posts} />
			<InstagramSection Posts={Posts} />
		</Layout>
	)
}

export async function getStaticProps() {
	const { Posts } = await readData('data/instagram/posts.json')
	const posts = await getBlogPosts()
	const props = {
		posts,
		Posts
	}
	return {
		props
	}
}
