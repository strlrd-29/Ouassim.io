import NextLink from 'next/link'
import { Box, HStack, VStack, Link, Icon } from '@chakra-ui/react'

import { ArrowRight } from 'phosphor-react'

import BlogPost from './BlogPostCard'

import SectionHeader from '../SectionHeader'

export default function BlogPostSection({ posts }) {
	return (
		<Box as="section">
			<SectionHeader>Recent Blog Posts</SectionHeader>
			<VStack spacing={8} alignItems="flex-start">
				{posts.map((post, index) => (
					<BlogPost
						key={index}
						title={post.title}
						date={post.date}
						description={post.description}
					/>
				))}
				<NextLink href="/blog">
					<HStack mt={2} alignItems="center" role="group">
						<Link color="cyan.600" size="md">
							View All Posts
						</Link>
						<Icon
							color="cyan.600"
							as={ArrowRight}
							transitionProperty="margin-left"
							transitionDuration="slow"
							transitionTimingFunction="ease-out"
							ml={2}
							_groupHover={{
								ml: 3
							}}
						/>
					</HStack>
				</NextLink>
			</VStack>
		</Box>
	)
}
