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
        caseNumber: event.target.caseNumber.value,
        coronerOrDeputy: event.target.coronerOrDeputy.value,
        dateOfCall: event.target.dateOfCall.value,
        timeOfCall: event.target.timeOfCall.value,
        personCalling: event.target.personCalling.value,
        policeAgency: event.target.policeAgency.value,
        county: event.target.county.value,
        timeOfArrival: event.target.timeOfArrival.value,
        suspectedCause: event.target.suspectedCause.value,
        firstName: event.target.firstName.value,
        lastName: event.target.lastName.value,
        maleOrFemale: event.target.city.value,
        address: event.target.address.value,
        city: event.target.city.value,
        countyOfResidence: event.target.countyOfResidence.value,
        stateOfResidence: event.target.stateOfResidence.value,
        zip: event.target.zip.value,
        ssn: event.target.ssn.value,
        age: event.target.age.value,
        survivingSpouse: event.target.survivingSpouse.value,
        dateOfBirth: event.target.dateOfBirth.value,
        mothersMaidenName: event.target.mothersMaidenName.value,
        birthPlace: event.target.birthPlace.value,
        fathersName: event.target.fathersName.value,
        height: event.target.height.value,
        weight: event.target.weight.value,
        eyes: event.target.eyes.value,
        hair: event.target.hair.value
      }

      console.log("Here is our form data: ", data) // Look for this output in the browser console to see if the data is being read properly
    }

    return (
      <Flex>
        <form onSubmit={handleSubmit}>
          <Box py={2}>
            <FormLabel htmlFor='caseNumber'>Case Number</FormLabel>
            <Input id='caseNumber' type='text'></Input>
          </Box> 
          <Box py={2}>
            <FormLabel htmlFor='coronerOrDeputy'>Coroner/Deputy</FormLabel>
            <Input id='coronerOrDeputy' type='text'></Input>
          </Box>      
          <Box py={2}>
            <FormLabel htmlFor='dateOfCall'>Date of Call</FormLabel>
            <Input id='dateOfCall' type='text'></Input>
          </Box>  
          <Box py={2}>
            <FormLabel htmlFor='timeOfCall'>Time of Call</FormLabel>
            <Input id='timeOfCall' type='text'></Input>
          </Box>  
          <Box py={2}>
            <FormLabel htmlFor='personCalling'>Person Calling</FormLabel>
            <Input id='personCalling' type='text'></Input>
          </Box>  
          <Box py={2}>
            <FormLabel htmlFor='policeAgency'>Police Agency</FormLabel>
            <Input id='policeAgency' type='text'></Input>
          </Box> 
          <Box py={2}>
            <FormLabel htmlFor='county'>County</FormLabel>
            <Input id='county' type='text'></Input>
          </Box> 
          <Box py={2}>
            <FormLabel htmlFor='timeOfArrival'>Time of Arrival</FormLabel>
            <Input id='timeOfArrival' type='text'></Input>
          </Box> 
          <Box py={2}>
            <FormLabel htmlFor='suspectedCause'>Suspected Cause</FormLabel>
            <Input id='suspectedCause' type='text'></Input>
          </Box> 
          <Box py={2}>
            <FormLabel htmlFor='coronerOrDeputy'>Coroner/Deputy</FormLabel>
            <Input id='coronerOrDeputy' type='text'></Input>
          </Box>  
          <Box py={2}>
            <FormLabel htmlFor='firstName'>First name</FormLabel>
            <Input id='firstName' type='text'></Input>
          </Box>
          <Box py={2}>
            <FormLabel htmlFor='lastName'>Last name</FormLabel>
            <Input id='lastName' type='text'></Input>
          </Box>          
          <Box py={2}>
            <FormLabel htmlFor='maleOrFemale'>Male or Female</FormLabel>
            <Input id='maleOrFemale' type='text'></Input>
          </Box> 
          <Box py={2}>
            <FormLabel htmlFor='address'>Address</FormLabel>
            <Input id='address' type='text'></Input>
          </Box>
          <Box py={2}>
            <FormLabel htmlFor='city'>City</FormLabel>
            <Input id='city' type='text'></Input>
          </Box>
          <Box py={2}>
            <FormLabel htmlFor='countyOfResidence'>County of Residence</FormLabel>
            <Input id='countyOfResidence' type='text'></Input>
          </Box> 
          <Box py={2}>
            <FormLabel htmlFor='stateOfResidence'>State of Residence</FormLabel>
            <Input id='stateOfResidence' type='text'></Input>
          </Box> 
          <Box py={2}>
            <FormLabel htmlFor='zip'>Zip</FormLabel>
            <Input id='zip' type='text'></Input>
          </Box> 
          <Box py={2}>
            <FormLabel htmlFor='ssn'>SSN#</FormLabel>
            <Input id='ssn' type='text'></Input>
          </Box> 
          <Box py={2}>
            <FormLabel htmlFor='age'>Age</FormLabel>
            <Input id='age' type='text'></Input>
          </Box> 
          <Box py={2}>
            <FormLabel htmlFor='survivingSpouse'>Surviving Spouse</FormLabel>
            <Input id='survivingSpouse' type='text'></Input>
          </Box> 
          <Box py={2}>
            <FormLabel htmlFor='dateOfBirth'>Date of Birth</FormLabel>
            <Input id='dateOfBirth' type='text'></Input>
          </Box> 
          <Box py={2}>
            <FormLabel htmlFor='mothersMaidenName'>Mother's Maiden Name</FormLabel>
            <Input id='mothersMaidenName' type='text'></Input>
          </Box> 
          <Box py={2}>
            <FormLabel htmlFor='birthPlace'>Birth Place</FormLabel>
            <Input id='birthPlace' type='text'></Input>
          </Box> 
          <Box py={2}>
            <FormLabel htmlFor='fathersName'>Father's Name</FormLabel>
            <Input id='fathersName' type='text'></Input>
          </Box> 
          <Box py={2}>
            <FormLabel htmlFor='height'>Height (Inches)</FormLabel>
            <Input id='height' type='text'></Input>
          </Box> 
          <Box py={2}>
            <FormLabel htmlFor='weight'>Weight (Pounds)</FormLabel>
            <Input id='weight' type='text'></Input>
          </Box> 
          <Box py={2}>
            <FormLabel htmlFor='eyes'>Eyes</FormLabel>
            <Input id='eyes' type='text'></Input>
          </Box> 
          <Box py={2}>
            <FormLabel htmlFor='hair'>Hair</FormLabel>
            <Input id='hair' type='text'></Input>
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
