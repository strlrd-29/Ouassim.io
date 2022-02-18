import { Box, Heading, Text, Link, useColorModeValue } from '@chakra-ui/react'
import NextLink from 'next/link'

export default function BlogPost({ title, description, date, bColor, slug }) {
    return (
        <NextLink href={`/blog/${slug}`} passHref>
            <Link
                w="full"
                _hover={{
                    textDecoration: 'none'
                }}
            >
                <Box
                    cursor="pointer"
                    border="2px"
                    borderRadius="md"
                    p={{ base: 1, md: 3 }}
                    borderColor={useColorModeValue('gray.700', 'blue.200')}
                    borderWidth={0}
                    boxShadow={useColorModeValue(
                        `1px 1px 8px ${bColor}`,
                        '1px 1px 8px skyblue'
                    )}
                    _hover={{
                        transform: 'scale(1.01)'
                    }}
                    w="full"
                    transition="all .2s ease-in-out"
                >
                    <Heading size="md" mb={4}>
                        {title}
                    </Heading>
                    <Text fontSize="lg">{description}</Text>
                    <Text>{date}</Text>
                </Box>
            </Link>
        </NextLink>
    )
}
