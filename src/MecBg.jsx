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
      <Flex
        width={{lg:"70%",base:"100%"}}
        height={{ base: "500px", lg: "224px" }}
        border="1px solid black"
        margin="auto"
        alignItems="flex-end"
      >
        <Text
          color="#000"
          fontFamily="Segoe UI"
          fontSize={{ base: "18px", lg: "20px" }}
          fontStyle="normal"
          fontWeight="400"
          lineHeight="normal"
          textAlign="justify"
        >
          At{" "}
          <span style={{ color: "#FF7518", fontWeight: "700" }}>
            Procore Estimators
          </span>
          ,our area of expertise lies in delivering precise and dependable
          mechanical and plumbing estimates. Our seasoned team of estimators
          grasps the complexities of mechanical and plumbing systems, offering
          all-encompassing and thorough estimates for your projects. Catering to
          both residential and commercial constructions, we factor in equipment,
          materials, labor, and project-specific requirements.Our unwavering
          commitment to providing vital information enables our clients to make
          well-informed decisions to ensure the success of their projects. Our
          mechanical and plumbing estimates form the bedrock of a triumphant
          construction project.
        </Text>
      </Flex>
    </>
  );
};

export default MecBg;
