import React from 'react';
import { Zap, TrendingUp, Gift } from 'lucide-react';

interface UserOnboardingProps {
  onGetStarted: () => void;
}

export default function UserOnboarding({ onGetStarted }: UserOnboardingProps) {
  return (
    <div className="bg-gradient-to-br from-[#1A1A1A] via-[#0B0B0B] to-[#1A1A1A] rounded-2xl p-8 mb-8 border border-[#21C7E6]/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#21C7E6]/10 to-[#FF6200]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-[#FF6200]/10 to-[#21C7E6]/10 rounded-full blur-2xl"></div>
      
      <div className="relative z-10 text-center max-w-2xl mx-auto">
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 bg-gradient-to-r from-[#21C7E6] to-[#FF6200] rounded-full flex items-center justify-center shadow-lg shadow-[#21C7E6]/25">
            <Zap className="text-white" size={40} />
          </div>
        </div>

        {/* Headline */}
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Unlock Your TRX Rewards
        </h2>

        {/* Supporting Text */}
        <p className="text-lg text-[#E5E5E5] mb-8 leading-relaxed">
          Sign up to claim free TRX every hour and track your growing balance!
        </p>

        {/* Feature highlights */}
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 mb-8">
          <div className="flex items-center space-x-2 text-[#21C7E6]">
            <Gift size={20} />
            <span className="text-sm font-medium">Hourly Free Claims</span>
          </div>
          <div className="flex items-center space-x-2 text-[#FF6200]">
            <TrendingUp size={20} />
            <span className="text-sm font-medium">Growing Balance</span>
          </div>
          <div className="flex items-center space-x-2 text-[#21C7E6]">
            <Zap size={20} />
            <span className="text-sm font-medium">Instant Rewards</span>
          </div>
        </div>

        {/* Call-to-Action Button */}
        <button
          onClick={onGetStarted}
          className="bg-gradient-to-r from-[#21C7E6] to-[#FF6200] hover:from-[#21C7E6]/90 hover:to-[#FF6200]/90 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[#21C7E6]/30 focus:outline-none focus:ring-2 focus:ring-[#21C7E6]/50 focus:ring-offset-2 focus:ring-offset-[#0B0B0B]"
          aria-label="Get started with TonMax to earn free TRX"
        >
          Get Started Now
        </button>

        {/* Trust indicator */}
        <p className="text-xs text-[#A0A0A0] mt-4">
          Join 45,000+ users already earning free TRX with TronMax
        </p>
      </div>
    </div>
  );
}
