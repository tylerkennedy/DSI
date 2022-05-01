import { Component } from 'react';
import {
  Box,
  Button,
  Flex,
  Heading,
  Text,
  Link,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
} from "@chakra-ui/react";

import { AddIcon, StarIcon } from '@chakra-ui/icons'

const styles = {
  width: 550
};

// // import needed tools for connecting to the database
// import { getDatabase, ref, set } from "firebase/database";

// // given from firebase doc's
// firebase.initializeApp(config); //Initialize your firebase here passing your firebase account config object


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
      // const newPostRef = postsRef.push();
      // newPostRef.set(prep);

      event.target.reset();
      alert("Form uploaded!")
    }

    return (
      <Flex flexDir={'column'}>
        <Heading as={'h2'} pb={4}>Upload a Death Scene Investigation</Heading>
        <form onSubmit={handleSubmit} style={styles}>
          {/* // Start Boxes of Information
          // Basic Info Section */}
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
          {/* // Possibly change to checkbox format */}
          <Box py={2}>
            <FormLabel htmlFor='suspectedCause'>Suspected Cause</FormLabel>
            <Input id='suspectedCause' type='text'></Input>
          </Box>


          <br></br>
          <br></br>
          <h2><strong>DECEDENT INFORMATION</strong></h2>
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
          {/* // Still required: checkbox status sections (marital status, education, race, ethnicity, employment, veteran or pregnant).
          Temporarily a fill-in box.
          */}
         <Box py={2}>
            <FormLabel htmlFor='maritalStatus'>Marital Status</FormLabel>
            <Input id='maritalStatus' type='text'></Input>
          </Box>
          <Box py={2}>
            <FormLabel htmlFor='race'>Race</FormLabel>
            <Input id='race' type='text'></Input>
          </Box>
          <Box py={2}>
            <FormLabel htmlFor='ethnicity'>Ethnicity</FormLabel>
            <Input id='ethnicity' type='text'></Input>
          </Box>    


          <br></br>
          <br></br>
          {/* Next of Kin section*/}
          <h2><strong>NEXT OF KIN</strong></h2>
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


          <br></br>
          <br></br>
          <h2><strong>INCIDENT INFORMATION</strong></h2>
          <Box py={2}>
            <FormLabel htmlFor='Death Date'>Death Date</FormLabel>
            <Input id='deathDate' type='text'></Input>
          </Box> 
          <Box py={2}>
            <FormLabel htmlFor='injuryDate'>Injury Date</FormLabel>
            <Input id='injuryDate' type='text'></Input>
          </Box>
          <Box py={2}>
            <FormLabel htmlFor='Death Time'>Death Time</FormLabel>
            <Input id='deathTime' type='text'></Input>
          </Box>
          <Box py={2}>
            <FormLabel htmlFor='Injury Time'>Injury Time</FormLabel>
            <Input id='injuryTime' type='text'></Input>
          </Box>
          <Box py={2}>
            <FormLabel htmlFor='placeofDeath'>Place of Death</FormLabel>
            <Input id='placeofDeath' type='text'></Input>
          </Box>
          <Box py={2}>
            <FormLabel htmlFor='placeofInjury'>Place of Injury</FormLabel>
            <Input id='placeofInjury' type='text'></Input>
          </Box>

          {/* Needed: Last Seen Alive, Death Discovered section.*/}

          <Box py={2}>
            <FormLabel htmlFor='foundDeadBy'>Found Dead By</FormLabel>
            <Input id='foundDeadBy' type='text'></Input>
          </Box>
          <Box py={2}>
            <FormLabel htmlFor='addressFDB'>Address</FormLabel>
            <Input id='addressFDB' type='text'></Input>
          </Box>
          <Box py={2}>
            <FormLabel htmlFor='lastSeenAliveBy'>Last Seen Alive By</FormLabel>
            <Input id='lastSeenAliveBy' type='text'></Input>
          </Box>
          <Box py={2}>
            <FormLabel htmlFor='addressLSAB'>Address</FormLabel>
            <Input id='addressLSAB' type='text'></Input>
          </Box> 
          <Box py={2}>
            <FormLabel htmlFor='witness'>Witness to Injury, Illness, or Death</FormLabel>
            <Input id='witness' type='text'></Input>
          </Box>
          <Box py={2}>
            <FormLabel htmlFor='weather'>Weather</FormLabel>
            <Input id='weather' type='text'></Input>
          </Box>
          <Box py={2}>
            <FormLabel htmlFor='activity'>Activity</FormLabel>
            <Input id='activity' type='text'></Input>
          </Box>
          <Box py={2}>
            <FormLabel htmlFor='positionOB'>Position of Body</FormLabel>
            <Input id='positionOB' type='text'></Input>
          </Box>
          <Box py={2}>
            <FormLabel htmlFor='livor'>Livor</FormLabel>
            <Input id='livor' type='text'></Input>
          </Box>
          <Box py={2}>
            <FormLabel htmlFor='rigor'>Rigor</FormLabel>
            <Input id='rigor' type='text'></Input>
          </Box>

          {/*Still needed: Investigation, Case History, Narrative/Comments, Pills on Scene sections. */}

          <Button mt={4} type="submit">
            Submit
          </Button>

          



        </form>
      </Flex >
    );
  }
}

// STILL NEED TO BE ADDED.... ability or upload pictures or recordings. Potentially add checklists.

// @ts-ignore
export default (Form);