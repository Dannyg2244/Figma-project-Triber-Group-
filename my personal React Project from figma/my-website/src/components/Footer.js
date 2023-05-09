import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom"
import { faFacebook, faInstagram, faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react"

export const Footer = () => {
    return(
        <Box
        top={0}
        left={0}
        right={0}
        w="100%"
        h="25rem"
        bgColor="black"
        >
            <footer>
            <HStack
            as="section"
            bgColor="black"
            color="white"
            h="5rem"
            pl="4rem"
            pr="4rem"
            justifyContent="space-between" 
            alignContent="center"
            spacing="8"
            >
                <Box>
                    <HStack spacing="8">
                    <Link><Text>About</Text></Link>
                    <Link><Text>FAQs</Text></Link>
                    <Link><Text>Disclaimer</Text></Link>
                    <Link><Text>Terms of Use</Text></Link>
                    <Link><Text>Privacy</Text></Link>
                    </HStack>
                </Box>
                <Box>
                <HStack spacing="4">
                    <a href=""> <FontAwesomeIcon  icon={faFacebook}/> </a>
                    <a href=""><FontAwesomeIcon  icon={faInstagram}/></a>
                    <a href=""><FontAwesomeIcon  icon={faTwitter}/></a>
                    <a href=""><FontAwesomeIcon  icon={faLinkedin}/></a>
                </HStack>
                </Box>
            </HStack>
            </footer>
            <footer>
                <HStack
                h="15rem"
                bgColor="black"
                color="white"
                justifyContent="space-between"
                pl="4rem"
                pr="4rem"
                >
                    <Box>
                            <Text mt="-16" fontStyle="normal" fontWeight="800" lineHeight="27px" color="#FFFFFF">Our Business</Text>
                            <Text as="p">Oil Trading</Text>
                            <Text as="p">Shipping</Text>
                            <Text as="p">Procurement</Text>
                            <Text as="p">Soft commodities</Text>
                    </Box>
                    <Box>
                    <Text fontStyle="normal" fontWeight="800" lineHeight="27px" color="#FFFFFF">Head Office</Text>
                    <Text>  Triber Group</Text>
                    <Text>44, Raymond Njoku Street</Text>
                    <Text>Ikoyi, Lagos, Nigeria</Text>
                    <Text>P.O. Box 55471, Ikoyi Lagos</Text>
                    <Text>Tel:+2348087145807</Text>
                    <Text>Email:info@triber-group.com</Text>
                    <Text>career@triber-group.com</Text>
                    </Box>
                    <Box>
                        <Text mt="-24" fontStyle="normal" fontWeight="800" lineHeight="27px" color="#FFFFFF">Other Locations</Text>
                        <Text>Nigeria</Text>
                        <Text>Ghana</Text>
                        <Text>Hong Kong</Text>
                    </Box>
                    <Box>
                        <Text mt="-4" fontStyle="normal" fontWeight="800" lineHeight="27px" color="#FFFFFF">Reliable</Text>
                        <Text mt="4" mb="4" fontStyle="normal" fontWeight="800" lineHeight="27px" color="#FFFFFF">Energy</Text>
                        <Text mb="4" fontStyle="normal" fontWeight="800" lineHeight="27px" color="#FFFFFF">Limitless</Text>
                        <Text mb="4" fontStyle="normal" fontWeight="800" lineHeight="27px" color="#FFFFFF">Potential</Text>
                    </Box>
                </HStack>
                <HStack
                h="5rem"
                bgColor="black"
                color="#FFFFFF"
                justify="space-between"
                pl="4rem"
                pr="4rem"
                >
                    <Box>
                        <HStack>
                            <Text>© 2022 Triber Group. All rights reserved.</Text>
                        </HStack>
                    </Box>
                    <Box>
                        <HStack spacing="4">
                        <a href=""> <FontAwesomeIcon  icon={faFacebook}/> </a>
                        <a href=""><FontAwesomeIcon  icon={faInstagram}/></a>
                        <a href=""><FontAwesomeIcon  icon={faTwitter}/></a>
                        <a href=""><FontAwesomeIcon  icon={faLinkedin}/></a>
                        </HStack>
                    </Box>
                </HStack>
            </footer>
        </Box>
    )
}