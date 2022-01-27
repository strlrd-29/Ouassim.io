import { VStack, Link, AspectRatio, Heading, Text } from '@chakra-ui/react'

import Image from 'next/image'

export default function InstagramCard({ title, description, path, url }) {
	return (
		<VStack spacing={4} alignItems="flex-start">
			<Link href={url} isExternal>
				<AspectRatio ratio={1.91 / 1}>
					<Image
						src={path}
						alt={title}
						width="100%"
						height="100%"
						objectFit="cover"
						objectPosition="center"
					/>
				</AspectRatio>
			</Link>
			<VStack alignItems="flex-start">
				<Link href={url} isExternal target="_blank">
					<Heading size="md">{title}</Heading>
				</Link>
				<Text fontSize="lg">{description}</Text>
			</VStack>
		</VStack>
	)
}
