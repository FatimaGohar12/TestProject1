import { Button, Card, Flex, Heading, Image } from "@chakra-ui/react";
import React from "react";

const Box4 = () => {
  const cardData = [
    {
      text: "General Requirement",
      image: require("../assets/1pic.svg").default,
    },
    {
      text: "Site Works",
      image: require("../assets/pic2.svg").default,
    },
    {
      text: "Concrete",
      image: require("../assets/pic3.svg").default,
    },
    {
      text: "Masonry",
      image: require("../assets/pic4.svg").default,
    },
  ];

  return (
    <Flex
      // border="1px solid black"
      width="70%"
      height="400px"
      margin="auto"
      flexDir="column"
      justifyContent="space-around"
      alignItems="center"
    >
      <Flex
        // border="1px solid black"
        width="80%"
        height="70px"
        flexDir="column"
        justifyContent="center"
        alignItems="center"
      >
        <Heading
          color="#FF7518"
          fontFamily="Segoe UI"
          fontSize="40px"
          fontStyle="normal"
          fontWeight="900"
          lineHeight="normal"
        >
          Take a look at our Trades
        </Heading>
      </Flex>
      <Flex
        flexDir="row"
        alignItems="center"
        width="88%"
        height="407px"
        justifyContent="space-around"
      >
        {cardData.map((card, index) => (
          <Flex
            key={index}
            // border="1px solid black"
            width="23%"
            height="250px"
            alignItems="baseline"
            style={{ position: "relative" }}
          >
            <Image src={card.image} />
            <Button
              style={{
                position: "absolute",
                top: "84%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                borderRadius: "15px",
                background: "#2F2F2F",
                // border: "1px solid black",
                width: "100%",
                height: "80px",
                color: "white",
              }}
            >
              {card.text}
            </Button>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};

export default Box4;
