import React from "react";
import { Box, Heading, VStack, Image, Text } from "@chakra-ui/react";

const greeting = "Hello, I’m John Doe";
const bio1 = "I’m a Full-stack Developer";
const bio2 =
  "Specializing in efficient React apps and seamless user experiences.";

const LandingSection = () => {
  return (
    <VStack
      id="landing-section"
      justify="center"
      align="center"
      spacing={10}
      height="100vh"
    >
      <Image
        borderRadius="full"
        boxSize="150px"
        src="https://i.pravatar.cc/150?img=7"
        alt="avatar"
      />
      <VStack spacing={3}>
        <Heading size="xl">{greeting}</Heading>
        <Text fontSize="2xl">{bio1}</Text>
        <Text fontSize="2xl">{bio2}</Text>
      </VStack>
    </VStack>
  );
};

export default LandingSection;
