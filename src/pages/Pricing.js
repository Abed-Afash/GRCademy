import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Header from "components/headers/light.js";
import Pricing from "components/pricing/TwoPlansWithDurationSwitcher.js";
import Testimonial from "components/testimonials/ThreeColumnWithProfileImage.js";
import Footer from "components/footers/MiniCenteredFooter";
import TestimonialData from "components/testimonials/TestimonialData"
export default () => {
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  const shuffledData = shuffleArray(TestimonialData)
  const filteredData = shuffledData.filter((testimonial, index) => index < 3)
  return (
    <AnimationRevealPage>
      <Header />
      <Pricing />
      <Testimonial
        heading="Our Beloved Students"
        testimonials={filteredData}
      />
      <Footer/>
    </AnimationRevealPage>
  );
};
