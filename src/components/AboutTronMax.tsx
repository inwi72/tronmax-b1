import React from 'react';
import { Shield, Coins, Users, TrendingUp } from 'lucide-react';

export default function AboutTronMax() {
  return (
    <div className="bg-gradient-to-r from-[#1A1A1A] to-[#0B0B0B] rounded-xl p-8 mb-8 border border-[#21C7E6]/30">
      <div className="text-center mb-6">
        <div className="flex items-center justify-center space-x-3 mb-4">
          {/* TRON Logo representation using TRX styling */}
          <div className="w-12 h-12 bg-gradient-to-r from-[#21C7E6] to-[#FF6200] rounded-full flex items-center justify-center shadow-lg shadow-[#21C7E6]/25">
            <span className="text-white font-bold text-lg">TRX</span>
          </div>
          <h2 className="text-3xl font-bold text-white">About TronMax</h2>
        </div>
        
        <p className="text-lg text-[#E5E5E5] max-w-4xl mx-auto leading-relaxed mb-8">
          TronMax is a premier platform on the TRON network, offering users a secure way to claim free TRX, 
          multiply earnings through provably fair games, and grow their crypto portfolio with high-yield staking 
          plans and lifetime referral commissions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="text-center">
          <div className="w-16 h-16 bg-[#21C7E6]/10 rounded-full flex items-center justify-center mx-auto mb-3">
            <Shield className="text-[#21C7E6]" size={28} />
          </div>
          <h3 className="text-white font-semibold mb-2">Secure Platform</h3>
          <p className="text-[#A0A0A0] text-sm">Built on TRON blockchain with industry-standard security</p>
        </div>

        <div className="text-center">
          <div className="w-16 h-16 bg-[#FF6200]/10 rounded-full flex items-center justify-center mx-auto mb-3">
            <Coins className="text-[#FF6200]" size={28} />
          </div>
          <h3 className="text-white font-semibold mb-2">Free TRX Claims</h3>
          <p className="text-[#A0A0A0] text-sm">Claim free TRX rewards every hour with instant payouts</p>
        </div>

        <div className="text-center">
          <div className="w-16 h-16 bg-[#21C7E6]/10 rounded-full flex items-center justify-center mx-auto mb-3">
            <TrendingUp className="text-[#21C7E6]" size={28} />
          </div>
          <h3 className="text-white font-semibold mb-2">Provably Fair Games</h3>
          <p className="text-[#A0A0A0] text-sm">Multiply your earnings with transparent, fair gaming</p>
        </div>

        <div className="text-center">
          <div className="w-16 h-16 bg-[#FF6200]/10 rounded-full flex items-center justify-center mx-auto mb-3">
            <Users className="text-[#FF6200]" size={28} />
          </div>
          <h3 className="text-white font-semibold mb-2">Referral Program</h3>
          <p className="text-[#A0A0A0] text-sm">Earn lifetime commissions from your referrals</p>
        </div>
      </div>
    </div>
  );
}
