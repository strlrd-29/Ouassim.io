import { useEffect } from 'react'
import useSWR from 'swr'
import fetcher from '@/utils/fetcher'
import {
    Box,
    Flex,
    HStack,
    Link,
    Text,
    useColorModeValue
} from '@chakra-ui/react'
import { SpotifyLogo } from 'phosphor-react'
import { motion } from 'framer-motion'

const MotionBox = motion(Box)

function AnimatedBars() {
    return (
        <Flex h="full" gap={1}>
            <MotionBox
                w={1}
                h={3}
                bg={'#1ED760'}
                animate={{
                    scaleY: [1, 1.5, 1],
                    translateY: ['0rem', '-0.082rem', '0rem']
                }}
                initial={{
                    scaleY: 0
                }}
                transition={{
                    repeat: Infinity,
                    duration: 1,
                    ease: 'easeInOut'
                }}
            ></MotionBox>
            <MotionBox
                w={1}
                h={3}
                bg={'#1ED760'}
                animate={{
                    scaleY: [1, 1.5, 1],
                    translateY: ['0rem', '-0.082rem', '0rem']
                }}
                initial={{
                    scaleY: 0
                }}
                transition={{
                    repeat: Infinity,
                    duration: 1.2,
                    ease: 'easeInOut',
                    delay: '0.1s'
                }}
            ></MotionBox>
            <MotionBox
                w={1}
                h={3}
                bg={'#1ED760'}
                animate={{
                    scaleY: [1, 0.5, 1],
                    translateY: ['0rem', '-0.082rem', '0rem']
                }}
                initial={{
                    scaleY: 0
                }}
                transition={{
                    repeat: Infinity,
                    duration: 1,
                    ease: 'easeInOut',
                    delay: '0.2s'
                }}
            ></MotionBox>
        </Flex>
    )
}

export default function NowPlaying() {
    const { data } = useSWR('/api/spotify/now-playing', fetcher)

    const color = useColorModeValue('#222222', '#ffffff')

    return (
        <HStack color="#1ED760">
            {data?.isPlaying ? (
                <HStack>
                    <AnimatedBars />
                    <Link
                        href={data.songUrl}
                        _hover={{
                            textDecoration: 'none'
                        }}
                        fontSize="lg"
                        fontWeight="semibold"
                        isExternal
                        color={color}
                    >
                        {data.title}
                    </Link>
                    <Text fontSize="lg" color={color}>
                        - {data.artist}
                    </Text>
                </HStack>
            ) : (
                <HStack>
                    <SpotifyLogo size={28} />
                    <Text>Nothing playing</Text>
                    <Text
                        _hover={{
                            color: '#1ED760'
                        }}
                    >
                        - Spotify
                    </Text>
                </HStack>
            )}
        </HStack>
    )
}
