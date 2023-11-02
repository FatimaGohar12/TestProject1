import React from "react";
import MedData from "./Components/MedData";
import { Flex } from "@chakra-ui/react";
import Footer from "./Components/Footer";
import Box7 from "./Components/Box7";
import Box5 from "./Components/Box5";
import Box4 from "./Components/Box4";
import Box6 from "./Components/Box6";
import Header from "./Components/Header";
import MecBg from "./MecBg";
import Navigation from "./Navigation";

const Home = () => {
  const mechanicalEstimationData = [
    {
      text: "HVAC",
      image: require("../src/assets/Rectangle 218.svg").default,
    },
    {
      text: "Mechanical Equipment Installation",
      image: require("../src/assets/Rectangle 219.svg").default,
    },
    {
      text: "Energy Efficiency Upgrades",
      image: require("../src/assets/Rectangle 220.svg").default,
    },
  ];
  const electricalEstimationData = [
    {
      text: "Piping Systems",
      image: require("../src/assets/212.svg").default,
    },
    {
      text: "Fixtures and Sanitaryware",
      image: require("../src/assets/213.svg").default,
    },
    {
      text: "Drainage and Water Supply",
      image: require("../src/assets/215.svg").default,
    },
  ];
  return (
    <>
    {/* <Header></Header> */}
    {/* <Navigation/> */}
       {/* <MecBg/> */}
       <MedData
        heading={"Mechanical Estimation Data"}
        data={mechanicalEstimationData}
      />
      <Flex marginTop="12px">
        <MedData
          heading={"Electrical Estimation Data"}
          data={electricalEstimationData}
        />
      </Flex> 
      {/* <Box4/>
      <Box5/>
      <Box6/>
      <Box7/>
      <Footer /> */}
     
      
    </>
  );
};

export default Home;
