import {Box, HStack, Image, Text, IconButton, Select, Button} from "@chakra-ui/react"
import { faPhone, faMessage, faClock, faSearch} from "@fortawesome/free-solid-svg-icons"
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons"

import { Switch } from "../context/Switch"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
//import img from "./images/twoHeadBackground.png"
import img1 from "./images/logo.png"
import { Link } from "react-router-dom"

export const HeaderContact = () => {

    const PageSelect = (e) => {
        const selectedValue = e.target.value
        window.location.href = `/${selectedValue}`
    }
    return (
        <Box
        top={0}
        left={0}
        right={0}
        as="section"
        h={{base: "auto", md: "20rem"}}
        w="100%"
        position="relative"
        bgColor="#F8F8F8"
        >
            <Box
            top="0.5"
            w="100%"
            position="absolute"
            h={{base: "auto", md: "4rem"}}
            color="black"
            bgColor="white"
            >

        <HStack
        border="1px solid black"
        borderInline="1px solid black"
        borderRight="none"
        borderLeft="none"
        pr="20"
        pl="20"
        h={{base: "auto", md: "2rem"}}
        m="auto"
        justify="space-between"
        align="center"
        bgColor="white"
        flexWrap="wrap"
        >
            <nav>
            <HStack spacing="18px" 
            borderLeft="ipx solid black"
            >
            <HStack spacing="8px" ><FontAwesomeIcon mr="4px" color="rgba(245, 100, 17, 1)" icon={faPhone}  /><Text  as="p" fontStyle="normal" fontSize={{ base: "12px", md: "sm" }} fontFamily="sans-serif" > (+234)8039884957 </Text></HStack>
            <HStack spacing="8px"><FontAwesomeIcon mr="4px" color="rgba(245, 100, 17, 1)" icon={faMessage}  /><Text  as="p" fontStyle="normal" fontSize={{ base: "12px", md: "sm" }} fontFamily="sans-serif" > info@triber-group.com </Text></HStack>
            <HStack spacing="8px"><FontAwesomeIcon mr="4px" color="rgba(245, 100, 17, 1)" icon={faClock}  /><Text  as="p" fontStyle="normal" fontSize={{ base: "12px", md: "sm" }} fontFamily="sans-serif" > Mon-Fri: 8:00 - 22:00 </Text></HStack>
            </HStack>
            </nav>
            <nav>
            <HStack spacing="18px"
            >
                        <a href="https://web.facebook.com/" rel="noOpener noReferral" target="_blank"> <FontAwesomeIcon  icon={faFacebook}/> </a>
                        <a href="https://www.instagram.com/" rel="noOpener noReferral" target="_blank"><FontAwesomeIcon  icon={faInstagram}/></a>
                        <a href="https://twitter.com/home" rel="noOpener noReferral" target="_blank"><FontAwesomeIcon  icon={faTwitter}/></a>
                        <FontAwesomeIcon icon={faSearch} />
            <IconButton
            icon={<Switch />}
            variant="ghost"
            />
            </HStack>
            </nav>
        </HStack>
        </Box>
        <Box
        top="10"
        w="100%"
        position="absolute"
        h={{base: "auto", md: "4rem"}}
        bgColor="white"
        >
            <HStack
            justify="space-between"
            align="center"
            pr="20"
            pl="20"
            m="auto"
            color="black"
            >
                <nav >
                    <Image src={img1} 
                    w="200px"
                    h={{base: "34px", md: "60px"}}
                    mt="1"
                    />
                </nav>
                <nav>
                    <HStack spacing="6" color="black">
                        <Link><Text color="black" as="p" fontStyle="normal" fontSize="14" fontFamily="serif">Home</Text></Link>
                        <Link rel="noFollow" to="/"><Text color="rgba(245, 100, 17, 1)" as="p" fontStyle="normal" fontSize="14" fontFamily="serif">About</Text></Link>
                        <Link>
                        <Select onSelect={PageSelect} placeholder="Our Business" color="black" border="none"  fontStyle="normal" fontSize="sm" fontFamily="serif">
                            <option value="/oil_trading">Oil Trading</option>
                            <option value="shipping">  Shipping</option>
                            <option value="procurement">Procurement</option>
                            <option value="soft_commodity">Soft Commodity</option>
                        </Select>
                        </Link>
                        <Link rel="noFollow" to="/"><Text color="black" as="p" fontStyle="normal" fontSize="14" fontFamily="serif">News & Events</Text></Link>
                        <Link rel="noFollow" to="/career"><Text color="black" as="p" fontStyle="normal" fontSize="14" fontFamily="serif">Career</Text></Link>
                        <Link rel="noFollow" to="/contact"><Text color="black" as="p" fontStyle="normal" fontSize="14" fontFamily="serif">Contact</Text></Link>
                    </HStack>
                </nav>
                <nav>
                    <Button background="#F56411" _hover="" border="none">Get Started</Button>
                </nav>
            </HStack>
        </Box>
        <Box pl="20" pr="20"  top="44" left="0.5" position="absolute" color="black" w="100%" >
                <Text as="h1" fontSize="36" fontFamily="sans-serif" fontWeight="extrabold">Contact</Text>
                <HStack ><Text color="#D9D9D9">Home> </Text> <Text color="black">Contact</Text></HStack>
        </Box>
        </Box>
    )
}