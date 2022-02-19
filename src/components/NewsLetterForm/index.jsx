import { useState } from 'react'

import {
    chakra,
    VStack,
    InputGroup,
    Input,
    InputRightElement,
    useColorModeValue,
    Heading,
    Text,
    Icon,
    IconButton
} from '@chakra-ui/react'

// import useSwr from 'swr'

import { Envelope } from 'phosphor-react'

// import fetcher from '@/utils/fetcher'

export default function NewsLetterForm() {
    const [form, setForm] = useState({ state: '', message: '' })

    // const { data } = useSwr('/api/newsletter/subscribers', fetcher)
    const detailColor = useColorModeValue('gray.500', 'gray.400')

    const subscribe = (e) => {
        e.preventDefault()
        setForm({ state: 'loading', message: '' })

        if (!e.target.value) {
            setForm({
                state: 'error',
                message: 'Please fill in your email address'
            })
        } else {
            setForm({
                state: 'success',
                message: 'You have successfully subscribed to our newsletter'
            })
        }
    }

    return (
        <VStack
            alignItems="flex-start"
            w="full"
            p={{ base: 4, md: 6 }}
            bg={useColorModeValue('gray.50', 'gray.800')}
            rounded="md"
            spacing={3}
        >
            <Heading size="md">Subscribe to my newsletter ✉️</Heading>
            <Text>
                Get emails from me about web development, and whenever I publish
                new content.
            </Text>
            {form.state !== 'success' && form.state !== 'error' && (
                <>
                    <chakra.form
                        name="subscribe-form"
                        target="_blank"
                        w="full"
                        onSubmit={subscribe}
                    >
                        <InputGroup w="full">
                            <Input
                                disabled={form.state === 'loading'}
                                name="email"
                                placeholder="email@example.com"
                                type="email"
                                variant="filled"
                            />
                            <InputRightElement>
                                <IconButton
                                    aria-label="Subscribe"
                                    icon={<Icon as={Envelope} />}
                                    isLoading={form.state === 'loading'}
                                    name="subscribe"
                                    size="sm"
                                    type="submit"
                                />
                            </InputRightElement>
                        </InputGroup>
                    </chakra.form>
                    {/* <Text color={detailColor} fontSize="sm">
                        Join {data?.count}+ subscribers
                    </Text> */}
                </>
            )}
            {form.state === 'success' && (
                <Text color="green.500" size="sm">
                    {form.message}
                </Text>
            )}
            {form.state === 'error' && (
                <Text color="red.500" size="sm">
                    {form.message} 😕
                </Text>
            )}
        </VStack>
    )
}
