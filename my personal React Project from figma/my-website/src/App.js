import React from "react";
import { ChakraProvider, Flex,  } from "@chakra-ui/react";
import { ThemeProvider, useUser } from "./context/ThemeContext"
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Footer } from "./components/Footer";
import { HeaderNew } from "./components/Header.New";
import { HomeNew } from "./components/HomeNew";
import { HeaderContact } from "./components/HeaderContact";
import { HomeContact } from "./components/HomeContact";
import { SignUp } from "./components/SignUP";
import { Login } from "./components/SignIn";
const Root = () => {
    const {theme} = useUser()

    return (
        <div
        style={{
            backgroundColor: theme === "light" ? "black" : "white"
        }}
        >
            <Header />
            <Home />
            <Footer />
        </div>
    )
}

const NewEvent = () => {
    return (
        <div>
        <HeaderNew />
        <HomeNew />
        <Footer />
        </div>
    )
}

const Contact = () => {
    return (
        <>
        <HeaderContact />
        <HomeContact />
        <Footer />
        </>
    )
}

function App() {
    return (
        <ChakraProvider>
            <ThemeProvider>
            <Flex direction="column" width="100%">
                <Routes>
                    <Route path="/" element={<Root />} />
                    <Route path="/new-event" element={<NewEvent />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </Flex>
            </ThemeProvider>
        </ChakraProvider>
    )
}

export default App

/*
function App() {
    return (
        <ChakraProvider>
            <Contact />
            </ChakraProvider>
    )
}

export default App

*/