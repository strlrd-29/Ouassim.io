import { Box, Heading, Text, VStack } from '@chakra-ui/react'

export default function BlogPost({ title, description, date }) {
	return (
		<Box cursor="pointer">
			<Heading size="md" mb={4}>
				{title}
			</Heading>
			<Text fontSize="lg">{description}</Text>
			<Text>{date}</Text>
		</Box>
	)
}
