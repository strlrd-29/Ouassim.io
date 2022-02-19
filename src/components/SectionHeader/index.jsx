import { Heading, useColorModeValue } from '@chakra-ui/react'

export default function SectionHeader({ children, ...rest }) {
    return (
        <Heading
            textTransform="uppercase"
            size="md"
            color={useColorModeValue('trueGray.600', 'trueGray.300')}
            letterSpacing="1.3px"
            fontWeight="bold"
            mb={6}
            {...rest}
        >
            {children}
        </Heading>
    )
}
