import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white text-center p-4 mt-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-center space-x-6 text-sm">
          <a 
            href="#" 
            className="text-gray-300 hover:text-white transition-colors"
          >
            Terms of Service
          </a>
          <a 
            href="#" 
            className="text-gray-300 hover:text-white transition-colors"
          >
            Privacy Policy
          </a>
          <a 
            href="#" 
            className="text-gray-300 hover:text-white transition-colors"
          >
            Contact
          </a>
          <a 
            href="#" 
            className="text-gray-300 hover:text-white transition-colors"
          >
            Disclaimer
          </a>
        </div>
        <div className="mt-4 text-xs text-gray-400">
          © 2025 TRXFaucet. All rights reserved.
        </div>
      </div>
    </footer>
  );
}