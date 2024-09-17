import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import LandingPage from './pages/Landing_Page/LandingPage';
import RegistrationScreen from './pages/Register';
import LoginScreen from './pages/Login';
import OTPVerificationScreen from './pages/OTP';
import ForgotPasswordScreen from './pages/ForgotPassword';
import ResetPasswordScreen from './pages/ResetPassword';
import ResumeMaker from './pages/Resume/ResumeMaker';
import ResumeTemplates from './pages/Resume/ResumeTemplates';
import EnterDetails from './pages/Resume/EnterDetails';
import DownloadResume from './pages/Resume/DownloadResume';
import JobListingPage from './pages/Job_Listing/JobListingPage';


const App = () => {
  return (
    
      <Router>
        <Layout>
          <Routes>
         
            <Route path="/" element={<LandingPage />} />
            <Route path="/register" element={<RegistrationScreen />} />
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/otp" element={<OTPVerificationScreen />} />
            <Route path="/forgot-password" element={<ForgotPasswordScreen />} />
            <Route path="/reset-password" element={<ResetPasswordScreen />} />
            <Route path="/resume-maker" element={<ResumeMaker />} />
            <Route path="/resume-templates" element={<ResumeTemplates />} />
            <Route path="/enter-details" element={<EnterDetails />} />
            <Route path="/download-resume" element={<DownloadResume />} />
            <Route path="/job-listing" element={<JobListingPage />} />



            


            

           
       
          </Routes>
        </Layout>
      </Router>
    
    
  );
}

export default App;
