import React from "react";
import { Box, Image, Heading, Text, HStack, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Card = ({ project }) => {
  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image src={project.image} alt={project.title} />

      <Box p="6">
        <Box d="flex" alignItems="baseline">
          <Heading
            size="md"
            fontWeight="semibold"
            lineHeight="tight"
            isTruncated
          >
            {project.title}
          </Heading>
        </Box>
        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          {project.subtitle}
        </Box>

        <Text mt="2">{project.description}</Text>

        <HStack mt="2" spacing="2" align="center">
          <FontAwesomeIcon icon={faArrowRight} size="1x" />
          <Text fontSize="sm">View Project</Text>
        </HStack>
      </Box>
    </Box>
  );
};

export default Card;
