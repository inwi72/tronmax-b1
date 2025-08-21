import React from 'react';
import { Droplets, Zap } from 'lucide-react';

export default function Banner() {
  return (
    <div className="bg-gradient-to-r from-[#21C7E6] via-[#FF6200] to-[#21C7E6] py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
              <Droplets className="text-white" size={20} />
            </div>
            <span className="text-white font-bold text-lg md:text-xl">
              Earn Free TRX Every Hour
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-2 text-white/90">
            <Zap size={16} />
            <span className="text-sm">No Investment Required </span>
          </div>
        </div>
      </div>
    </div>
  );

}
