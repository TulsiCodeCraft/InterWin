import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import LandingPage from './pages/Landing_Page/LandingPage';
import RegistrationScreen from './pages/Register';
import LoginScreen from './pages/Login';
import OTPVerificationScreen from './pages/OTP';
import ForgotPasswordScreen from './pages/ForgotPassword';
import ResetPasswordScreen from './pages/ResetPassword';


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


            


            

           
       
          </Routes>
        </Layout>
      </Router>
    
    
  );
}

export default App;
