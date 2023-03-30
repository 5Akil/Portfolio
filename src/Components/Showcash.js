import React from "react";

import {
  PaddingContainer,
  FlexContainer,
  Heading,
  ParaText,
  BlueText,
} from "./Styled-Components/Global.styled";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { SiMinutemailer } from "react-icons/si";

import {
  ShowcaseImageCard,
  ShowcaseParticleContainer,
  IconContainer,
  Particle,
} from "./Styled-Components/Showcase.styled";
import ShowcaseImg from "../assets/showcase-img.png";
import BackgroundImg from "../assets/particle.png";
import { motion } from "framer-motion";
import { fadeInLeftVariant, fadeInRightVariant } from "../utils/Varients";

const Showcase = () => {
  return (
    <PaddingContainer
      id="Home"
      left="3%"
      right="10%"
      top="15%"
      bottom="10%"
      responsiveLeft="1rem"
      responsiveRight="1rem"
      responsiveTop="8rem"
    >
      <FlexContainer align="center" fullWidthChild>
        <motion.div
          variants={fadeInLeftVariant}
          initial="hidden"
          whileInView="visible"
        >
          <Heading as="h4" size="h4">
            Hello!
          </Heading>
          <Heading as="h1" size="h1" top="0.5rem" bottom="1rem">
            I'm <BlueText>Sakil</BlueText>
          </Heading>
          <Heading as="h2" size="h3" top="0.5rem" bottom="1rem">
            I'm a <BlueText>Frontend Developer</BlueText>
          </Heading>

          <ParaText as="p" top="2rem" bottom="4rem">
            Hello, my name is Sakil Kureshi and i'm looking for a very first job
            as a front-end developer with some experience in creating and
            designing user-friendly websites and web applications.
          </ParaText>

          <FlexContainer gap="20px" align="center" responsiveFlex>
            <a href="https://github.com/5Akil" target="_blank">
              <IconContainer color="white" size="1.5rem" cursor="pointer">
                <BsGithub />
              </IconContainer>
            </a>

            <a
              href="https://www.linkedin.com/in/sakil-kureshi-b25523265"
              target="_blank"
            >
              <IconContainer color="white" size="1.5rem" cursor="pointer">
                <BsLinkedin />
              </IconContainer>
            </a>
          </FlexContainer>
        </motion.div>
        <FlexContainer
          as={motion.div}
          variants={fadeInRightVariant}
          initial="hidden"
          whileInView="visible"
          justify="flex-end"
        >
          <ShowcaseParticleContainer>
            <ShowcaseImageCard background={BackgroundImg}>
              <img src={ShowcaseImg} alt="showcase" />
            </ShowcaseImageCard>

            <Particle
              as={motion.img}
              animate={{
                x: [0, 100, 0],
                rotate: 360,
                scale: [1, 0.5, 1],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
              }}
              src={BackgroundImg}
              initialTop="-80px"
              initialLeft="20px"
              rotate="60deg"
            />
            <Particle
              as={motion.img}
              animate={{
                y: [0, 100, 0],
                rotate: 360,
                scale: [1, 0.5, 1],
              }}
              transition={{
                duration: 18,
                repeat: Infinity,
              }}
              src={BackgroundImg}
              initialTop="50px"
              initialRight="-70px"
              rotate="0deg"
            />
            <Particle
              as={motion.img}
              animate={{
                y: [0, -100, 0],
                rotate: 360,
                scale: [1, 0.5, 1],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
              }}
              src={BackgroundImg}
              initialBottom="10px"
              initialLeft="-70px"
              rotate="50deg"
            />
          </ShowcaseParticleContainer>
        </FlexContainer>
      </FlexContainer>
    </PaddingContainer>
  );
};

export default Showcase;
