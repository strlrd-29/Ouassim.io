import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { serialize } from 'next-mdx-remote/serialize'
import matter from 'gray-matter'
import readingTime from 'reading-time'
import { format } from 'timeago.js'

import {
    VStack,
    Heading,
    HStack,
    Text,
    Spinner,
    Divider
} from '@chakra-ui/react'

import { getBlogPosts } from '@/utils/get-blog-posts'
import { readBlogPost } from '@/utils/read-blog-post'
import Container from '@/components/Container'
import { MDXRemote } from 'next-mdx-remote'
import MDXComponents from '@/components/mdx-components'
import ScrollToTopButton from '@/components/ScrollToTopButton'
import mdxPrism from 'mdx-prism'
import LikeButton from '@/components/LikeButton'

export default function BlogPost({
    title,
    description,
    date,
    source,
    readingTime
}) {
    const { query } = useRouter()
    const slug = query.slug

    return (
        <Container
            title={title}
            description={description}
            date={date}
            type="article"
        >
            <VStack
                position="relative"
                alignItems="stretch"
                w="full"
                spacing={8}
            >
                <VStack alignItems="flex-start" spacing={3}>
                    <Heading as="h1" size="lg">
                        {title}
                    </Heading>
                    <HStack
                        divider={
                            <Text mx={2} color="gray.500">
                                •
                            </Text>
                        }
                    >
                        <Text color="gray.500" fontSize="sm">
                            {format(date)}
                        </Text>
                        {/* <Text color="gray.500" fontSize="sm">
                            {views ?? <Spinner color="gray.500" size="xs" />}{' '}
                            views
                        </Text> */}
                        <Text color="gray.500" fontSize="sm">
                            {readingTime}
                        </Text>
                    </HStack>
                </VStack>
                <MDXRemote {...source} components={MDXComponents} />
                <LikeButton />
            </VStack>
            <ScrollToTopButton />
        </Container>
    )
}

export const getStaticPaths = async () => {
    const posts = getBlogPosts()

    return {
        paths: posts.map(({ slug }) => ({ params: { slug } })),
        fallback: false
    }
}

export const getStaticProps = async (ctx) => {
    const slug = ctx.params.slug

    const postContent = await readBlogPost(slug)
    const {
        content,
        data: { title, description, date }
    } = matter(postContent)

    return {
        props: {
            source: await serialize(content, {
                mdxOptions: {
                    remarkPlugins: [require('remark-code-titles')],
                    rehypePlugins: [mdxPrism]
                }
            }),
            readingTime: readingTime(content).text,
            title,
            description,
            date,
            slug
        }
    }
}
