import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import bg from "./assets/mgbg.svg"; // Ensure the path to your image is correct

const MecBg = () => {
  return (
    <>
      <Flex
        // border="1px solid black"
        height="200px"
        width="100%"
        backgroundImage={`url(${bg})`}
        backgroundSize="cover"
        backgroundPosition="center"
      >
        <Box margin="57px 32px">
          <Heading
            color="#FFF"
            textAlign="center"
            fontFamily="Segoe UI"
            fontSize={{ lg: "40px", base: "20px", md: "25px" }}
            fontStyle="normal"
            fontWeight="900"
            lineHeight="normal"
          >
            Mechanical/Plumbing
          </Heading>
        </Box>
      </Flex>
     
    </>
  );
};

export default MecBg;
