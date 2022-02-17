import {
    VStack,
    Link,
    AspectRatio,
    Heading,
    Text,
    useColorModeValue
} from '@chakra-ui/react'

import Image from 'next/image'

export default function InstagramCard({ title, description, path, url }) {
    return (
        <VStack
            spacing={4}
            alignItems="flex-start"
            borderColor={useColorModeValue('gray.700', 'blue.200')}
            borderWidth={0}
            boxShadow={useColorModeValue(
                '1px 1px 8px #3B82F6',
                '1px 1px 8px skyblue'
            )}
            maxW="400px"
        >
            <Link href={url} isExternal>
                <Image
                    src={path}
                    alt={title}
                    placeholder="blur"
                    blurDataURL
                    width="400px"
                    height="200px"
                    objectFit="cover"
                    objectPosition="center"
                />
            </Link>
            <VStack alignItems="flex-start" p={{ base: 1, md: 3 }}>
                <Link href={url} isExternal target="_blank">
                    <Heading size="md">{title}</Heading>
                </Link>
                <Text fontSize="md">{description}</Text>
            </VStack>
        </VStack>
    )
}
