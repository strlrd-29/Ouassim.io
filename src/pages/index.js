import Hero from '@/components/Hero'
import Layout from '@/components/layout'
import BlogSection from '@/components/BlogSection'
import InstagramSection from '@/components/InstagramSection'

import { getBlogPosts } from '@/utils/get-blog-posts'
import { readData } from '@/utils/read-data'

export default function Home({ posts, InstaPosts }) {
    return (
        <Layout
            title="Ouassim - Developer, Designer."
            description="Front-end developer, Javascript enthusiast, and in love with React"
        >
            <Hero />
            <BlogSection posts={posts} />
            {/* <InstagramSection InstaPosts={InstaPosts} /> */}
        </Layout>
    )
}

export async function getStaticProps() {
    const { InstaPosts } = await readData('data/instagram/posts.json')
    const posts = getBlogPosts()
    const props = {
        posts,
        InstaPosts
    }
    return {
        props
    }
}
