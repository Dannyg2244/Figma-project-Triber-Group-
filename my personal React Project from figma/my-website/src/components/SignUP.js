import { Box, Button, FormControl, FormLabel, Image, Input, Text, VStack } from "@chakra-ui/react"
import img1 from "./images/logo.png"
import { Link } from "react-router-dom"

export const SignUp = () => {
    return (

        <Box
        top={0}
        left={0}
        right={0}
        //as="section"
        w="100%"
        h="110vh"
        background="gray.600"
        >
            <VStack spacing="-4" mb="2" >
            <Image
            src={img1}
            />
            <Text fontWeight="bold" color="white">Make the most use of our website by imputing your details below to sign up</Text>
            </VStack>
            <Box
            h="33rem"
            w="23rem"
            bgColor="grey"
            m="auto"
            pl="2"
            pr="2"
            >
                <form>
                    <FormControl mb="2" >
                        <FormLabel>First name</FormLabel>
                        <Input 
                        bgColor="white"
                        type="text"
                        />
                    </FormControl>
                    <FormControl mb="2" >
                        <FormLabel>Last name</FormLabel>
                        <Input 
                        type="text"
                        bgColor="white"
                        />
                    </FormControl>
                    <FormControl mb="2" >
                        <FormLabel>Email</FormLabel>
                        <Input 
                        bgColor="white"
                        type="email"
                        />
                    </FormControl>
                    <FormControl mb="2" >
                        <FormLabel>Password (6 or more character)</FormLabel>
                        <Input 
                        bgColor="white"
                        type="password"
                        />
                    </FormControl>
                    <Text fontWeight="bold">By clicking sign up, it means you've agree to our terms and  Customer Agreement, Privacy Policy and Cookie Policy</Text>
                    <Button w="100%" bgColor="rgba(245, 100, 17, 1)">sign up</Button>
                </form>
                <Text>or</Text>
                <Link rel="noFollow" to="/login"><Button w="100%" bgColor="rgba(245, 100, 17, 1)">sign In</Button></Link>
            </Box>
    </Box>
)
}