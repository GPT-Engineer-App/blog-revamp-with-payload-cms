import { Box, Flex, Heading, Input, IconButton } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <Box bg="white" boxShadow="sm" p={4}>
      <Flex justify="space-between" align="center">
        <Heading size="lg">Vanity Fair</Heading>
        <Flex align="center">
          <Input placeholder="Search" size="sm" />
          <IconButton aria-label="Search" icon={<FaSearch />} size="sm" ml={2} />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;