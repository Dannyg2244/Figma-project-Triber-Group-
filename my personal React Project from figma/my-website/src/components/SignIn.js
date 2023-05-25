import { Box, Button, FormControl, FormLabel, Image, Input, Text, VStack } from "@chakra-ui/react"
import img1 from "./images/logo.png"

export const Login = () => {
    return (
        <Box
        top={0}
        left={0}
        right={0}
        w="100%"
        h="100vh"
        background="gray.600"
        >
            <VStack spacing="-4" mb="6">
                <Image 
                src={img1}
                />
                <Text fontWeight="bold" color="white">Login</Text>
            </VStack>
            <Box
            h="15rem"
            w="23rem"
            bgColor="grey"
            m="auto"
            pl="2"
            pr="2"
            >
                <form>
                    <FormControl mb="2" >
                    <FormLabel>email</FormLabel>
                    <Input 
                        bgColor="white"
                        type="email"
                    />
                    </FormControl>
                    <FormControl mb="6" >
                        <FormLabel>Password (6 or more character)</FormLabel>
                        <Input 
                        bgColor="white"
                        type="password"
                        />
                    </FormControl>
                    <Button w="100%" bgColor="rgba(245, 100, 17, 1)">Login</Button>
                </form>
            </Box>
        </Box>
    )
}