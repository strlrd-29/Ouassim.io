import { INSTAGRAM_PROFILE } from '@/utils/constants'
import {
    HStack,
    Text,
    VStack,
    useClipboard,
    Button,
    Alert,
    AlertIcon,
    useToast
} from '@chakra-ui/react'
import Link from 'next/link'
import { PaperPlaneTilt, DiscordLogo, InstagramLogo } from 'phosphor-react'
import { useEffect } from 'react'

function Contact() {
    const toast = useToast()
    const { hasCopied, onCopy } = useClipboard('ouassim#0629')
    useEffect(() => {
        if (hasCopied) {
            toast({
                title: 'Copied',
                description: 'Username has been copied to your clipboard 😊',
                status: 'success',
                duration: 2000,
                isClosable: true
            })
        }
    }, [toast, hasCopied])

    return (
        <VStack w="full" gap={4}>
            <Text>
                I love connecting with people and I am always looking for new
                opportunities to work with them. If you are interested in
                working with me, please contact me at:
            </Text>
            <VStack w="full" alignItems="flex-start">
                <HStack alignItems={'center'}>
                    <PaperPlaneTilt />
                    <Text>
                        <Button
                            as="a"
                            variant={'ghost'}
                            href="mailto:ghribim08@gmail.com"
                        >
                            Send an email.
                        </Button>
                    </Text>
                </HStack>
                <HStack alignItems={'center'}>
                    <DiscordLogo />
                    <Button variant="ghost" onClick={onCopy}>
                        Chat on Discord - ouassim#0629
                    </Button>
                </HStack>
                <HStack alignItems={'center'}>
                    <InstagramLogo />
                    <Button
                        as="a"
                        href={INSTAGRAM_PROFILE}
                        target="_blank"
                        variant="ghost"
                    >
                        DM me on Instagram
                    </Button>
                </HStack>
            </VStack>
        </VStack>
    )
}

export default Contact
