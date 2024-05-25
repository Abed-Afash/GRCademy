import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/Hero";
import Expertise from "components/features/TwoColWithTwoHorizontalFeaturesAndButton.js";
import MainFeature from "components/features/TwoColSingleFeatureWithStats2.js";
import ThreeColSimple from "components/features/ThreeColSimple";
import Testimonial from "components/testimonials/TwoColumnWithImageAndProfilePictureReview.js";
import FAQ from "components/faqs/SingleCol.js";
import GetStarted from "components/cta/GetStartedLight";
import Footer from "components/footers/MiniCenteredFooter";
import TestimonialData from "components/testimonials/TestimonialData";

const LandingPage = () => {
  const Subheading = tw.span`uppercase tracking-widest font-bold text-primary-500`;
  const HighlightedText = tw.span`text-primary-500`;

  return (
    <AnimationRevealPage>
      <Hero roundedHeaderButton={true} />
      <Expertise
        heading={<>Training Crafted by GRC Professionals for <HighlightedText>Future Leaders</HighlightedText></>}
        primaryButtonUrl="/AboutUs"
      />
      <MainFeature primaryButtonUrl="/AboutUs"/>
      <ThreeColSimple />
      <Testimonial
      subheading="Testimonials"
      heading={
        <>
          Our Students <span tw="text-primary-500">Love Us.</span>
        </>
      }
      description="Explore the experiences of our passionate learners as they share their journey with our GRC training program. Learn how our course has empowered them to navigate the complexities of governance, risk, and compliance with confidence."
      testimonials={TestimonialData}
      textOnLeft={true}
    />
      <FAQ
        subheading={<Subheading>FAQS</Subheading>}
        heading={
          <>
            You have <HighlightedText>Questions ?</HighlightedText>
          </>
        }
        faqs={[
          {
            question: "What is GRC, and why is it important ?",
            answer:
              "GRC stands for Governance, Risk, and Compliance. It's important because it helps organizations effectively manage their operations, minimize risks, and ensure compliance with regulations and internal policies."
          },
          {
            question: "Are there any prerequisites for enrolling in the GRC training course ?",
            answer:
              "There are no specific prerequisites for enrolling in our GRC training course. It is designed to cater to both beginners and experienced professionals looking to enhance their knowledge and skills."
          },
          {
            question: "How long does it take to complete the GRC training course ?",
            answer:
              "The duration of the course varies depending on your pace, but most students complete it within 4 to 6 weeks, dedicating a few hours each week."
          },
          {
            question: "Can I access the course materials after completing the training ?",
            answer:
              "Yes, you will have lifetime access to all course materials, allowing you to revisit and review the content anytime you need a refresher."
          },
          {
            question: "Will I receive a certificate upon completion ?",
            answer:
              "Yes, upon successfully completing the course, you will receive a digital badge and a certificate that you can share on your professional profiles and with employers."
          },
          {
            question: "Is the certification recognized by industry professionals and organizations ?",
            answer:
              "Yes, our certification is widely recognized and respected by industry professionals and organizations, validating your expertise in governance, risk management, and compliance."
          }
        ]}
      />
      <GetStarted/>
      <Footer />
    </AnimationRevealPage>
  );
}
export default LandingPage