import { Container, VStack,Input ,Heading,Button,Link} from '@chakra-ui/react'
import React from 'react'

const Login = () => {
  return (
    <Container maxW={"container.xl"} h={"100vh"} p="16" >
        <form>
            <VStack  alignItems={"stretch"} spacing={"8"} w={["full","96"]} m={"auto"} my={"16"} >
                <Heading>Welcome Back</Heading>
                <Input required type={"email"} placeholder={"Email"} focusColoredBorder="purple.500" />
                <Input required type={"password"} placeholder={"Password"} />
                <Button type={"submit"} colorScheme={"purple"}>Login</Button>
                <Button variant={"link"} alignSelf={"flex-end"} >
                    <Link to={"/forgotpassword"}>Forgot Password ?</Link>
                </Button>
                <Button variant="link" alignSelf={"flex-end"} >
                    <Link alignSelf={"center"} to={"/signup"}>New User?</Link>
                </Button>
               
            </VStack>
        </form>
    </Container>
  )
}

export default Login