import {
    HStack,
    Link,
    useColorModePreference,
    useColorModeValue
} from '@chakra-ui/react'

import NextLink from 'next/link'
import { useRouter } from 'next/router'

import useSound from 'use-sound'

import ToggleThemeBtn from './ToggleThemeBtn'

import { navLinks } from '@/utils/constants'
const sound = '/media/sounds/public_media_sounds_page_switching.mp3'

const NavLink = ({ href, text }) => {
    const { asPath } = useRouter()
    const [play] = useSound(sound)
    const isActive = asPath === href

    return (
        <NextLink href={href} passHref>
            <Link
                fontSize={{ base: 'md', md: 'lg' }}
                variant={isActive ? 'ghost-sm-active' : 'ghost-sm'}
                onClick={() => {
                    play()
                }}
            >
                {text}
            </Link>
        </NextLink>
    )
}

function Header() {
    const bgColor = useColorModeValue(
        'rgba(255, 255, 255, 0.9)',
        'rgba(13, 16, 19, 0.9)'
    )
    return (
        <HStack
            as="header"
            justifyContent="center"
            pt={6}
            pb={6}
            px={{ base: 4, md: 0 }}
            position="fixed"
            zIndex={999}
            top={0}
            w="full"
            bg={bgColor}
            backdropFilter="blur(2px)"
            boxShadow={`0px 0px 10px ${bgColor}`}
        >
            <HStack maxW="container.sm" w="full" justifyContent="space-between">
                <HStack as="nav" spacing={3}>
                    {navLinks.map(({ href, text }) => (
                        <NavLink key={href} href={href} text={text} />
                    ))}
                </HStack>
                <ToggleThemeBtn />
            </HStack>
        </HStack>
    )
}

export default Header
