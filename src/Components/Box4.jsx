import { Button, Flex, Heading, Image, useBreakpointValue } from "@chakra-ui/react";
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

  // Determine the number of cards to display per row based on screen size
  const cardsPerRow = useBreakpointValue({ base: 1, sm: 2, md: 3, lg: 4 });

  return (
    <Flex
      width="100%"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      p={{ base: "4", md: "8" }} // Adjust padding based on screen size
    >
      <Heading
        color="#FF7518"
        fontFamily="Segoe UI"
        fontSize={{ base: "24px", md: "40px" }}
        fontStyle="normal"
        fontWeight="900"
        lineHeight="normal"
        textAlign="center"
        mb="4"
      >
        Take a look at our Trades
      </Heading>

      <Flex
        flexDirection="row"
        flexWrap="wrap"
        justifyContent="center"
        width="100%"
      >
        {cardData.map((card, index) => (
          <Flex
            key={index}
            // width={{ base: "59%", sm: `calc(50% - 10px)`, md: `calc(33.33% - 10px)`, lg: `calc(25% - 10px)` }}
            my="4"
            flexDirection="column"
            alignItems="center"
            justifyContent="space-between"
            position="relative"
          >
            <Image src={card.image} boxSize="200px" mb="4" />

            <Button
              position="absolute"
              bottom="0"
              left="50%"
              transform="translateX(-50%)"
              borderRadius="15px"
              background="#2F2F2F"
              width="100%"
              height="60px"
              color="white"
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
