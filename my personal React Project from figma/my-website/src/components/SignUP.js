import { Box, Button, FormControl, FormLabel, Image, Input, Text, VStack } from "@chakra-ui/react"
import img1 from "./images/logo.png"
import { Link } from "react-router-dom"
import { useState } from "react"

export const SignUp = () => {
const [firstname, setFirstname] = useState("")
const [lastname, setLastname] = useState("")
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")
const [isSubmitting, setIsSubmitting ] = useState(false)
const [isSubmitted, setIsSubmitted] = useState(false)

const isFormValid = () => {
    return (
    firstname&&
    lastname&&
    email&&
    password.length > 8
    )
}

const clearForm = () => {
    return (
        setFirstname(""),
        setLastname(""),
        setEmail(""),
        setPassword("")
    )
}

const handleSubmit = (e) =>{
    e.preventDefault()
    if (isFormValid()) {
        setIsSubmitting(true)
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
            clearForm();
        }, 5);
    }
}
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
                <form onSubmit={handleSubmit}>
                    <FormControl mb="2" >
                        <FormLabel>First name</FormLabel>
                        <Input
                        bgColor="white"
                        type="text"
                        value={firstname}
                        onChange={(e) => setFirstname(e.target.value)}
                        />
                    </FormControl>
                    <FormControl mb="2" >
                        <FormLabel>Last name</FormLabel>
                        <Input
                        type="text"
                        bgColor="white"
                        value={lastname}
                        onChange={(e) => setLastname(e.target.value)}
                        />
                    </FormControl>
                    <FormControl mb="2" >
                        <FormLabel>Email</FormLabel>
                        <Input
                        bgColor="white"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        />
                    </FormControl>
                    <FormControl mb="2" >
                        <FormLabel>Password</FormLabel>
                        <Input 
                        bgColor="white"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        />
                    </FormControl>
                    {password.length <= 8 ? <Text>pls your password must be above 8</Text> : null}
                    <Text fontWeight="bold">By clicking sign up, it means you've agree to our terms and  Customer Agreement, Privacy Policy and Cookie Policy</Text>
                    {isSubmitted ? (
                    <Text color="rgba(245, 100, 17, 1)">Form submitted successfully</Text>
                    ) : (
                     <Button
                     type="submit"
                    disable={!isFormValid() || isSubmitting}
                    isLoading={isSubmitting}
                    w="100%"
                    bgColor="rgba(245, 100, 17, 1)"
                    variant="outline"
                    _hover="black"
                     border="none"
                    >
                    sign up
                    </Button>
                    )}
                </form>
                <Text>or</Text>
                <Link rel="noFollow" to="/login"><Button w="100%" bgColor="rgba(245, 100, 17, 1)">sign In</Button></Link>
            </Box>
    </Box>
)
}