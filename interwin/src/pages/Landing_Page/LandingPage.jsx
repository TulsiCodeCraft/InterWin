import React from "react";
import HeroSection from "./HeroSection";
import Resume from "./Resume";
import WhatWeOfferSection from "./OfferButton";
import FeaturedCompaniesCarousel from "./FeaturedCompanies";



function LandingPage() {
  return (
    <div>
     
      <HeroSection />
      <Resume/>
      <WhatWeOfferSection/>
      <FeaturedCompaniesCarousel/>
      
      
      
     
      
    </div>
  );
}

export default LandingPage;