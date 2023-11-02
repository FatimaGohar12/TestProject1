import { Flex, Text, Button, Box, Stack ,Image} from "@chakra-ui/react";
import React from "react";
import bgImage from "../assets/163.svg"; // Renamed the imported image to avoid conflicts with variable names
import blueLogo from "../assets/logoblue.png"
 import driveLogo from "../assets/drivelogo.svg"


const Box7 = () => {
  return (
    <Flex
    flexDir={{base:"column-reverse",lg:"row",md:"column-reverse"}}
    //   width="100%"
      height={{base:"500px",lg:"312px"}}
      // border="1px solid black"
      alignItems="center"
      justifyContent="space-evenly"
      backgroundImage={`url(${bgImage})`}
      backgroundSize="cover" 
    >
      <Flex
        // border="1px solid white"
        width={{base:"47%",lg:"20%"}}
        height="212px"
        alignItems="center"
        justifyContent="space-around"
        flexDir="column"
      >
        <Box>
          <Button
            borderRadius="15px"
            color="white"
            background="#FF7518"
            height="80px"
            textTransform="uppercase"
            boxShadow="13px 13px 4px 0px rgba(0, 0, 0, 0.25)" // Corrected the boxShadow style
          >
            Upload your Plans
          </Button>
        </Box>
        <Stack direction={"row"} >
          <Box w="40px" h="40px" >
          <Image src={driveLogo}/>
            
          </Box>
          <Box w="40px" h="40px" >
            <Image src={blueLogo}/>
          </Box>
        </Stack>
      </Flex>
      <Flex width="70%" height="212px" 
      
      // border="1px solid white"
      alignItems="center">
        <Text
          color="#FFF"
          fontFamily="Segoe UI"
          fontSize={{base:"15px",lg:"25px"}}
          fontStyle="normal"
          fontWeight="500"
          lineHeight="normal"
        >
          For a quick quote based on your project scope, call us at +1 917 300
          1079 or email us at Dave@procoreestimators.com
        </Text>
      </Flex>
    </Flex>
  );
};

export default Box7;
