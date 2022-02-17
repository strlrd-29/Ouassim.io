import NextLink from 'next/link'

import {
	Heading,
	Stack,
	VStack,
	HStack,
	Text,
	Icon,
	useColorMode,
	Link
} from '@chakra-ui/react'

import {
	FacebookLogo,
	InstagramLogo,
	LinkedinLogo,
	GithubLogo
} from 'phosphor-react'

import {
	FACEBOOK_PROFILE,
	INSTAGRAM_PROFILE,
	LINKEDIN_PROFILE,
	GITHUB_PROFILE
} from '@/utils/constants'

import ActionButton from '../core/ActionButton'

const SocialButton = ({ title, icon, href }) => {
	return (
		<Link href={href} isExternal aria-label={title}>
			<Icon
				fontSize="xl"
				transition="100ms ease-in-out"
				_hover={{ color: 'cyan.600' }}
				as={icon}
			/>
		</Link>
	)
}

export default function Hero() {
	const { colorMode } = useColorMode()
	return (
		<VStack alignItems="flex-start">
			<Heading>Hi, my name is Ouassim</Heading>
			<Text color={colorMode === 'dark' ? '#f5f6f7' : 'black'}>
				I&apos;m a front-end web developer based in Algeria. I love to
				create beautiful and fast web applications using React /
				Next.js.
			</Text>
			<Stack spacing={4} direction={{ base: 'column', md: 'row' }}>
				<NextLink href="/about" passHref>
					<ActionButton>More about me →</ActionButton>
				</NextLink>
				<HStack>
					<SocialButton
						title="Facebook"
						icon={FacebookLogo}
						href={FACEBOOK_PROFILE}
					/>
					<SocialButton
						title="Instagram"
						icon={InstagramLogo}
						href={INSTAGRAM_PROFILE}
					/>
					<SocialButton
						title="Linkedin"
						icon={LinkedinLogo}
						href={LINKEDIN_PROFILE}
					/>
					<SocialButton
						title="Github"
						icon={GithubLogo}
						href={GITHUB_PROFILE}
					/>
				</HStack>
			</Stack>
		</VStack>
	)
}
