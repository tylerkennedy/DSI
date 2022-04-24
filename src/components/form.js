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

// import needed tools for connecting to the database
import { getDatabase, ref, set } from "firebase/database";

// given from firebase doc's
//firebase.initializeApp(config); //Initialize your firebase here passing your firebase account config object
   

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
        hair: event.target.hair.value,
        maritalStatus: event.target.maritalStatus.value,
        notifiedBy: event.target.notifiedBy.value,
        dateNotified: event.target.dateNotified.value,
        timeNotified: event.target.timeNotified.value,
        nameKin: event.target.nameKin.value,
        addressKin: event.target.addressKin.value,
        phoneNumberKin: event.target.phoneNumberKin.value,
        relationshipKin: event.target.relationshipKin.value,
        cityKin: event.target.cityKin.value,
        stateKin: event.target.stateKin.value,
        zipKin: event.target.zipKin.value
      }

      console.log("Here is our form data: ", data) // Look for this output in the browser console to see if the data is being read properly

      // append form to data
      data.append("form1", form1.name, form1.filename);

      // do conversion for sending
      var prep = JSON.stringify(data);
      //^ also makes sure no disallowed values are in place
      
      // the docs define this as best practices to push with unique key each time
      const newPostRef = postsRef.push();
      newPostRef.set(prep);
      
    }

    return (
      <Flex justify="space-between">
        <form onSubmit={handleSubmit}>
          <Heading fontSize="2xl">Victim Information</Heading>
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
          <Heading fontSize="2xl">Decedent Information</Heading>
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
          <Box py={2}>
            <FormLabel htmlFor='maritalStatus'>Marital Status: Single, Married, Divorced </FormLabel>
            <Input id='maritalStatus' type='text'></Input>
          </Box> 
          <Heading fontSize="2xl">Next of Kin Information</Heading>
          <Box py={2}>
            <FormLabel htmlFor='notifiedBy'>Notified By</FormLabel>
            <Input id='notifiedBy' type='text'></Input>
          </Box> 
          <Box py={2}>
            <FormLabel htmlFor='dateNotified'>Date Notified</FormLabel>
            <Input id='dateNotified' type='text'></Input>
          </Box> 
          <Box py={2}>
            <FormLabel htmlFor='timeNotified'>Time Notified</FormLabel>
            <Input id='timeNotified' type='text'></Input>
          </Box> 
          <Box py={2}>
            <FormLabel htmlFor='nameKin'>Name</FormLabel>
            <Input id='nameKin' type='text'></Input>
          </Box> 
          <Box py={2}>
            <FormLabel htmlFor='addressKin'>Address</FormLabel>
            <Input id='addressKin' type='text'></Input>
          </Box> 
          <Box py={2}>
            <FormLabel htmlFor='phoneNumberKin'>Phone Number</FormLabel>
            <Input id='phoneNumberKin' type='text'></Input>
          </Box> 
          <Box py={2}>
            <FormLabel htmlFor='relationshipKin'>Relationship</FormLabel>
            <Input id='relationshipKin' type='text'></Input>
          </Box> 
          <Box py={2}>
            <FormLabel htmlFor='cityKin'>City</FormLabel>
            <Input id='cityKin' type='text'></Input>
          </Box> 
          <Box py={2}>
            <FormLabel htmlFor='stateKin'>State</FormLabel>
            <Input id='stateKin' type='text'></Input>
          </Box> 
          <Box py={2}>
            <FormLabel htmlFor='zipKin'>Zip</FormLabel>
            <Input id='zipKin' type='text'></Input>
          </Box> 
          <Heading fontSize="2xl">File Uploads</Heading>
          <form action="" method="post" enctype="multipart/form-data" name="form1" id="form1">
          <label>Upload File <input type="file" name="file[]" multiple /></label>
          data.append("form1", form1.name, form1.name);
          </form>
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
