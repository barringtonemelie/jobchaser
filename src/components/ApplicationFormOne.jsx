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
  Textarea,
  FormHelperText
} from '@chakra-ui/react'
import { useNavigate } from "react-router-dom"; 

const schema = yup.object({
  firstName: yup.string().required("Please enter your first name."),
  lastName: yup.string().required("Please enter your last name."),
  age: yup.number().min(1).max(120).required()
}).required(); 


export default function ApplicationFormOne() {

  const { register, handleSubmit, watch, errors } = useForm({
    resolver: yupResolver(schema)
  });
  const onSubmit = (data) => {
    console.log("onSubmit ran"); 
    changePage(); 
    console.log(data)
  };
  const changePage = () => {
    navigate("/apply-page-res");
  }

  const navigate = useNavigate(); 

  return (
      <Container maxW="container.xl" p={10}> 
        <form onSubmit={onSubmit}>
          <SimpleGrid columns={2} columnGap={3} rowGap={6} w="full">

            <GridItem colSpan={1}>
              <FormControl isRequired>
                <FormLabel>First name</FormLabel>
                <Input id="firstName" placeholder="Jane" {...register("firstName")}></Input>
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
                    <FormLabel>Tell us about yourself: </FormLabel>
                    <Textarea placeholder="I love Green Day" />
                </FormControl>
                </GridItem>
                
                <GridItem colSpan={2}>
                <FormControl isRequired>
                    <FormLabel>Email address: </FormLabel>
                    <Input 
                    type='email' 
                    errorBorderColor='crimson'
                    placeholder='jane.doe@greenday.com'
                    />
                    <FormHelperText>We'll never share your email.</FormHelperText>
                </FormControl>
                </GridItem>

                <GridItem colSpan={2}>
                <FormControl isRequired>
                    <FormLabel>Phone number</FormLabel>
                    <Input type='tel' placeholder='Phone number' />
                </FormControl>
                </GridItem>

                <GridItem colSpan={2}>
                  <FormControl isRequired>
                    <Checkbox>I accept the terms and conditions</Checkbox>
                  </FormControl>
                </GridItem>

                <GridItem colSpan={2}>
                  <Button size="lg" w="full" type="submit">Apply</Button>
                </GridItem>
          </SimpleGrid>
        </form>
      </Container>
  )
}


