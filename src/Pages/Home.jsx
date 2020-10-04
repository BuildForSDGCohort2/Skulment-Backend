import React from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Text,
  useDisclosure,
} from "@chakra-ui/core";
import logo from "../assets/images/logo-complete.png";
import { useAuth0 } from "@auth0/auth0-react";
import GenericModal from "../Components/GenericModal";

const Home = () => {
  const { loginWithRedirect } = useAuth0();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box>
      <Box style={{ height: "100vh" }} background={`url(landing-image.png)`}>
        <Flex m="auto" p="3rem" w="90%" align="center" justify="space-between">
          <img src={logo} alt="logo" />
          <Flex>
            <Button mr={2} onClick={onOpen}>
              How to use?
            </Button>
          </Flex>
        </Flex>

        <Flex
          m="auto"
          h="70%"
          direction="column"
          justify="center"
          align="center"
        >
          <Heading color="white" textAlign="center">
            Demo school management system with
          </Heading>
          <Heading color="white" textAlign="center">
            FaunaDB awesomeness
          </Heading>
          <Button
            my="2rem"
            variantColor="orange.800"
            bg="brand.orange.800"
            w="100px"
            onClick={loginWithRedirect}
          >
            Sign in
          </Button>
        </Flex>
      </Box>

      <GenericModal isOpen={isOpen} onClose={onClose} title="How to use">
        <Text>
          Authenticate with any of the following details
        </Text>
        <Box my={2}>
          <Text><b>Student</b></Text>
          <Text>Email: student1@skulment.edu</Text>
          <Text>Password: Test1234</Text>
        </Box>
        <Box my={2}>
          <Text><b>Teacher</b></Text>
          <Text>Email: teacher1@skulment.edu</Text>
          <Text>Password: Test1234</Text>
        </Box>
        <Box my={2}>
          <Text><b>Manager</b></Text>
          <Text>Email: manager1@skulment.edu</Text>
          <Text>Password: Test1234</Text>
        </Box>
      </GenericModal>
    </Box>
  );
};

export default Home;
