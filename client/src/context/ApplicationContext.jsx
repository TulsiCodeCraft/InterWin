import React, { createContext, useState, useContext } from 'react';

const ApplicationContext = createContext();

export const useApplicationContext = () => {
  const context = useContext(ApplicationContext);
  if (!context) {
    throw new Error('useApplicationContext must be used within an ApplicationProvider');
  }
  return context;
};

export const ApplicationProvider = ({ children }) => {
  const [applications, setApplications] = useState([]);

  const addApplication = (newApplication) => {
    setApplications(prevApplications => [...prevApplications, newApplication]);
  };

  return (
    <ApplicationContext.Provider value={{ applications, addApplication }}>
      {children}
    </ApplicationContext.Provider>
  );
};