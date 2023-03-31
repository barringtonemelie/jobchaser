import * as React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch, useSelector } from "react-redux"
import { setFormData } from "../store/slices/formData"
import * as yup from "yup"; 
import {
  FormControl,
  FormHelperText,
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
  const dispatch = useDispatch(); 

  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data) => {
    console.log(data);
    dispatch(setFormData(data));
    navigate("/apply-page-res");
     
  };

  const navigate = useNavigate(); 

  return (
      <Container maxW="container.xl" p={10}> 
        <form onSubmit={handleSubmit(onSubmit)}>
          <SimpleGrid columns={2} columnGap={3} rowGap={6} w="full">

            <GridItem colSpan={1}>
              <FormControl isRequired>
                <FormLabel>First name</FormLabel>
                <Input placeholder="Jane" {...register("firstName")} />
                {errors.firstName && <FormErrorMessage>{errors.firstName.message}</FormErrorMessage>}
              </FormControl>
            </GridItem>

            <GridItem colSpan={1}>
              <FormControl isRequired>
                <FormLabel>Last name</FormLabel>
                <Input placeholder="Doe" {...register("lastName")} />
                {errors.lastName && <FormErrorMessage>{errors.lastName.message}</FormErrorMessage>}
              </FormControl>
            </GridItem>

            <GridItem colSpan={1}>
              <FormControl isRequired>
                <FormLabel>Age: </FormLabel>
                <NumberInput max={130} min={15} {...register("age")}>
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
                {errors.age && <FormErrorMessage>{errors.age.message}</FormErrorMessage>}
              </FormControl>
            </GridItem>

            <GridItem colSpan={1}>
            <FormControl isRequired>
                <FormLabel>Gender</FormLabel>
                <Select {...register("gender")}>
                  <option value="female">Female</option>
                  <option value="male">Male</option>
                  <option value="other">Other</option>
                </Select>
              </FormControl>
            </GridItem>

            <GridItem colSpan={1}>
              <FormControl isRequired>
                <FormLabel>Adress</FormLabel>
                <Input placeholder="Blvd. Broken Dreams 21" {...register("address")} />
              </FormControl>
            </GridItem>

            <GridItem colSpan={1}>
              <FormControl isRequired>
                <FormLabel>City</FormLabel>
                <Input placeholder="San Francisco" {...register("city")} />
              </FormControl>
            </GridItem>

            <GridItem colSpan={1}>
              <FormControl isRequired>
                <FormLabel>Country</FormLabel>
                <Select {...register("country")}>
                  <option value="Sweden">Sweden</option>
                  <option value="USA">United States of America</option>
                  <option value="UK">The United Kingdom</option>
                </Select>
              </FormControl>
            </GridItem>

            <GridItem colSpan={2}>
              <FormControl isRequired>
                <Checkbox {...register("termsAndConditions")}>I accept the terms and conditions</Checkbox>
              </FormControl>
            </GridItem>
    
            <GridItem colSpan={2}>
              <FormControl isRequired>
                  <FormLabel>Tell us about yourself: </FormLabel>
                  <Textarea 
                  {...register("aboutYou")}
                  placeholder="I love Green Day" 
                  />
              </FormControl>
              </GridItem>
                
              <GridItem colSpan={2}>
              <FormControl isRequired>
                  <FormLabel>Email address: </FormLabel>
                  <Input 
                  {...register("email")}
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
                  <Input type='tel' placeholder='Phone number' {...register("phonenumber")}/>
              </FormControl>
              </GridItem>

              <GridItem colSpan={2}>
              <Button type="submit" size="lg" w="full" bg="#0d6efd" color="#fff" _hover={{ bgColor: "#0b5ed7", color: "#fff" }}>Next</Button>
            </GridItem>

          </SimpleGrid>
        </form>
      </Container>
  )
}
