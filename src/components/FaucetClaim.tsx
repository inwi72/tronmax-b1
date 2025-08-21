import React from 'react';
import { Droplets, Clock, Gift } from 'lucide-react';

interface FaucetClaimProps {
  isAuthenticated: boolean;
  canClaim: boolean;
  timeLeft: number;
  onClaim: () => void;
  onShowHiLoPopup: () => void;
}

export default function FaucetClaim({ 
  isAuthenticated, 
  canClaim, 
  timeLeft, 
  onClaim,
  onShowHiLoPopup 
}: FaucetClaimProps) {
  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleClaim = () => {
    onClaim();
    // Show popup after claim
    setTimeout(() => onShowHiLoPopup(), 1000);
  };

  if (!isAuthenticated) {
    return (
      <div className="bg-gradient-to-r from-[#1A1A1A] to-[#0B0B0B] rounded-xl p-8 text-center border border-[#21C7E6]/20">
        <Droplets className="mx-auto mb-4 text-[#A0A0A0]" size={48} />
        <h2 className="text-2xl font-bold text-white mb-2">Free TRX Faucet</h2>
        <p className="text-[#E5E5E5] mb-6">Login to start claiming free TRX every hour!</p>
        <div className="bg-[#1A1A1A] text-[#E5E5E5] px-8 py-4 rounded-lg font-medium border border-[#21C7E6]/20">
          Login Required
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-[#1A1A1A] to-[#0B0B0B] rounded-xl p-8 text-center border border-[#21C7E6]/30">
      <div className="mb-6">
        <div className="flex items-center justify-center space-x-2 mb-2">
          <Gift className="text-[#FF6200]" size={32} />
          <h2 className="text-2xl font-bold text-white">Free TRX Claim</h2>
        </div>
        <p className="text-[#E5E5E5]">Claim your free TRX reward every hour</p>
      </div>

      <div className="mb-6 p-4 bg-[#0B0B0B]/50 rounded-lg border border-[#21C7E6]/20">
        <div className="text-sm text-[#A0A0A0] mb-1">Next Reward</div>
        <div className="text-2xl font-bold text-[#21C7E6]">
          0.100000 - 0.500000 TRX
        </div>
      </div>

      {canClaim ? (
        <button
          onClick={handleClaim}
          className="w-full bg-gradient-to-r from-[#21C7E6] to-[#FF6200] hover:from-[#21C7E6]/80 hover:to-[#FF6200]/80 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[#21C7E6]/25 focus:outline-none focus:ring-2 focus:ring-[#21C7E6]/50"
          aria-label="Claim free TRX reward"
        >
          <Droplets className="inline mr-2" size={24} />
          START EARNING TRX NOW
        </button>
      ) : (
        <div>
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Clock className="text-[#FF6200]" size={20} />
            <span className="text-[#FF6200] font-medium">Cooldown Active</span>
          </div>
          <div className="bg-[#0B0B0B]/50 text-[#E5E5E5] px-8 py-4 rounded-lg font-mono text-xl border border-[#21C7E6]/20">
            {formatTime(timeLeft)}
          </div>
          <p className="text-sm text-[#A0A0A0] mt-2">Time until next claim</p>
        </div>
      )}
    </div>
  );
}
