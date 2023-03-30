import React from "react";

import {
  PaddingContainer,
  Heading,
  FlexContainer,
  ParaText,
  IconContainer,
  Button,
} from "../Styled-Components/Global.styled";
import Project1 from "../../assets/project1.png";
import { FaGithub } from "react-icons/fa";
import {
  ProjectImageContainer,
  TechStackCard,
  ProjectImage,
} from "../Styled-Components/MyProject.styled";
import { motion } from "framer-motion";
import { fadeInLeftVariant, fadeInRightVariant } from "../../utils/Varients";

const Project = ({ data }) => {
  return (
    <FlexContainer
      direction={data.reverse ? "row-reverse" : true}
      fullWidthChild
    >
      <motion.div
        variants={data.reverse ? fadeInRightVariant : fadeInLeftVariant}
        initial="hidden"
        whileInView="visible"
      >
        <FlexContainer align="center" gap="1rem">
          <Heading as="h3" size="h3" bottom="1rem">
            {data.project_name}
          </Heading>
          {/* <IconContainer color="blue" size="2rem">
            <FaGithub />
          </IconContainer> */}
        </FlexContainer>

        <PaddingContainer top="1rem">
          <FlexContainer gap="1.5rem">
            {data.tech_stack.map((i) => (
              <TechStackCard>{i}</TechStackCard>
            ))}
          </FlexContainer>
        </PaddingContainer>
        <ParaText top="1.5rem" bottom="2rem">
          {data.project_desc}
        </ParaText>
        <a href={data.project_url} target='_blank'>
          <Button >Visit Website</Button>
        </a>
      </motion.div>

      <motion.div
        variants={data.reverse ? fadeInLeftVariant : fadeInRightVariant}
        initial="hidden"
        whileInView="visible"
      >
        <ProjectImageContainer
          justify={data.reverse ? "flex-start" : "flex-end"}
        >
          <ProjectImage src={data.project_img} alt="project" />
        </ProjectImageContainer>
      </motion.div>
    </FlexContainer>
  );
};

export default Project;
