import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Interview from "./routes/interview_prep/Interview";
import Position from "./routes/interview_prep/Position";
import Company from "./routes/interview_prep/Company";
import PositionDetails from "./routes/interview_prep/PositionDetails";
import MockInterview from "./routes/interview_prep/MockInterview";
import LandingPage from "./routes/Landing_Page/LandingPage";
import LoginScreen from "./routes/mainLogin/Login";
import RegistrationScreen from "./routes/mainRegister/Register";
// import OTPVerificationScreen from "./routes/otp-password/password/OTP";
import ForgotPasswordScreen from "./routes/otp-password/ForgotPassword";
import ResetPasswordScreen from "./routes/otp-password/ResetPassword";
import ResumeMaker from "./routes/Resume/ResumeMaker";
import ResumeTemplates from "./routes/Resume/ResumeTemplates";
import EnterDetails from "./routes/Resume/EnterDetails";
import DownloadResume from "./routes/Resume/DownloadResume";
import JobListingPage from "./routes/navbar_components/Job-Listing/JobListingPage";
import InternshipListingPage from "./routes/navbar_components/Internships-Listing/InternshipListingPage";
import ServicesPage from "./routes/navbar_components/Services/ServicesPage";
import CompaniesPage from "./routes/navbar_components/Companies/CompaniesPage";
import Layout from "./routes/meeting_schedule/layout";
import CardDetail from "./routes/meeting_schedule/cardDetails";
import InstructorLogin from "./routes/instructor/InstructorLogin";
import RecruitePage from "./routes/recruiter/recruitePage";

import Footer from "./components/Footer"
import Feedback from "./routes/feedback/feedback";
import Profile from "./routes/profile/profile";
import EditProfile from "./routes/profile/editProfile";
import JobHistory from "./routes/application/application";

import JobDetailsPage from "./routes/navbar_components/Job-Listing/JobDetailsPage";
import ScrollToTop from "./components/ScrollToTop";
import InternshipDetailsPage from "./routes/navbar_components/Internships-Listing/InternshipDetailsPage";

import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <Router>
      <Navbar />

      <ScrollToTop/>

      <ScrollToTop />

        <Routes>
          {/* landing page */}
          <Route path="/" element={<LandingPage />} />

          {/* job-listing page */}
          <Route path="/job-listing" element={<JobListingPage/>} />
          <Route path="/job/:id" element={<JobDetailsPage />} />
          

          {/* internships-listing page */}
          <Route path="/internships-listing" element={<InternshipListingPage />}/>
          <Route path="/internship/:id" element={<InternshipDetailsPage />}/>

          {/* services page */}
          <Route path="/services" element={<ServicesPage />} />

          {/* companies page */}
          <Route path="/companies" element={<CompaniesPage />} />

          {/* login page */}
          <Route path="/login" element={<LoginScreen />} />

          {/* instructor login page */}
          <Route path="/InstructorLogin" element={<InstructorLogin />} />

          {/* recruiter login page */}
          <Route path="/RecruiterLogin" element={<RecruitePage />} />

          {/* register page */}
          <Route path="/register" element={<RegistrationScreen />} />


          <Route path="/reset-password" element={<ResetPasswordScreen />} />


          
          {/*profile */}
          <Route path="/profile" element={<Profile />} />


          {/*edit_profile */}
          <Route path="/edit-profile" element={<EditProfile />} />

          


          {/*feedback_system */}
          <Route path="/feedback_system" element={<Feedback />} />

          
          {/*job_history */}
          <Route path="/application" element={<JobHistory />} />


          {/*resume */}
          <Route path="/resume" element={<ResumeMaker />} />
          <Route path="/resume/templates" element={<ResumeTemplates />} />
          <Route
            path="/resume/enter-details"
            element={<EnterDetails />}
          />
          <Route
            path="/resume/download"
            element={<DownloadResume />}
          />

          {/*interview_prep */}
          <Route path="/interview_prep" element={<Interview />} />
        <Route path="/interview_prep/position" element={<Position />} />
        <Route path="/interview_prep/company" element={<Company />} />
        <Route path="/interview_prep/position/:position" element={<PositionDetails />} />
        <Route path="/interview_prep/mock-interview/:position/:level" element={<MockInterview />} />
          {/* meeting schedule */}

          <Route path="/meeting_schedule" element={<Layout />} />
          <Route path="/meeting_schedule/:id" element={<CardDetail />} />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}
export default App;
