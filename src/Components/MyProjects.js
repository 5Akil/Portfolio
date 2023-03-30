import React from "react";
import {
  PaddingContainer,
  Heading,
  BlueText,
} from "./Styled-Components/Global.styled";

import { projectDetails } from "../utils/Data";
import Project from "./Layout/Project";
import { motion } from "framer-motion";
import { fadeInTopVariant } from "../utils/Varients";

const MyProjects = () => {
  console.log(projectDetails);
  return (
    <PaddingContainer
      id="Projects"
      top="5%"
      bottom="5%"
      responsiveTop="20%"
      responsiveLeft="1rem"
      responsiveRight="1rem"
    >
      <Heading
        as={motion.h4}
        variants={fadeInTopVariant}
        initial="hidden"
        whileInView="visible"
        size="h4"
      >
        MY PROJECTS
      </Heading>
      <Heading
        as={motion.h4}
        variants={fadeInTopVariant}
        initial="hidden"
        whileInView="visible"
        size="h2"
      >
        What <BlueText>I have built</BlueText>
      </Heading>

      {projectDetails.map((project) => (
        <PaddingContainer top="5rem" bottom="5rem">
          <Project data={project}  />
        </PaddingContainer>
      ))}
    </PaddingContainer>
  );
};

export default MyProjects;
