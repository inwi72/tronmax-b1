import React from 'react';
import { X, Star, TrendingUp, Gift } from 'lucide-react';

interface HiLoPopupProps {
  isOpen: boolean;
  onClose: () => void;
  onPlayNow: () => void;
  lastClaimAmount: number;
}

export default function HiLoPopup({ isOpen, onClose, onPlayNow, lastClaimAmount }: HiLoPopupProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-gradient-to-r from-[#1A1A1A] to-[#0B0B0B] rounded-xl p-6 w-full max-w-md border border-[#21C7E6]/30 text-center">
        <div className="flex justify-end mb-2">
          <button
            onClick={onClose}
            className="text-[#A0A0A0] hover:text-white transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <div className="mb-4">
          <div className="w-16 h-16 bg-gradient-to-r from-[#21C7E6] to-[#FF6200] rounded-full flex items-center justify-center mx-auto mb-4">
            <Star className="text-white" size={32} />
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">Congratulations!</h2>
          <div className="flex items-center justify-center space-x-2 mb-2">
            <Gift className="text-[#21C7E6]" size={20} />
            <span className="text-[#21C7E6] font-bold text-lg">
              +{lastClaimAmount.toFixed(6)} TRX claimed!
            </span>
          </div>
        </div>

        <div className="bg-[#0B0B0B]/50 rounded-lg p-4 mb-6 border border-[#21C7E6]/20">
          <h3 className="text-lg font-bold text-white mb-2 flex items-center justify-center space-x-2">
            <TrendingUp className="text-[#FF6200]" size={20} />
            <span>Double Your Rewards!</span>
          </h3>
          <p className="text-[#E5E5E5] text-sm mb-3">
            Play the HI-LO game and potentially double your TRX rewards. 
            Win rate: ~49% with 1.95x multiplier!
          </p>
          <div className="text-xs text-[#A0A0A0]">
            Risk your {lastClaimAmount.toFixed(6)} TRX to win {(lastClaimAmount * 1.95).toFixed(6)} TRX
          </div>
        </div>

        <div className="space-y-3">
          <button
            onClick={onPlayNow}
            className="w-full bg-gradient-to-r from-[#21C7E6] to-[#FF6200] hover:from-[#21C7E6]/80 hover:to-[#FF6200]/80 text-white font-bold py-3 px-4 rounded-lg transition-colors"
          >
            Play HI-LO Game Now
          </button>
          <button
            onClick={onClose}
            className="w-full bg-[#1A1A1A] hover:bg-[#1A1A1A]/80 text-white font-medium py-2 px-4 rounded-lg transition-colors border border-[#21C7E6]/20"
          >
            Keep My Reward
          </button>
        </div>

        <p className="text-xs text-[#A0A0A0] mt-4">
          * Gambling can be addictive. Please play responsibly.
        </p>
      </div>
    </div>
  );
}