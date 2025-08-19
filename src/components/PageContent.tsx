import React from 'react';
import { TrendingUp, BarChart3, Shield, Zap } from 'lucide-react';

interface PageContentProps {
  page: string;
}

export default function PageContent({ page }: PageContentProps) {
  if (page === 'staking') {
    return (
      <div className="space-y-6">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-4">TRX Staking</h1>
          <p className="text-slate-300">Stake your TRX and earn passive rewards</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-r from-[#1A1A1A] to-[#0B0B0B] rounded-xl p-6 border border-[#21C7E6]/20">
            <div className="flex items-center space-x-2 mb-4">
              <TrendingUp className="text-[#21C7E6]" size={24} />
              <h2 className="text-xl font-bold text-white">Flexible Staking</h2>
            </div>
            <div className="space-y-3">
              <div className="text-2xl font-bold text-[#21C7E6]">8.5% APY</div>
              <div className="text-[#E5E5E5]">No lock-up period</div>
              <div className="text-[#E5E5E5]">Withdraw anytime</div>
              <button className="w-full bg-[#21C7E6] hover:bg-[#21C7E6]/80 text-white font-bold py-2 px-4 rounded-lg transition-colors">
                Stake Now
              </button>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-[#1A1A1A] to-[#0B0B0B] rounded-xl p-6 border border-[#21C7E6]/20">
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="text-[#FF6200]" size={24} />
              <h2 className="text-xl font-bold text-white">Fixed Staking</h2>
            </div>
            <div className="space-y-3">
              <div className="text-2xl font-bold text-[#FF6200]">15% APY</div>
              <div className="text-[#E5E5E5]">30-day lock period</div>
              <div className="text-[#E5E5E5]">Higher rewards</div>
              <button className="w-full bg-[#FF6200] hover:bg-[#FF6200]/80 text-white font-bold py-2 px-4 rounded-lg transition-colors">
                Stake Now
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (page === 'dashboard') {
    return (
      <div className="space-y-6">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-4">Dashboard</h1>
          <p className="text-[#E5E5E5]">Track your earnings and activity</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-r from-[#1A1A1A] to-[#0B0B0B] rounded-xl p-6 border border-[#21C7E6]/20">
            <BarChart3 className="text-[#21C7E6] mb-4" size={32} />
            <div className="text-2xl font-bold text-white mb-2">156</div>
            <div className="text-[#E5E5E5]">Total Claims</div>
          </div>
          
          <div className="bg-gradient-to-r from-[#1A1A1A] to-[#0B0B0B] rounded-xl p-6 border border-[#21C7E6]/20">
            <Zap className="text-[#FF6200] mb-4" size={32} />
            <div className="text-2xl font-bold text-white mb-2">23.45</div>
            <div className="text-[#E5E5E5]">TRX Earned</div>
          </div>
          
          <div className="bg-gradient-to-r from-[#1A1A1A] to-[#0B0B0B] rounded-xl p-6 border border-[#21C7E6]/20">
            <TrendingUp className="text-[#21C7E6] mb-4" size={32} />
            <div className="text-2xl font-bold text-white mb-2">12</div>
            <div className="text-[#E5E5E5]">Referrals</div>
          </div>
        </div>
      </div>
    );
  }

  return null;
}