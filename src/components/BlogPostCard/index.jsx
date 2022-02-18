import Link from 'next/link'
import {
    LinkBox,
    LinkOverlay,
    Heading,
    Text,
    VStack,
    useColorModeValue,
    HStack
} from '@chakra-ui/react'

import { format } from 'timeago.js'

const BlogPostCard = ({ title, description, slug, date, readingTime }) => {
    const hoverBg = useColorModeValue('gray.100', 'gray.800')

    return (
        <LinkBox as="article">
            <VStack
                alignItems="stretch"
                w="full"
                p={{ base: 0, md: 4 }}
                _hover={{
                    bg: hoverBg,
                    transform: 'scale(1.025, 1.025)'
                }}
                rounded="md"
                transitionDuration="slow"
                transitionProperty="all"
                transitionTimingFunction="ease-out"
            >
                <VStack alignItems="flex-start">
                    <Link href={`/blog/${slug}`} passHref>
                        <LinkOverlay>
                            <Heading size="md">{title}</Heading>
                        </LinkOverlay>
                    </Link>
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
                        <Text color="gray.500" fontSize="sm">
                            {readingTime}
                        </Text>
                    </HStack>
                </VStack>
                <Text color="gray.500" fontSize="md" isTruncated>
                    {description}
                </Text>
            </VStack>
        </LinkBox>
    )
}

export default BlogPostCard
