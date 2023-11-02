// MedData.jsx

import React from "react";
import { Flex, Heading, Card, Image, Text } from "@chakra-ui/react";

const MedData = ({ heading, data }) => {
  const cardStyle = {
    width: "230px",
    height: "292px",
    borderRadius: "15px",
    justifyContent: "space-between",
    background: "#2F2F2F",
  };

  const textStyle = {
    marginTop: "31px",
    color: "#FFF",
    textAlign: "center",
    fontFamily: "Segoe UI",
    fontSize: "18px",
    fontStyle: "normal",
    lineHeight: "normal",
    textTransform: "capitalize",
  };

  return (
    <Flex
      // border="1px solid black"
      width={{ base: "100%", lg: "80%" }}
      height={{ base: "1000px", lg: "400px", md: "303px" }}
      margin="auto"
      alignItems={{ base: "center", lg: "self-end" }}
      flexDir="column"
    >
      <Flex
        // border="1px solid black"
        width="100%"
        height="100px"
        alignItems={{ base: "center", lg: "self-end" }}
      >
        <Heading
          color="#FF7518"
          textAlign="center"
          leadingTrim="both"
          fontStyle="normal"
          fontSize={{ base: "30px", lg: "27px" }}
          fontFamily="Segoe UI"
          fontWeight="900"
          lineHeight="normal"
        >
          {heading}
        </Heading>
      </Flex>
      <Flex
        // border="1px solid orange"
        width={{lg:"90%",md:"100%"}}
        height={{ lg: "361px", base: "911px" }}
        alignItems="center"
        justifyContent="space-around"
        flexDir={{ base: "column", lg: "row", md: "row" }}
      >
        {data.map((item, index) => (
          <Card key={index} style={cardStyle}>
            <Text style={textStyle}>{item.text}</Text>
            <Image src={item.image}></Image>
          </Card>
        ))}
      </Flex>
    </Flex>
  );
};

export default MedData;
