import { HStack, Link } from '@chakra-ui/react'

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
	return (
		<HStack
			as="header"
			justifyContent="center"
			pt={8}
			pb={16}
			px={{ base: 4, md: 0 }}
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
