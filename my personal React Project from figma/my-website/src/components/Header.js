import {Box, VStack, HStack, Image, Text, IconButton, Select, Button} from "@chakra-ui/react"
import { faPhone, faMessage, faClock, faSearch } from "@fortawesome/free-solid-svg-icons"
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons"

import { Switch } from "../context/Switch"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import img from "./images/twoHeadBackground.png"
import img1 from "./images/logo.png"
import { Link } from "react-router-dom"

export const Header = () => {
    return (
        <Box
        top={0}
        left={0}
        right={0}
        as="section"
        h="25rem"
        w="100%"
        position="relative"
        >
            <Image src={img} 
            alt="my image"
            w="100%"
            h="25rem"
            position="absolute"
            />
            <Box
            top="0.5"
            w="100%"
            position="absolute"
            h="4rem"
            color="white"
            >

        <HStack
        border="1px solid white"
        borderInline="1px solid white"
        borderRight="none"
        borderLeft="none"
        pr="20"
        pl="20"
        h="2rem"
        m="auto"
        justify="space-between"
        align="center"
        >
            <nav>
            <HStack spacing="18px" 
            borderLeft="ipx solid white"
            >
            <HStack spacing="8px" ><FontAwesomeIcon mr="4px" color="rgba(245, 100, 17, 1)" icon={faPhone}  /><Text  as="p" fontStyle="normal" fontSize="sm" fontFamily="sans-serif" > (+234)8039884957 </Text></HStack>
            <HStack spacing="8px"><FontAwesomeIcon mr="4px" color="rgba(245, 100, 17, 1)" icon={faMessage}  /><Text  as="p" fontStyle="normal" fontSize="sm" fontFamily="sans-serif" > info@triber-group.com </Text></HStack>
            <HStack spacing="8px"><FontAwesomeIcon mr="4px" color="rgba(245, 100, 17, 1)" icon={faClock}  /><Text  as="p" fontStyle="normal" fontSize="sm" fontFamily="sans-serif" > Mon-Fri: 8:00 - 22:00 </Text></HStack>
            </HStack>
            </nav>
            <nav>
            <HStack spacing="18px" 
            
            >
            <FontAwesomeIcon mr="4px" color="white" icon={faFacebook}  />
            <FontAwesomeIcon mr="4px" color="white" icon={faInstagram}  />
            <FontAwesomeIcon mr="4px" color="white" icon={faTwitter}  />
            <FontAwesomeIcon mr="4px" color="white" icon={faSearch}  />
            <IconButton 
            icon={<Switch />}
            variant="ghost"

            
            />
            </HStack>
            </nav>
        </HStack>
        </Box>
        <Box
        top="12"
        w="100%"
        position="absolute"
        h="4rem"
        >
            <HStack
            justify="space-between"
            align="center"
            pr="20"
            pl="20"
            m="auto"
            color="white"
            >
                <nav >
                    <Image src={img1} 
                    w="200px"
                    h="60px"
                    mt="4"
                    />
                </nav>
                <nav>
                    <HStack spacing="6" color="black">
                        <Link><Text color="white" as="p" fontStyle="normal" fontSize="14" fontFamily="serif">Home</Text></Link>
                        <Link><Text color="rgba(245, 100, 17, 1)" as="p" fontStyle="normal" fontSize="14" fontFamily="serif">About</Text></Link>
                        <Link>
                        <Select placeholder="Our Business" color="black" border="none"  fontStyle="normal" fontSize="sm" fontFamily="serif">
                            <option value="option1" >Option 1</option>
                            <option value="option2" >Option 2</option>
                            <option value="option3" >Option 3</option>
                        </Select>
                        </Link>
                        <Link><Text color="white" as="p" fontStyle="normal" fontSize="14" fontFamily="serif">News & Events</Text></Link>
                        <Link><Text color="white" as="p" fontStyle="normal" fontSize="14" fontFamily="serif">Career</Text></Link>
                        <Link><Text color="white" as="p" fontStyle="normal" fontSize="14" fontFamily="serif">Contact</Text></Link>
                    </HStack>
                </nav>
                <nav>
                    <Button background="#F56411" _hover="" border="none">Get Started</Button>
                </nav>
            </HStack>
        </Box>
        <Box top="40" position="absolute" color="white" w="100%" >
            <VStack  justify="center" align="center">
                <Text as="h1" fontSize="36" fontFamily="sans-serif"> About Us</Text>
                <Box borderBottom="2px solid white" w="40px" mt="4" mb="4" />
            </VStack>
        </Box>
        </Box>
    )
}