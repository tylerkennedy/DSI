import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  Stack,
  useToast,
} from "@chakra-ui/react";
import Link from "next/link";
import Router, { useRouter } from "next/router";
import React, { useState } from "react";
import { fireAuth } from "../service/firebase.js";
import { createNewUser } from "../service/database.js";
import Nav from "../components/nav"

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();

  const router = useRouter();
  const { id } = router.query;

  const onSubmitSignup = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    fireAuth
      .createUserWithEmailAndPassword(email, password)
      .then(async (result) => {
        console.log(result);

        const uid = result.user.uid;
        const userObj = {
          user_id: uid,
          email,
          plan: null,
          app_uuids: [],
          created: new Date().getTime()
        };
        await createNewUser(uid, userObj);

        if (id) {
          Router.push("/?id=" + id);
        }
        else {
          Router.push("/");
        }
      })
      .catch((err) => {
        setIsLoading(false);
        toast({
          title: "Ohh no!",
          position: "bottom-left",
          description: err.message,
          status: "error",
          duration: 2000,
          isClosable: true,
        });
        console.log(err);
      });
  };

  return (
    <div>
      <Nav login={true}></Nav>
      <Flex w="full" h="full" minH="90vh" align="center" justify="center">
        <Box border="2px solid" w="lg" borderColor="brand.blue" rounded={12} p={8}>
          <Heading fontSize="2xl">Create an Account</Heading>
          <form onSubmit={onSubmitSignup} action="submit">
            <Stack spacing={4} mt={8}>
              <Input
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Email"
                isRequired
                type="email"
              />
              <Input
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Password"
                isRequired
                type="password"
              />
              <Button
                isLoading={isLoading}
                type="submit"
                w="full"
                variant="solid"
                color="white"
                backgroundColor="brand.blue"
              >
                Sign up
              </Button>
              <Link href="/login">
                <Button w="full" variant="link" color="brand.blue">
                  Login
                </Button>
              </Link>
            </Stack>
          </form>
        </Box>
      </Flex>
    </div>

  );
}
