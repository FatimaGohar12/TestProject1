import { Flex, Heading, Text } from "@chakra-ui/react";
import "@fontsource/inter";
import React from "react";

const Box5 = () => {
  const headStyle = {
    color: "#000",
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "150%", // 42px
  };

  const paraStyle = {
    color: "#000",
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "150%", // 39px
  };

  return (
    <>
      <Flex
        // border="1px solid black"
        width="80%"
        height= "400px" 
        margin="auto"
        flexDir="column"
      >
        <Flex
          // border="1px solid black"
          width="100%"
          height="50px"
          alignItems={{ base: "center", lg: "self-end" }}
        >
          <Heading
            color="#FF7518"
            fontStyle="normal"
            fontSize={{ base: "18px", lg: "30px" }}
            fontFamily="Segoe UI"
            fontWeight="700"
            lineHeight="150%"
          >
            Are You Ready To Get Started With Us!
          </Heading>
        </Flex>
        <Flex
          // border="1px solid black"
          height="121px"
          width="97%"
          flexDir="column"
        >
          <Heading {...headStyle} fontSize={{ base: "17px", lg: "22px" }}>
            1- Upload you Plans
          </Heading>
          <Text {...paraStyle} fontSize={{ base: "12px", lg: "20px" }}>
            to upload your plans. we accept PDF format and your plans can be Bid
            set, Schematic, Design Development, Construction document, or
            conceptual drawings.
          </Text>
        </Flex>
        <Flex
          // border="1px solid black"
          height="121px"
          width="97%"
          flexDir="column"
        >
          <Heading {...headStyle} fontSize={{ base: "17px", lg: "22px" }}>
            2- Get a Quote
          </Heading>
          <Text {...paraStyle} fontSize={{ base: "12px", lg: "20px" }}>
            Quotes will be based on invoice, delivery date, and turnaround time.
          </Text>
        </Flex>
        <Flex
          // border="1px solid black"
          height="121px"
          width="97%"
          flexDir="column"
        >
          <Heading {...headStyle} fontSize={{ base: "17px", lg: "22px" }}>
            3- Receive Estimate
          </Heading>
          <Text {...paraStyle} fontSize={{ base: "12px", lg: "20px" }}>
            Estimates will be delivered to you in EXCEL sheets comprising all
            the material and labor pricing with cut reports either in
            MasterFormat or your customized format.
          </Text>
        </Flex>
      </Flex>
    </>
  );
};

export default Box5;
