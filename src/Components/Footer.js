import React from "react";
import {
  PaddingContainer,
  Heading,
  BlueText,
  FlexContainer,
} from "./Styled-Components/Global.styled";
import {
  FormInput,
  FormLabel,
  ContactForm,
  Button,
} from "./Styled-Components/Footer.styled";
import { motion } from "framer-motion";
import { fadeInBottomVariant } from "../utils/Varients";

const Footer = () => {
  return (
    <PaddingContainer id="Contact" top="5%" bottom="10%">
      <Heading
        as={motion.h4}
        variants={fadeInBottomVariant}
        initial="hidden"
        whileInView="visible"
        size="h4"
        align="center"
      >
        MY CONTACT
      </Heading>
      <Heading
        as={motion.h4}
        variants={fadeInBottomVariant}
        initial="hidden"
        whileInView="visible"
        size="h2"
        align="center"
        top="0.5rem"
      >
        Contact <BlueText>Me Here</BlueText>
      </Heading>
      <PaddingContainer top="3rem">
        <FlexContainer justify="center">
          <ContactForm
            as={motion.form}
            variants={fadeInBottomVariant}
            initial="hidden"
            whileInView="visible"
            action="https://formspree.io/f/mjvdawya"
            method="post"
          >
            <PaddingContainer bottom="2rem">
              <FormLabel>Name:</FormLabel>
              <FormInput type="text" placeholder="Enter your name" name="username" autoComplete="off" required/>
            </PaddingContainer>

            <PaddingContainer bottom="2rem">
              <FormLabel>Email:</FormLabel>
              <FormInput type="email" placeholder="Enter your email" name="email" autoComplete="off" required/>
            </PaddingContainer>

            <PaddingContainer bottom="2rem">
              <FormLabel>Message:</FormLabel>
              <FormInput as="textarea" placeholder="Enter your message" name="message"  required/>
            </PaddingContainer>

            <FlexContainer justify="center" responsiveFlex>
              <Button type="submit">Send Message</Button>
            </FlexContainer>
          </ContactForm>
        </FlexContainer>
      </PaddingContainer>
    </PaddingContainer>
  );
};

export default Footer;
