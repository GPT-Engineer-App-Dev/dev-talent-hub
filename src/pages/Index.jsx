import { Box, Flex, Heading, Text, Input, Button } from '@chakra-ui/react';
import { FaSearch } from 'react-icons/fa';

const Index = () => {
  return (
    <Box p={4}>
      <Flex direction="column" align="center" justify="center" p={10}>
        <Heading mb={4}>Welcome to Particles</Heading>
        <Text fontSize="lg" mb={6}>The premier marketplace for software talent specialized in web technologies.</Text>
        <Flex as="form" mb={4}>
          <Input placeholder="Search developers..." />
          <Button leftIcon={<FaSearch />} colorScheme="blue" px={4} ml={2}>Search</Button>
        </Flex>
      </Flex>
      <Box bg="gray.100" p={10}>
        <Heading size="lg" textAlign="center" mb={4}>Featured Developers</Heading>
        <Flex direction="column" gap={4}>
          <Box p={4} shadow="md" borderWidth="1px">
            <Heading size="md">John Doe</Heading>
            <Text>Location: New York, USA</Text>
            <Text>Technologies: React, Node.js</Text>
          </Box>
          <Box p={4} shadow="md" borderWidth="1px">
            <Heading size="md">Jane Smith</Heading>
            <Text>Location: London, UK</Text>
            <Text>Technologies: Angular, Python</Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Index;