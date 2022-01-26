import NextLink from 'next/link'
import { Box, HStack, Heading, VStack, Link, Icon } from '@chakra-ui/react'

import { ArrowRight } from 'phosphor-react'

import BlogPost from './BlogPostCard'

const SectionHeader = ({ children, ...rest }) => {
	return (
		<Heading
			textTransform="uppercase"
			size="md"
			color="trueGray.400"
			letterSpacing="1.3px"
			fontWeight="bold"
			mb={6}
			{...rest}
		>
			{children}
		</Heading>
	)
}

export default function Section({}) {
	return (
		<Box as="section">
			<SectionHeader>Recent Blog Posts</SectionHeader>

			<VStack spacing={8} alignItems="flex-start">
				<BlogPost
					title="How I built my portfolio using Next.js with Chakra-ui"
					description="Using Next.js along with Charka-ui and MDX to build my personal blog"
					date="26-01-2022"
				/>
				<BlogPost
					title="Everything you need to know about Next.js"
					description="A quick overview of Next.js and how it works"
					date="28-01-2022"
				/>
				<BlogPost
					title="How to build a blog with Next.js"
					description="A quick overview of Next.js and how it works"
					date="26-01-2022"
				/>
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
