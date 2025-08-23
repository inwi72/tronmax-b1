import React from 'react';
import { TrendingUp, Users, Gamepad2 } from 'lucide-react';

interface HeroSectionProps {
  onRegister: () => void;
}

export default function HeroSection({ onRegister }: HeroSectionProps) {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        {/* Hero Content */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-[#21C7E6] via-[#FF6200] to-[#21C7E6] bg-clip-text text-transparent mb-6">
            Welcome to TronMax - Your TRX Gateway
          </h1>
          <p className="text-xl text-[#E5E5E5] max-w-3xl mx-auto mb-4">
            The ultimate platform to earn free TRX through our faucet, exciting games, staking rewards, and referral program.
          </p>
          <div className="bg-[#1A1A1A] border border-[#21C7E6]/30 rounded-lg p-6 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-4">Why Choose TronMax?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-[#21C7E6] rounded-full"></div>
                <span className="text-[#E5E5E5]">Instant TRX payouts every hour</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-[#FF6200] rounded-full"></div>
                <span className="text-[#E5E5E5]">Provably fair gaming system</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-[#21C7E6] rounded-full"></div>
                <span className="text-[#E5E5E5]">Secure & transparent platform</span>
              </div>
            </div>
          </div>
        </div>

        {/* Three-Column Feature Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Hi-Lo Game Card */}
          <div className="bg-gray-800 border border-blue-500/20 rounded-xl p-6 hover:border-blue-500/40 transition-colors">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-gradient-to-r from-[#21C7E6] to-[#FF6200] rounded-full flex items-center justify-center">
                <Gamepad2 className="text-white" size={32} />
              </div>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Hi-Lo Game</h3>
            <p className="text-gray-300 mb-6">
              Predict higher or lower to win instant TRX payouts.
            </p>
            <button
              onClick={onRegister}
              className="w-full bg-gradient-to-r from-[#21C7E6] to-[#FF6200] hover:from-[#21C7E6]/80 hover:to-[#FF6200]/80 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[#21C7E6]/25"
            >
              Sign Up to Play
            </button>
          </div>

          {/* Staking Card */}
          <div className="bg-gray-800 border border-blue-500/20 rounded-xl p-6 hover:border-blue-500/40 transition-colors">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-gradient-to-r from-[#21C7E6] to-[#FF6200] rounded-full flex items-center justify-center">
                <TrendingUp className="text-white" size={32} />
              </div>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">TRX Staking</h3>
            <p className="text-gray-300 mb-6">
              Place your bets and multiply your TRX rewards.
            </p>
            <button
              onClick={onRegister}
              className="w-full bg-gradient-to-r from-[#21C7E6] to-[#FF6200] hover:from-[#21C7E6]/80 hover:to-[#FF6200]/80 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[#21C7E6]/25"
            >
              Register to Earn
            </button>
          </div>

          {/* Referral Program Card */}
          <div className="bg-gray-800 border border-blue-500/20 rounded-xl p-6 hover:border-blue-500/40 transition-colors">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-gradient-to-r from-[#21C7E6] to-[#FF6200] rounded-full flex items-center justify-center">
                <Users className="text-white" size={32} />
              </div>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Refer & Earn</h3>
            <p className="text-gray-300 mb-6">
              Share your link and earn commission from friends' activities.
            </p>
            <button
              onClick={onRegister}
              className="w-full bg-gradient-to-r from-[#21C7E6] to-[#FF6200] hover:from-[#21C7E6]/80 hover:to-[#FF6200]/80 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[#21C7E6]/25"
            >
              Sign Up & Earn
            </button>
          </div>
        </div>

        {/* Trust & Security Badges */}
        <div className="flex justify-center space-x-6 text-sm text-[#E5E5E5] mt-12">
          <span>🔒 Secure</span>
          <span>⚡ Instant Free TRX</span>
          <span>📊 Provably Fair</span>
        </div>
      </div>
    </div>
  );
}
