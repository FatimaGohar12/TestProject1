import {
  Box,
  Flex,
  Heading,
  Image,
  ListItem,
  Text,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import imgbox6 from "../assets/box6pic.svg";
const Box6 = () => {
  const listItems = [
    "Getting access to the industry standards insights.",
    "Understanding the internal project cost.",
    "Getting the most reliable mechanical estimates.",
    "Increasing the probability of high profit.",
    "Boosting their win-bid ratio.",
    "Streamlining their project activities with more confidence.",
  ];
  const listItems1 = [
    "Cold Water Pipes",
    "Hot Water Pipes",
    "Vent Pipes",
    "Gas Pipes",
    "Sanitary Pipes",
    "Underground Pipes",
    "Pipe Fittings",
  ];
  const listItem3 = [
    "Pipe Concealment",
    "Insulations",
    "Valves",
    "Hangers",
    "Struts",
    "Supports",
  ];
  const listItemStyle = {
    color: "#000",
    textIndent: "both",
    textTransform: "capitalize",
    fontFamily: "Segoe UI",

    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
  };

  return (
    <>
      <Flex
        border="1px solid black"
        width="70%"
        height={{ base: "660px", lg: "400px" }}
        margin="auto"
        alignItems="center"
        flexDir={{ lg: "row", base: "column-reverse", md: "column-reverse" }}
        justifyContent="space-around"
      >
        <Flex
          width={{ lg: "55%", base: "97%" }}
          height={{ lg: "380px", base: "538px" }}
          border="1px solid black"
          alignItems="center"
          justifyContent="space-around"
          flexDir="column"
        >
          <Flex
            width="95%"
            height="200px"
            border="1px solid black"
            flexDir="column"
          >
            <Heading
              color="#FF7518"
              fontFamily="Segoe UI"
              fontSize={{ lg: "20px", base: "15px" }}
              fontStyle="normal"
              fontWeight={{ lg: "900", base: "600" }}
              lineHeight="normal"
            >
              Benefits of Mechanical Estimating
            </Heading>
            <VStack spacing={2} align="stretch">
              <UnorderedList>
                {listItems.map((item, index) => (
                  <ListItem
                    key={index}
                    style={listItemStyle}
                    fontSize={{ lg: "16px", base: "12px" }}
                  >
                    {item}
                  </ListItem>
                ))}
              </UnorderedList>
            </VStack>
          </Flex>
          <Flex
            width="95%"
            height="250px"
            border="1px solid black"
            flexDir="column"
          >
            <Flex>
              <Heading
                color="#FF7518"
                fontFamily="Segoe UI"
                fontSize={{ lg: "20px", base: "15px" }}
                fontStyle="normal"
                fontWeight={{ lg: "900", base: "600" }}
                lineHeight="normal"
              >
                Our Plumbing Estimating Services
              </Heading>
            </Flex>
            <Flex
              border="1px solid black"
              alignItems="flex-start"
              justifyContent="space-around"
            >
              <VStack spacing={2} align="stretch">
                <UnorderedList>
                  {listItems1.map((item, index) => (
                    <ListItem
                      key={index}
                      style={listItemStyle}
                      fontSize={{ lg: "16px", base: "12px" }}
                    >
                      {item}
                    </ListItem>
                  ))}
                </UnorderedList>
              </VStack>
              <VStack spacing={2} align="stretch">
                <UnorderedList>
                  {listItem3.map((item, index) => (
                    <ListItem
                      key={index}
                      style={listItemStyle}
                      fontSize={{ lg: "16px", base: "12px" }}
                    >
                      {item}
                    </ListItem>
                  ))}
                </UnorderedList>
              </VStack>
            </Flex>
          </Flex>
        </Flex>
        <Flex
          width={{ lg: "30%", base: "76%" }}
          height={{ lg: "380px", base: "180px" }}
          border="1px solid black"
          alignItems="normal"
          justifyContent="space-around"
        >
          <Image src={imgbox6} />
        </Flex>
      </Flex>
    </>
  );
};

export default Box6;
