import React from 'react';
import { Wallet, TrendingUp } from 'lucide-react';

interface BalanceDisplayProps {
  balance: number;
  isAuthenticated: boolean;
}

export default function BalanceDisplay({ balance, isAuthenticated }: BalanceDisplayProps) {
  if (!isAuthenticated) {
    return (
      <div className="bg-gradient-to-r from-[#1A1A1A] to-[#0B0B0B] rounded-xl p-6 mb-8 border border-[#21C7E6]/20">
        <div className="text-center">
          <Wallet className="mx-auto mb-4 text-[#A0A0A0]" size={48} />
          <h2 className="text-xl font-semibold text-[#E5E5E5] mb-2">Login to View Balance</h2>
          <p className="text-[#A0A0A0]">Sign in to start claiming TRX rewards</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-[#1A1A1A] to-[#0B0B0B] rounded-xl p-6 mb-8 border border-[#21C7E6]/30">
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center space-x-2 mb-2">
            <Wallet className="text-[#21C7E6]" size={24} />
            <h2 className="text-xl font-semibold text-white">TRX Balance</h2>
          </div>
          <div className="flex items-baseline space-x-2">
            <span className="text-3xl font-bold text-[#21C7E6]">
              {balance.toFixed(6)}
            </span>
            <span className="text-lg text-[#E5E5E5]">TRX</span>
          </div>
          <p className="text-[#A0A0A0] text-sm mt-1">
            ≈ ${(balance * 0.12).toFixed(2)} USD
          </p>
        </div>
        <div className="text-right">
          <div className="flex items-center space-x-1 text-[#FF6200] mb-2">
            <TrendingUp size={16} />
            <span className="text-sm font-medium">+2.5%</span>
          </div>
          <p className="text-xs text-[#A0A0A0]">24h change</p>
        </div>
      </div>
    </div>
  );
}