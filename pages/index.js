import { Container, Text, VStack } from "@chakra-ui/react";
import Layout from "../components/Layout";

const Home = () => {
  return (
    <Layout>
      <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <VStack spacing={4}>
          <Text fontSize="2xl">Your Blank Canvas</Text>
          <Text>Chat with the agent to start making edits.</Text>
        </VStack>
      </Container>
    </Layout>
  );
};

export default Home;