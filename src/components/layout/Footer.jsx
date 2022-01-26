import { VStack, Link, Text, chakra, Divider, Stack } from '@chakra-ui/react'

import { useRouter } from 'next/router'
import NextLink from 'next/link'

import { firstGroup, secondGroup, thirdGroup } from '@/utils/constants'

export default function Footer() {
	const { asPath } = useRouter()

	return (
		<VStack as="footer" pb={8} spacing={8} alignItems="flex-start">
			<Divider colorScheme="blackAlpha" />
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
		</VStack>
	)
}
