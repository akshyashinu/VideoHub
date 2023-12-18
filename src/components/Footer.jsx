import {
  Box,
  Button,
  HStack,
  Heading,
  Stack,
  VStack,
  Input,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineSend } from 'react-icons/ai';
const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} minH={'40'} p="16" color={'white'}>
      <Stack direction={['column', 'row']} textAlign="center">
        <VStack alignItems="stretch" w="full" px="4">
          <Heading size={'md'} textTransform={'uppercase'}>
            Subscribe to Our news letter
          </Heading>
          <HStack borderBottom={'2px solid white'} py={'2px'}>
            <Input
              placeholder="Enter Your Email..."
              border={'none'}
              borderRadius={'none'}
              outline={'none'}
              focusBorderColor="none"
            />
            <Button
              p={'0'}
              color={'purple'}
              variant={'ghost'}
              borderRadius={'0 20px 20px 0'}
            >
              <AiOutlineSend size={'20'} />
            </Button>
          </HStack>
        </VStack>

        <VStack
          borderLeft={['none', '1px solid white']}
          borderRight={['none', '1px solid white']}
          w="full"
        >
          <Heading textAlign={'center'} textTransform={'uppercase'}>
            VIDEO HUB
          </Heading>
          <Text>All Rights Reserved</Text>
        </VStack>

        <VStack w="full">
          <Heading size={'md'} textTransform={'uppercase'}>
            Social Media
          </Heading>
          <Button variant={'link'} color={'purple'}>
            <Link to="google.com">Youtube</Link>
          </Button>
          <Button variant={'link'} color={'purple'}>
            <Link to="google.com">Instagram</Link>
          </Button>
          <Button variant={'link'} color={'purple'}>
            <Link to="google.com">Github</Link>
          </Button>
          <Button variant={'link'} color={'purple'}>
            <Link to="google.com">LinkedIn</Link>
          </Button>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
