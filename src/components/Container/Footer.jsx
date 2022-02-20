import {
    VStack,
    Link,
    Text,
    chakra,
    Divider,
    Stack,
    HStack
} from '@chakra-ui/react'

import { useRouter } from 'next/router'
import NextLink from 'next/link'

import VercelCallout from '../vercelCallout'

import { firstGroup, secondGroup, thirdGroup } from '@/utils/constants'
import { SpotifyLogo } from 'phosphor-react'
import NowPlaying from '../NowPlaying'

export default function Footer() {
    const { asPath } = useRouter()

    return (
        <VStack as="footer" pb={8} spacing={8} alignItems="flex-start">
            <Divider colorScheme="blackAlpha" />
            <NowPlaying />
            <Stack
                direction={{ base: 'column', md: 'row' }}
                justifyContent="space-between"
                w="full"
                spacing={{ base: 4, md: 8 }}
            >
                <VStack alignItems="flex-start">
                    {firstGroup.map(({ href, text }) => (
                        <NextLink key={href} href={href} passHref>
                            <Link
                                variant={
                                    asPath === href
                                        ? 'footer-link-active'
                                        : 'footer-link'
                                }
                                isExternal={href.startsWith('https')}
                            >
                                {text}
                            </Link>
                        </NextLink>
                    ))}
                </VStack>
                <VStack alignItems="flex-start">
                    {secondGroup.map(({ href, text }) => (
                        <NextLink key={href} href={href} passHref>
                            <Link
                                variant="footer-link"
                                isExternal={href.startsWith('https')}
                            >
                                {text}
                            </Link>
                        </NextLink>
                    ))}
                </VStack>
                <VStack alignItems="flex-start">
                    {thirdGroup.map(({ href, text }) => (
                        <NextLink key={href} href={href} passHref>
                            <Link
                                variant={
                                    asPath === href
                                        ? 'footer-link-active'
                                        : 'footer-link'
                                }
                                isExternal={href.startsWith('https')}
                            >
                                {text}
                            </Link>
                        </NextLink>
                    ))}
                </VStack>
            </Stack>
            <Stack
                w="full"
                direction={{ base: 'column', md: 'row' }}
                alignItems="center"
                justifyContent={{ base: 'center', md: 'space-between' }}
                spacing={0}
                gridRowGap={4}
            >
                <Text color="gray.400" fontSize="md">
                    ©{' '}
                    <chakra.span as="time" color="#14b8a6">
                        {new Date().getFullYear()}
                    </chakra.span>{' '}
                    Ouassim Ghribi
                </Text>
                <VercelCallout />
            </Stack>
        </VStack>
    )
}
