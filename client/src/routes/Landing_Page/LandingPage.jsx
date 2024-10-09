import React from "react";
import HeroSection from "./HeroSection";
import Resume from "./Resume";
import WhatWeOfferSection from "./OfferButton";
import FeaturedCompaniesCarousel from "./FeaturedCompanies";
import TopCompaniesTrustUs from "./TrustCompanies";
import JobDiscovery from "./JobDiscovery";
import JobCategoryBrowser from "./JobCategory";
import Testimonials from "./Testimonials";



function LandingPage() {
  return (
    <div>
     
      <HeroSection />
      <Resume/>
      <WhatWeOfferSection/>
      <FeaturedCompaniesCarousel/>
      <TopCompaniesTrustUs/>
      <JobDiscovery/>
      <JobCategoryBrowser/>
      <Testimonials/>
      
      
      
     
      
    </div>
  );
}

export default LandingPage;