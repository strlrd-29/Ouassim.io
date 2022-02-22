import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { HeartStraight } from 'phosphor-react'
import { Box, useColorModeValue, useToast } from '@chakra-ui/react'
import useSound from 'use-sound'
const sound = '/media/sounds/public_media_sounds_page-change.mp3'

export default function LikeButton() {
    const [hasClicked, setHasClicked] = useState(false)
    const [play] = useSound(sound)
    const toast = useToast()

    useEffect(() => {
        if (hasClicked) {
            toast({
                title: 'Liked',
                description: 'Happy you liked it! ❤',
                status: 'success',
                duration: 2000,
                isClosable: true
            })
        }
    }, [hasClicked])
    const heartColor = useColorModeValue('#000', '#fff')

    return (
        <motion.div
            whileTap={{ scale: !hasClicked ? 2 : 1 }}
            transition={{ duration: 0.5 }}
            onClick={() => {
                setHasClicked(!hasClicked)
                play()
            }}
            style={{
                cursor: 'pointer',
                width: 'fit-content',
                margin: '60px auto 0'
            }}
        >
            <Box color={hasClicked ? 'red.500' : heartColor}>
                <HeartStraight size={48} />
            </Box>
        </motion.div>
    )
}
