import React from 'react';

interface LoaderProps {
  isLoading: boolean;
}

const Loader: React.FC<LoaderProps> = ({ isLoading }) => {
  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-navy transition-opacity duration-500 ease-in-out ${
        isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      aria-hidden={!isLoading}
      role="status"
      aria-live="polite"
    >
      <div className="flex items-center justify-center space-x-2" aria-label="Loading animation">
        <span className="sr-only">Loading...</span>
        <div className="h-3 w-3 bg-white rounded-full animate-wave" style={{ animationDelay: '0s' }}></div>
        <div className="h-3 w-3 bg-white rounded-full animate-wave" style={{ animationDelay: '0.2s' }}></div>
        <div className="h-3 w-3 bg-white rounded-full animate-wave" style={{ animationDelay: '0.4s' }}></div>
      </div>
      <p className="mt-6 text-white text-sm font-light tracking-widest uppercase animate-fadeInOut">
        Welcome To Tech Pearl Creator
      </p>
    </div>
  );
};

export default Loader;
