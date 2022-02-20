import { Flex, Link, Text, VStack } from '@chakra-ui/react'

export default function Track({ track, ranking, isValidating }) {
    return (
        <Flex alignItems="baseline" w="full">
            <Text fontSize="lg" fontWeight="bold">
                {ranking}.
            </Text>
            <VStack pl={3} alignItems="flex-start">
                <Link
                    href={track.songUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    fontSize="lg"
                    fontWeight="bold"
                    _hover={{ textDecoration: 'none' }}
                >
                    {track.title}
                </Link>
                <Text>{track.artist}</Text>
            </VStack>
        </Flex>
    )
}
