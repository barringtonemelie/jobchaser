import * as React from 'react'
import {
  FormControl,
  Container,
  FormLabel,
  Input,
  FormHelperText,
  SimpleGrid,
  GridItem,
  Button,
  Textarea
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
            
export default function ApplicationFormTwo() {
    const navigate = useNavigate(); 
    return (
        <Container maxW="container.xl" p={10}>
            <SimpleGrid columns={2} columnGap={3} rowGap={6} w="full">
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
                <Button size="lg" w="full" onClick={() => navigate("/apply-page-res")}>Apply</Button>
                </GridItem>
            </SimpleGrid>
        </Container>
    )
}