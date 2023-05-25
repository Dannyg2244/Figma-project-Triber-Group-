import { Box,
    Button,
    GridItem,
    HStack,
    Image,
    Text,
    Grid,
    Input,
    FormControl,
    Textarea,
    FormHelperText,
    InputGroup,
    InputRightElement
    } from "@chakra-ui/react"
import { faEnvelope, faPhone, faMessage } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import img1 from "./images/map.png"
import img5 from "./images/backgroundBuilding.png"
import React, { useState } from "react"
//import { Form } from "react-router-dom"
export const HomeContact = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [feedback, setFeedback] = useState("")

    const ClearForm = () => {
        return (
            setName(""),
            setEmail(""),
            setFeedback("")
        )
    }

    const isFormValid = () => {
        return (
        name &&
        email &&
        feedback
        )
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        ClearForm()
        alert("Account Submitted")
    }

    return (
        <Box
        top={0}
        left={0}
        right={0}
        as="section"
        w="100%"
        bgColor="#F8F8F8"
        >
            <Box
            h="15rem"
            pl="20"
            pr="20"
            >
                <Grid
                gridTemplateColumns="repeat(3, 1fr)"
                gap="28"
                h="10rem"
                >
                    <GridItem
                    bg="white"
                    pl="4"
                    pr="4"
                    pt="4"
                    >
                        <FontAwesomeIcon mb="10" color="rgba(245, 100, 17, 1)" size="2xl" icon={faMessage} />
                        <Text fontSize="lg" mt="10" fontWeight="bold">We’re here for you!</Text>
                        <Text fontSize="lg" fontWeight="bold">Just ask and get answers.</Text>
                    </GridItem>
                    <GridItem
                    bg="white"
                    pl="4"
                    pr="4"
                    pt="4"
                    >
                        <FontAwesomeIcon mb="10" color="rgba(245, 100, 17, 1)" size="2xl" icon={faPhone} />
                        <Text fontSize="lg" mt="10" fontWeight="bold">We’re here for you!</Text>
                        <Text fontSize="lg" fontWeight="bold">Just dial our call center.</Text>
                    </GridItem>
                    <GridItem
                    bg="white"
                    pl="4"
                    pr="4"
                    pt="4"
                    >
                        <FontAwesomeIcon mb="10" color="rgba(245, 100, 17, 1)" size="2xl" icon={faEnvelope} />
                    <Text mt="10" fontSize="lg" fontWeight="bold">We’re here for you!</Text>
                    <Text fontSize="lg" fontWeight="bold">Just ask send an email.</Text>
                    </GridItem>
                </Grid>
            </Box>
            <Box
            h="30rem"
            bgColor="white"
            pl="20"
            pr="20"
            pt="6"
            pb="6"
            >
                <Grid
                gridTemplateColumns="repeat(2, 1fr)"
                >
                    <GridItem>
                    <Image 
                    h="27rem"
                    src={img1}
                    />
                    </GridItem>
                    <GridItem pl="2" pt="2" pb="2">
                    <Text fontSize="2xl" fontWeight="bold">Get in touch</Text>
                    <Text fontWeight="bold" mb="10">Have some suggestions or just want to say hi? Contact us:</Text>
                    <form onSubmit={handleSubmit}>
                    <FormControl mb="6">
                        <Input 
                        value={name}
                        type="text"
                        placeHolder="Your name"
                        onChange={(e) => setName(e.target.value)}
                        />
                    </FormControl>
                    <FormControl mb="6">
                        <Input 
                        value={email}
                        type="email"
                        placeHolder="Your email"
                        onChange={(e) => setEmail(e.target.value)}
                        />
                        {!email ? (<FormHelperText>
                            Enter the email you'd like to receive info on
                        </FormHelperText>) :
                        (<FormHelperText>
                            Thanks for entering your email
                        </FormHelperText>)}
                    </FormControl>
                    <FormControl mb="6">
                        <Textarea
                        value={feedback}
                        type="text"
                        placeHolder="Your message"
                        onChange={(e) => setFeedback(e.target.value)}
                        />
                    </FormControl>
                    <FormControl>
                        <Button _disabled={isFormValid}  mt="4" w="100%" bgColor="rgba(245, 100, 17, 1)">
                            Submit
                        </Button>
                    </FormControl>
                    </form>
                    </GridItem>
                </Grid>
            </Box>
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
    )
}