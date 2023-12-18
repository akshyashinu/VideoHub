import { Container, VStack,Input, Avatar,Heading,Button,Link } from '@chakra-ui/react'
import React from 'react'

const SignUp = () => {
  return (
    <Container maxW={"container.xl"} h={"100vh"} p="16" >
        <form>
            <VStack  alignItems={"stretch"} spacing={"8"} w={["full","96"]} m={"auto"} >
                <Heading>Video Hub</Heading>
                <Avatar alignSelf={"center"} boxSize={"32"} />
                <Input required type={"text"} placeholder={"Name"} focusColoredBorder="purple.500" />
                <Input required type={"email"} placeholder={"Email"} focusColoredBorder="purple.500" />
                <Input required type={"password"} placeholder={"Password"} />
                <Input required type={"password"} placeholder={"Confirm Password"} />
                <Button type={"submit"} colorScheme={"purple"}>SignUp</Button>
                <Button variant={"link"} alignSelf={"flex-end"} >
                    <Link to={"/login"}>Already have an account?</Link>
                </Button>
            </VStack>
        </form>
    </Container>
  )
}

export default SignUp