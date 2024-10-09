import React from 'react';
import { formatDistanceToNow } from 'date-fns';
import { useApplicationContext } from '../../context/ApplicationContext';

const MyApplication = () => {
  const { applications } = useApplicationContext();

  return (
    <section className="text-gray-600 body-font overflow-hidden bg-gradient-to-r from-purple-100 via-pink-100 to-blue-100 min-h-screen">
      <div className="container px-5 py-24 mx-auto">
        <h2 className="text-4xl font-extrabold mb-12 text-center bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">My Applications</h2>
        {applications.length === 0 ? (
          <p className="text-center text-xl text-gray-600">You haven't submitted any applications yet.</p>
        ) : (
          <div className="flex flex-wrap -m-4">
            {applications.map((application, index) => (
              <div key={index} className="p-4 md:w-1/2 w-full">
                <div className="h-full bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
                  <h2 className="text-2xl font-bold text-gray-900 title-font mb-2">{application.title}</h2>
                  <p className="leading-relaxed text-base text-indigo-500 font-semibold mb-2">{application.company}</p>
                  <p className="leading-relaxed">
                  <p>
        <span className="font-semibold">Applied:</span>{' '}
        {formatDistanceToNow(new Date(application.appliedDate), { 
          addSuffix: true,
          includeSeconds: true
        })}
      </p>
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default MyApplication;