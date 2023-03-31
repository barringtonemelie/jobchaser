import * as React from 'react'
import { useNavigate } from "react-router-dom"
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

    return (
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
                            Your name and adress
                            </Text>
                        </Box>
                        <Box>
                            <Heading size='xs' textTransform='uppercase'>
                            Contact information
                            </Heading>
                            <Text pt='2' fontSize='sm'>
                            Email and phone nr
                            </Text>
                        </Box>
                        <Box>
                            <Heading size='xs' textTransform='uppercase'>
                            About you: 
                            </Heading>
                            <Text pt='2' fontSize='sm'>
                            Blh blah
                            </Text>
                        </Box>
                        </Stack>
                    </CardBody>
                </Card>
                <Button onClick={() => navigate("/")}>Home</Button>
            </Flex>
        </Container>
    )
    
}
            
            