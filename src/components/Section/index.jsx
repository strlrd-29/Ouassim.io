import { Box, Heading } from '@chakra-ui/react'

const SectionHeader = ({ children, ...rest }) => {
	return (
		<Heading
			textTransform="uppercase"
			size="md"
			color="trueGray.400"
			letterSpacing="1.3px"
			fontWeight="bold"
			mb={4}
			{...rest}
		>
			{children}
		</Heading>
	)
}

export default function Section({ header, children, ...rest }) {
	return (
		<Box {...rest} as="section">
			<SectionHeader>{header}</SectionHeader>
			{children}
		</Box>
	)
}
