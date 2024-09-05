import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import LandingPage from './pages/Landing_Page/LandingPage';


const App = () => {
  return (
    
      <Router>
        <Layout>
          <Routes>
         
            <Route path="/" element={<LandingPage />} />
            


            

           
       
          </Routes>
        </Layout>
      </Router>
    
    
  );
}

export default App;
