import * as React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup"; 
import {
  FormControl,
  FormErrorMessage,
  Container,
  FormLabel,
  Input,
  RadioGroup,
  HStack,
  Radio,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  SimpleGrid,
  GridItem,
  Select,
  Checkbox,
  Button,
  Textarea
} from '@chakra-ui/react'
import { useNavigate } from "react-router-dom"; 

const schema = yup.object({
  firstName: yup.string().required("Please enter your first name."),
  lastName: yup.string().required("Please enter your last name."),
  age: yup.number().min(1).max(120).required()
}).required(); 


export default function ApplicationFormOne() {

  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });
  const onSubmit = (data) => {
    console.log(data)
    navigate("/jobapplicationtwo")
  };

  const navigate = useNavigate(); 

  return (
      <Container maxW="container.xl" p={10}> 
        <form>
          <SimpleGrid columns={2} columnGap={3} rowGap={6} w="full">

            <GridItem colSpan={1}>
              <FormControl isRequired>
                <FormLabel>First name</FormLabel>
                <Input placeholder="Jane"></Input>
                <FormErrorMessage></FormErrorMessage>
              </FormControl>
            </GridItem>

            <GridItem colSpan={1}>
              <FormControl isRequired>
                <FormLabel>Last name</FormLabel>
                <Input placeholder="Doe"></Input>
              </FormControl>
            </GridItem>

            <GridItem colSpan={1}>
              <FormControl isRequired>
                <FormLabel>Age: </FormLabel>
                <NumberInput max={130} min={15}>
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </FormControl>
            </GridItem>

            <GridItem colSpan={1}>
              <FormControl isRequired>
                <FormLabel>Gender</FormLabel>
                <RadioGroup defaultValue='Female'>
                  <HStack spacing='24px'>
                    <Radio value='Female'>Female</Radio>
                    <Radio value='Male'>Male</Radio>
                    <Radio value='Other'>Other</Radio>
                  </HStack>
                </RadioGroup>
              </FormControl>
            </GridItem>

            <GridItem colSpan={1}>
              <FormControl isRequired>
                <FormLabel>Adress</FormLabel>
                <Input placeholder="Blvd. Broken Dreams 21"></Input>
              </FormControl>
            </GridItem>

            <GridItem colSpan={1}>
              <FormControl isRequired>
                <FormLabel>City</FormLabel>
                <Input placeholder="San Francisco"></Input>
              </FormControl>
            </GridItem>

            <GridItem colSpan={1}>
              <FormControl isRequired>
                <FormLabel>Country</FormLabel>
                <Select>
                  <option value="usa">United States of America</option>
                  <option value="swe">Sweden</option>
                  <option value="uk">The United Kingdom</option>
                </Select>
              </FormControl>
            </GridItem>

            <GridItem colSpan={2}>
              <FormControl isRequired>
                <Checkbox>I accept the terms and conditions</Checkbox>
              </FormControl>
            </GridItem>

            

            <GridItem colSpan={2}>
              <Button type="submit" size="lg" w="full" onSubmit={handleSubmit(onSubmit)}>Next</Button>
            </GridItem>

          </SimpleGrid>
        </form>
      </Container>
  )
}


