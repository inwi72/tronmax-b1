import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#0B0B0B] border-t border-[#21C7E6]/20 text-white text-center p-6 mt-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-center space-x-6 text-sm mb-4">
          <a 
            href="#" 
            className="text-[#E5E5E5] hover:text-[#21C7E6] transition-colors duration-300"
            aria-label="Terms of Service"
          >
            Terms of Service
          </a>
          <a 
            href="#" 
            className="text-[#E5E5E5] hover:text-[#21C7E6] transition-colors duration-300"
            aria-label="Privacy Policy"
          >
            Privacy Policy
          </a>
          <a 
            href="#" 
            className="text-[#E5E5E5] hover:text-[#21C7E6] transition-colors duration-300"
            aria-label="Contact"
          >
            Contact
          </a>
          <a 
            href="#" 
            className="text-[#E5E5E5] hover:text-[#21C7E6] transition-colors duration-300"
            aria-label="Disclaimer"
          >
            Disclaimer
          </a>
        </div>
        <div className="text-xs text-[#A0A0A0]">
          © 2025 TronMax. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
