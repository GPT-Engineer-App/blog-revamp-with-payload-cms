import { Box, Text, Link } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box bg="gray.100" p={4} mt={8}>
      <Text fontSize="sm" textAlign="center">
        &copy; {new Date().getFullYear()} Vanity Fair. All rights reserved.
      </Text>
      <Text fontSize="sm" textAlign="center">
        <Link href="#">Privacy Policy</Link> | <Link href="#">Terms of Service</Link>
      </Text>
    </Box>
  );
};

export default Footer;