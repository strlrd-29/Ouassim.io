import BlogPostCard from '@/components/BlogPostCard'
import Layout from '@/components/Container'
import { getBlogPosts } from '@/utils/get-blog-posts'
import {
    Heading,
    Icon,
    Input,
    InputGroup,
    InputLeftElement,
    List,
    ListItem,
    Text,
    VStack
} from '@chakra-ui/react'
import { MagnifyingGlass } from 'phosphor-react'
import { useState } from 'react'

export default function About({ posts }) {
    const [displayedPosts, setDisplayedPosts] = useState(posts)

    const onSearch = (e) => {
        const query = e.target.value.toLowerCase()
        const filteredPosts = posts.filter((post) => {
            return (
                post.title.toLowerCase().includes(query) ||
                post.description.toLowerCase().includes(query)
            )
        })
        setDisplayedPosts(filteredPosts)
    }
    return (
        <Layout
            title="Blog - Ouassim Ghribi"
            description="Sharing my experiences in my journey to learning new technologies."
        >
            <VStack as="section" w="full" alignItems="flex-start" spacing={3}>
                <Heading size="lg">Blog.</Heading>
                <Text fontSize="md">
                    Web development, with a focus on the React ecosystem. I
                    write about my experiences in the field of web development.
                    I also share my thoughts on the latest technologies.
                </Text>
                <InputGroup>
                    <InputLeftElement pointerEvents="none">
                        <Icon as={MagnifyingGlass} color="gray.400" />
                    </InputLeftElement>
                    <Input
                        onChange={onSearch}
                        placeholder="Search blog posts"
                        variant="filled"
                    />
                </InputGroup>
            </VStack>
            <List w="full" spacing={3}>
                {displayedPosts.map((post) => (
                    <ListItem key={post.slug}>
                        <BlogPostCard {...post} />
                    </ListItem>
                ))}
            </List>
        </Layout>
    )
}

export async function getStaticProps() {
    const posts = getBlogPosts()
    return {
        props: {
            posts
        }
    }
}
