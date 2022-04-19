import { Component } from 'react';
import {
  Box,
  Button,
  Flex,
  Heading,
  Link,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
} from "@chakra-ui/react";

import { AddIcon, StarIcon } from '@chakra-ui/icons'

const styles = {

};

import { getDatabase, ref, set } from "firebase/database";

firebase.initializeApp(config); //Initialize your firebase here passing your firebase account config object
   

class Form extends Component {

  render() {

    const handleSubmit = async (event) => {
      // Stop the form from submitting and refreshing the page.
      event.preventDefault()

      // Get data from the form.
      // Create a property for each form field
      const data = {
        firstName: event.target.firstName.value,
        lastName: event.target.lastName.value,
      }

      console.log("Here is our form data: ", data) // Look for this output in the browser console to see if the data is being read properly
      
      // do conversion for sending
      var prep = JSON.stringify(data);
      //^ also makes sure no disallowed values are in place
      
      // the docs define this as best practices to push with unique key each time
      const newPostRef = postsRef.push();
      newPostRef.set(prep);
      
    }

    return (
      <Flex>
        <form onSubmit={handleSubmit}>
          <Box py={2}>
            <FormLabel htmlFor='firstName'>First name</FormLabel>
            <Input id='firstName' type='text'></Input>
          </Box>
          <Box py={2}>
            <FormLabel htmlFor='lastName'>Last name</FormLabel>
            <Input id='lastName' type='text'></Input>
          </Box>
          <Button mt={4} type="submit">
            Submit
          </Button>
        </form>
      </Flex>
    );
  }
}

// @ts-ignore
export default (Form);
