import React from 'react'; // Import React


export default function HeroPage() {
  return (
    <div
      className="relative isolate px-6 pt-14 lg:px-8"
      style={{
        backgroundImage:
          'linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(255, 255, 250, 10)), url(https://images.pexels.com/photos/6517328/pexels-photo-6517328.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)', // The gradient goes from black to white
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
         
        />
      </div>
      <div className="mx-auto max-w-1.5xl py-32 sm:py-48 lg:py-56">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">        
        </div>
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Transform Your Career Path with Personalized Guidance          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
          Gain insider knowledge and advice from professionals who have walked the path you're on.
          Enhance your skills, boost your confidence, and set yourself up for long-term success.
          </p>
         
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
         
        />
      </div>
    </div>
  );
}
