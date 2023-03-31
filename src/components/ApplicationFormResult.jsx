import * as React from 'react'
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { toast } from 'react-toastify';
import {
  Heading,
  Container,
  Flex,
  Card,
  Stack,
  CardHeader,
  CardBody,
  Text,
  Box,
  StackDivider,
  Button
} from '@chakra-ui/react';
            
export default function ApplicationFormResult() {
    const navigate = useNavigate();
    const formResult = useSelector((state) => state.formData.value);
    const appliedJob = useSelector((state) => state.appliedJob.value)
    console.log(appliedJob.employer.name, appliedJob.headline, " this is the applied job");
    console.log(formResult, " this the form data");
    console.log(formResult.gender);
    let todaysDate = new Date();

    return (
        <>
        {
                toast.success(appliedJob.headline + " - " + appliedJob.employer.name + ", Applied! \n" + todaysDate.toUTCString() , {
                    position: "top-center",
                    theme: "colored",
                    })
            }
        <Container maxW="container.xl" p={0}>
            <Flex align="center" direction="column" w="full">
                <Heading p={10}>Thank you for your application!</Heading>
                <Card w="80%">
                    <CardHeader>
                        <Heading size='md'>Your application: </Heading>
                    </CardHeader>

                    <CardBody>
                        <Stack divider={<StackDivider />} spacing='4'>
                        <Box>
                            <Heading size='xs' textTransform='uppercase'>
                            Personal information: 
                            </Heading>
                            <Text pt='2' fontSize='sm'>
                            Name: {formResult.firstName} {formResult.lastName}
                            <br/>
                            Adress: {formResult.address} {formResult.city} {formResult.country}
                            <br/>
                            Age and gender: {formResult.age}, {formResult.gender}
                            </Text>
                        </Box>
                        <Box>
                            <Heading size='xs' textTransform='uppercase'>
                            Contact information
                            </Heading>
                            <Text pt='2' fontSize='sm'>
                            Email: {formResult.email}, <br /> Phone: {formResult.phonenumber} 
                            </Text>
                        </Box>
                        <Box>
                            <Heading size='xs' textTransform='uppercase'>
                            About you:
                            </Heading>
                            <Text pt='2' fontSize='sm'>
                            {formResult.aboutYou}
                            </Text>
                        </Box>
                        </Stack>
                    </CardBody>
                </Card>
                <Button className="mt-3 mb-3" bg="#0d6efd" color="#fff" _hover={{ bgColor: "#0b5ed7", color: "#fff" }} onClick={() => navigate("/")}>Home</Button>
            </Flex>
        </Container>
        </>
    )
    
}
            
            