import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import styled from "styled-components"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light.js";
import Footer from "components/footers/MiniCenteredFooter";
import MainFeature1 from "components/features/TwoColWithButton.js";
// import MainFeature2 from "components/features/TwoColSingleFeatureWithStats.js";
// import MainFeature3 from "components/features/TwoColSingleFeatureWithStats2.js";
import Features from "components/features/ThreeColSimple.js";
// import Features from "components/features/ThreeColWithSideImage.js";

import SupportIconImage from "images/support-icon.svg";
import ShieldIconImage from "images/shield-icon.svg";
import CustomerLoveIconImage from "images/simple-icon.svg";

const Subheading = tw.span`uppercase tracking-wider text-sm`;
export default () => {
  return (
    <AnimationRevealPage>
      <Header />
      <MainFeature1
        subheading={<Subheading>About GRCademy</Subheading>}
        heading="Your Partner in GRC Excellence."
        buttonRounded={false}
        primaryButtonText="Get Started"
        imageSrc="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80"
        description="At GRCademy, we specialize in providing top-tier training in Governance, Risk Management, and Compliance. Our mission is to empower professionals and organizations with the knowledge and skills needed to navigate the complexities of regulatory requirements and risk management. With a focus on practical learning and industry relevance, we are committed to helping you achieve excellence in your GRC practices. Join us and elevate your expertise to new heights."
        primaryButtonUrl="/Signup"
      />
      <MainFeature1
        subheading={<Subheading>Our Vision</Subheading>}
        heading="Leading the Future of GRC Training."
        buttonRounded={false}
        primaryButtonText="Contact Us"
        imageSrc="https://images.unsplash.com/3/doctype-hi-res.jpg?ixlib=rb-1.2.1&auto=format&fit=crop&w=768&q=80"
        textOnLeft={false}
        description="Our vision is to revolutionize the field of Governance, Risk Management, and Compliance training. We strive to set new standards in educational excellence by offering comprehensive, accessible, and industry-relevant courses. By equipping professionals with cutting-edge knowledge and practical skills, we aim to foster a community of GRC experts who drive positive change and uphold the highest standards of compliance and risk management in their organizations."
        primaryButtonUrl="/ContactUs"
      />
      <Features
        subheading={<Subheading>Our Values</Subheading>}
        heading="We follow these."
        description="At GRCademy, we believe that the foundation of a successful training program lies in the values that guide it. Our commitment to excellence ensures that our students receive the highest quality education and support."
        cards={[
          {
            imageSrc: SupportIconImage,
            title: "Expertise",
            description: "We value the importance of industry knowledge and ensure our course content is created and reviewed by seasoned GRC professionals"
          },
          {
            imageSrc: ShieldIconImage,
            title: "Continuous Improvement",
            description: "We are dedicated to continuously enhancing our courses to incorporate the latest regulatory updates, technologies, and best practices"
          },
          {
            imageSrc: CustomerLoveIconImage,
            title: "Student Success",
            description: "We prioritize the success of our students, providing them with the resources, and guidance needed to achieve their professional goals"
          },
        ]}
        linkText=""
      />
      <Footer />
    </AnimationRevealPage>
  );
};
