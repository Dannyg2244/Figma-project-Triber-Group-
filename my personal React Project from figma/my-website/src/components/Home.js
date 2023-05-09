import { Box, HStack, Image, Text, VStack } from "@chakra-ui/react"
import img2 from "./images/chart.png"
import img3 from "./images/Diversity.png"


export const Home = () => {

    return (
        <Box
        top={0}
        left={0}
        right={0}
        as="section"
        w="100%"
        background="gray.100"
        >
            <HStack
            justify="center"
            align="center"
            >
            <Box
            position="absolute"
            as="section"
            w="85%"
            h="22rem"
            background="white"
            mt="36"
            zIndex="1"
            borderRadius="50"
            boxShadow="37px 47px  88px rgba(181, 178, 178, 0.35)"
            top="48"
            >
                <VStack textAlign="center" ml="56" mr="56">
                <Text mt="10" as="h1" fontSize="2xl" fontFamily="sans-serif"color="rgba(245, 100, 17, 1)">WHO WE ARE</Text>
                <Box borderBottom="2px solid rgba(245, 100, 17, 1)" w="40px" mt="6" mb="18" />
                <Text as="h1" fontSize="4xl" pt="4">Triber is a diversified energy commodity company</Text>
                <Text as="p" fontSize="large" pt="4">The corporate origin has it roots dating back two decades with a founding vision that has remained sustained with convictions and relentless pursuit of excellence in service delivery.</Text>
                </VStack>
            </Box>
            </HStack>

                <Box
                h="30rem"
                w="100%"
                mt="60"
                position="relative"
                background="white"
                pr="8"
                //pl="8"
                >
                    <HStack
                    justify="space-between"
                    align="center"
                    >
                        <Box >
                        <Box
                        //w="45%"
                        pl="20"
                        //top="96"
                        //pr="20"
                        bgColor="white"
                        //position="relative"
                        //mt="10"
                        >
                            <Image
                            position="absolute"
                            //mt="20"
                            w="23rem"
                            h="23rem"
                            zIndex="0"
                            top="16"
                            //left="0"
                            src={img2}
                            />
                        </Box>
                        <Box
                        position="absolute"
                        //mt="44"
                        right="24"
                        //top="96"
                        p="10"
                        mt="20"
                        bgColor="white"
                        zIndex="1"
                        w="58%"
                        >
                            <VStack
                            top="28"
                            >
                            <Text as="h1" color="#F56411" fontStyle="normal" fontWeight="700" fontSize="30px">WHAT WE DO</Text>
                            <Text fontStyle="normal" fontWeight="400" fontSize="33px" lineHeight="127.9%" color="#252525">Our business activities involves delivery of Trade and logistics solutions across supply chain in the energy, soft commodities, rail and power markets.</Text>
                            <Text as="p" pt="4" fontWeight="400" color="#252525" fontStyle="normal" lineHeight="151.5%">We source, transport and store by combining hard assets, expertise and financial resources in an efficient manner to delivering high performance and value centred services for our clients.</Text>
                            </VStack>
                        </Box>
                        </Box>
                    </HStack>

                </Box>
                <Box
                h="25rem"
                w="100%"
                mt="8"
                background="#F8F8F8"
                //position="relative"
                pr="20"
                pl="20"
                >
                    <HStack
                    justify="space-between"
                    align="center"
                    //flex="1"
                    mt="16"
                    >
                        <Box
                        w="40rem"
                        >
                            <VStack>
                                <Text as="h1" color="#F56411" fontStyle="normal" fontWeight="700" fontSize="30px">How We Do It</Text>
                                <Text  fontStyle="normal" fontWeight="400" fontSize="33px" lineHeight="127.9%" color="#252525">Our people underpin our strength and reside at the very height of our success, reflecting our commitment to diversity and work culture that leads us to find ways to make a difference.</Text>
                            </VStack>
                        </Box>
                        <Box
                        >
                        <Image
                        h="18rem"
                        w="40rem"
                        mt="12"

                        src={img3}
                        />
                        </Box>
                    </HStack>

                </Box>
        </Box>
    )
}