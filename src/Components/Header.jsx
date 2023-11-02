import { Image, Flex, Heading, Text, Stack } from "@chakra-ui/react";
import React from "react";
import img1 from "../assets/Group 246.svg";
import img2 from "../assets/Group 247.svg";
import img3 from "../assets/Group 248.svg";
import "@fontsource/poppins";
const Header = () => {
  return (
    <>
      <Flex
        height={{ lg: "116px", base: "318px" }}
        width="100%"
        backgroundColor="black"
        justifyContent="space-evenly"
        alignItems="center"
        // border="1px solid black"
        flexDir={{ base: "column", lg: "row" }}
      >
        <Flex
          width={{ lg: "428px", base: "300px" }}
          height="78px"
          flexShrink="0"
          // border="1px solid white"
          flexDirection="column"
          alignItems="center"
        >
          <Flex
            // border="1px solid white"
            alignItems="center"
            justifyContent="center">
            <Heading
              color="#FFF"
              textAlign="center"
              fontFamily="Segoe UI"
              fontSize={{ base: "16px", lg: "25px" }}

              fontStyle="normal"
              fontWeight="400"
              lineHeight="140%"

            >
              TURNAROUND TIME 24-48 HOURS!
            </Heading>
          </Flex>

          <Flex
            width={{ lg: "272px", base: "272px" }}
            height="36px"
            flexShrink="0"
            // border="1px solid white"
            backgroundColor="#FF7518"
            alignItems="center"
            justifyContent="center"
            borderRadius="15px"
          >
            <Text
              color="#2F2F2F"
              fontFamily="Poppins"
              fontSize={{ base: "16px", lg: "18px" }}
              fontStyle="normal"
              fontWeight="500"
              lineHeight="140%"
            >
              Affordable Estimate (30% off){" "}
            </Text>
          </Flex>
        </Flex>

        <Flex
        // border="1px solid white"

        >
          <Stack spacing={3}>
            <Flex alignItems="center">
              <Image src={img3} />
              <Text ml={2} color="white">
                +1 917 300 1079
              </Text>
            </Flex>
            <Flex alignItems="center">
              <Image src={img1} />
              <Text ml={2} color="white">
                {" "}Dave@procoreestimators.com
              </Text>
            </Flex>
          </Stack>
        </Flex>
      </Flex>
    </>
  );
};

export default Header;
