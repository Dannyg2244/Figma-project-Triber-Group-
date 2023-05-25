import { Box, HStack, Image, Text, VStack, Stack, Grid, GridItem } from "@chakra-ui/react"
import {InputGroup, Input, InputRightElement, Button} from "@chakra-ui/react"
import img1 from "./images/bridegFalling.png"
import img2 from "./images/construction.png"
import img3 from "./images/AfricanPipe.png"
import img4 from "./images/AfricanRoadCompany.png"
import img5 from "./images/backgroundBuilding.png"
import { faClock, faEnvelope, faSearch } from "@fortawesome/free-solid-svg-icons"
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


export const HomeNew = () => {
    return (
        <Box
        top={0}
        left={0}
        right={0}
        as="section"
        w="100%"
        bgColor="#F8F8F8"
        pl="20"
        pr="20"
        >
            <Box
            //h="50rem"
            >
                <Grid
                templateAreas={`    "header"    "main"     
                 "nav"
                `}
                gridTemplateColumns={'20rem 20rem 20rem'}
                gridTemplateRows= {'24rem 24rem '}
                //h="20rem"
                gap="16"
                >
                <GridItem
                bg="white"
                //area={'header'}
                pl="4"
                pr="4"
                pt="4"
                >
                    <Image 
                    src={img1}
                    h="17rem"
                    />
                    <HStack>
                        <HStack spacing="8px" ><FontAwesomeIcon mr="4px" color="rgba(245, 100, 17, 1)" icon={faClock}  /><Text  as="p" fontStyle="normal" fontSize="sm" fontFamily="sans-serif" > June 06, 2023 </Text></HStack>
                        <HStack spacing="8px"><FontAwesomeIcon mr="4px" color="rgba(245, 100, 17, 1)" icon={faEnvelope}  /><Text  as="p" fontStyle="normal" fontSize="sm" fontFamily="sans-serif" > Category </Text></HStack>
                    </HStack>
                    <Text fontWeight="bold">African Integrated Soft Commodity Companies</Text>
                    <Text fontWeight="bold" fontSIze="0.5px">Read More ></Text>
                </GridItem>
                <GridItem
                bg="white"
                //area={'main'}
                pl="4"
                pr="4"
                pt="4"
                >
                    <Image 
                    h="17rem"
                    src={img2}
                    />
                    <HStack>
                        <HStack spacing="8px" ><FontAwesomeIcon mr="4px" color="rgba(245, 100, 17, 1)" icon={faClock}  /><Text  as="p" fontStyle="normal" fontSize="sm" fontFamily="sans-serif" > June 06, 2023 </Text></HStack>
                        <HStack spacing="8px"><FontAwesomeIcon mr="4px" color="rgba(245, 100, 17, 1)" icon={faEnvelope}  /><Text  as="p" fontStyle="normal" fontSize="sm" fontFamily="sans-serif" > Category </Text></HStack>
                    </HStack>
                    <Text fontWeight="bold">African Integrated Soft Commodity Companies</Text>
                    <Text fontWeight="bold" fontSIze="0.5px">Read More ></Text>
                </GridItem>
                <GridItem
                bg="#F8F8F8"
                //area={'nav'}
                pl="4"
                pr="4"
                >
                    <HStack justify="space-between">
                        <Text fontWeight="bold">Search</Text>
                        <FontAwesomeIcon icon={faSearch}/>
                    </HStack>
                    <Box borderBottom="1px solid rgba(245, 100, 17, 1)" w="300px" mt="4" mb="4" />
                    <Text fontWeight="bold" mb="6">Categories</Text>
                    <Text >Career</Text>
                    <Text >Oil Trading</Text>
                    <Text >Soft Commodity</Text>
                    <Text >Procurement</Text>
                    <Text >Shipping</Text>
                    <Text mb="6">Bunkering</Text>
                    <Text fontWeight="bold" mb="2">Social</Text>
                    <HStack spacing="4" ml="2">
                        <FontAwesomeIcon icon={faFacebook}/>
                        <FontAwesomeIcon icon={faInstagram}/>
                        <FontAwesomeIcon icon={faTwitter}/>
                    </HStack>
                </GridItem>
                <GridItem
                bg="white"
                //area={'manna'}
                pl="4"
                pr="4"
                pt="4"
                >
                    <Image 
                    src={img3}
                    h="17rem"
                    />
                    <HStack>
                        <HStack spacing="8px" ><FontAwesomeIcon mr="4px" color="rgba(245, 100, 17, 1)" icon={faClock}  /><Text  as="p" fontStyle="normal" fontSize="sm" fontFamily="sans-serif" > June 06, 2023 </Text></HStack>
                        <HStack spacing="8px"><FontAwesomeIcon mr="4px" color="rgba(245, 100, 17, 1)" icon={faEnvelope}  /><Text  as="p" fontStyle="normal" fontSize="sm" fontFamily="sans-serif" > Category </Text></HStack>
                    </HStack>
                    <Text fontWeight="bold">African Integrated Soft Commodity Companies</Text>
                    <Text fontWeight="bold" fontSIze="0.5px">Read More ></Text>
                </GridItem>
                <GridItem 
                bg="white"
                //area={'footer'}
                pl="4"
                pr="4"
                pt="4"
                >
                    <Image 
                    src={img4}
                    h="17rem"
                    />
                    <HStack>
                        <HStack spacing="8px" ><FontAwesomeIcon mr="4px" color="rgba(245, 100, 17, 1)" icon={faClock}  /><Text  as="p" fontStyle="normal" fontSize="sm" fontFamily="sans-serif" > June 06, 2023 </Text></HStack>
                        <HStack spacing="8px"><FontAwesomeIcon mr="4px" color="rgba(245, 100, 17, 1)" icon={faEnvelope}  /><Text  as="p" fontStyle="normal" fontSize="sm" fontFamily="sans-serif" > Category </Text></HStack>
                    </HStack>
                    <Text fontWeight="bold">African Integrated Soft Commodity Companies</Text>
                    <Text fontWeight="bold" fontSIze="0.5px">Read More ></Text>
                </GridItem>
                </Grid>
                <Box
                h="15rem"
                w="100%"
                >
                    <Image 
                    zIndex="1"
                    mixBlendMode="darken"
                    bg="grey"
                    w="100%"
                    src={img5}
                    postion="relative"
                    />
                    <Box mt="-60">
                        <HStack justify="center" align="center">
                            <InputGroup size="md" w="30%" bg="white">
                            <Input />
                            <InputRightElement w="20">
                            <Button bg="rgba(245, 100, 17, 1)" color="white" fontWeight="bold">subscribe</Button>
                            </InputRightElement>
                            </InputGroup>
                        </HStack>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}