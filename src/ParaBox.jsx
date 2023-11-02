import { Flex ,Text} from '@chakra-ui/react'
import React from 'react'

const ParaBox = () => {
  return (
    <>
    
    <Flex
        width={{ lg: "80%", base: "100%", md: "100%" }}
        height={{ base: "300px", lg: "224px", md: "300px" }}
        // border="1px solid black"
        margin="auto"
        alignItems="flex-end"
      >
        <Text
          color="#000"
          fontFamily="Segoe UI"
          fontSize={{ base: "14px", lg: "17px", md: "14px" }}
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
  )
}

export default ParaBox