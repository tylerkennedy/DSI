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



class Form extends Component {

  render() {

    const handleSubmit = async (event) => {
      // Stop the form from submitting and refreshing the page.
      event.preventDefault()

      // Get data from the form.
      // Create a property for each form field
      const data = {
        coronerOrDeputy: event.target.coronerOrDeputy.value,
        county: event.target.county.value,
        firstName: event.target.firstName.value,
        lastName: event.target.lastName.value,
        address: event.target.address.value,
        city: event.target.city.value
      }

      console.log("Here is our form data: ", data) // Look for this output in the browser console to see if the data is being read properly
    }

    return (
      <Flex>
        <form onSubmit={handleSubmit}>
          <Box py={2}>
            <FormLabel htmlFor='coronerOrDeputy'>First name</FormLabel>
            <Input id='coronerOrDeputy' type='text'></Input>
          </Box>      
          <Box py={2}>
          <Box py={2}>
            <FormLabel htmlFor='county'>First name</FormLabel>
            <Input id='county' type='text'></Input>
          </Box>
            <FormLabel htmlFor='firstName'>First name</FormLabel>
            <Input id='firstName' type='text'></Input>
          </Box>
          <Box py={2}>
            <FormLabel htmlFor='lastName'>Last name</FormLabel>
            <Input id='lastName' type='text'></Input>
          </Box>
          <Box py={2}>
            <FormLabel htmlFor='address'>First name</FormLabel>
            <Input id='address' type='text'></Input>
          </Box>
          <Box py={2}>
            <FormLabel htmlFor='city'>First name</FormLabel>
            <Input id='city' type='text'></Input>
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
