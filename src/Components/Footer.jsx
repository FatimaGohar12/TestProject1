import {
  Box,
  SimpleGrid,
  Stack,
  Image,
  Text,
  Flex,
  Heading,
} from "@chakra-ui/react";
import logo from "../assets/logo.svg";
import img1 from "../assets/Group 246.svg";
import img2 from "../assets/Group 247.svg";
import img3 from "../assets/Group 248.svg";

const textStyle = {
  color: "#FFF",
  textAlign: "center",
  fontFamily: "Inter",
  fontSize: "20px", // Adjust font size for smaller screens
  fontStyle: "normal",
  fontWeight: 600,
  lineHeight: "120%", // Adjust line height for smaller screens
};

const headStyle = {
  color: "#FFF",
  fontFamily: "Inter",
  fontSize: "25px", // Adjust font size for smaller screens
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "130%", // Adjust line height for smaller screens
};

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"md"} mb={2}>
      {children}
    </Text>
  );
};

export default function Footer() {
  return (
    <SimpleGrid
      columns={{ base: 1, md: 2, lg: 3 }}
      spacing={{ base: 6, md: 8 }}
      backgroundColor="#1B1B1B"
      color="white"
      px={{ base: 4, md: 8, lg: 16 }}
      py={{ base: 8, md: 12, lg: 16 }}
    >
      <Stack spacing={6}>
        <Box>
          <Image src={logo} />
        </Box>
        <Text fontSize={"sm"}>
          PROCORE Estimators are an industry leader in providing accurate and
          reliable construction cost estimation services. We specialize in
          Quantity and Material Takeoff, Scheduling, and Planning for your
          project management needs. Our experts use advanced softwares and we
          pay close attention to detail to ensure accurate estimates. We provide
          you with accurate information in a timely manner, enabling you to make
          informed decisions and execute projects efficiently. Rely on PROCORE
          Estimators for precise and prompt cost estimation in construction.
          {/* Your text content */}
        </Text>
      </Stack>
      <Stack spacing={6}>
        <Heading style={headStyle} textAlign="center">
          Navigation
        </Heading>
        <Box as="a" href={"#"} style={textStyle}>
          Service
        </Box>
        <Box as="a" href={"#"} style={textStyle}>
          About Us
        </Box>
        <Box as="a" href={"#"} style={textStyle}>
          Payments
        </Box>
        <Box as="a" href={"#"} style={textStyle}>
          Sample
        </Box>
      </Stack>
      <Stack spacing={6}>
        <Heading style={headStyle}>Contact</Heading>
        <Flex alignItems="center">
          <Image src={img3} />
          <Text ml={4}>2505 Bedford Ave, Brooklyn, NY 11226, USA</Text>
        </Flex>
        <Flex alignItems="center">
          <Image src={img2} />
          <Text ml={4}> +1 917 300 1079</Text>
        </Flex>
        <Flex alignItems="center">
          <Image src={img1} />
          <Text ml={4}>Dave@procoreestimators.com</Text>
        </Flex>
      </Stack>
    </SimpleGrid>
  );
}
