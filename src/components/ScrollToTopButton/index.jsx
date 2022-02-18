import { IconButton, useColorModeValue } from '@chakra-ui/react'
import { ArrowUp } from 'phosphor-react'
import { useEffect, useState } from 'react'

export default function ScrollToTopButton() {
    const [isVisible, setIsVisible] = useState(false)
    const bgColor = useColorModeValue('gray.100', 'gray.700')

    const upDateVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true)
        } else {
            setIsVisible(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', upDateVisibility)
        return () => window.removeEventListener('scroll', upDateVisibility)
    })

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <>
            {isVisible && (
                <IconButton
                    position="fixed"
                    zIndex="tooltip"
                    right={{ base: 5, md: 20 }}
                    bottom={{ base: 5, md: 20 }}
                    bg={bgColor}
                    aria-label="Scroll to top"
                    rounded="full"
                    size="lg"
                    onClick={scrollToTop}
                    icon={<ArrowUp />}
                />
            )}
        </>
    )
}
