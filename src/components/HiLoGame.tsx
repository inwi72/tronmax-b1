import React, { useState } from 'react';
import { TrendingUp, TrendingDown, RotateCcw, Star } from 'lucide-react';

interface HiLoGameProps {
  isAuthenticated: boolean;
  balance: number;
  onBalanceUpdate: (newBalance: number) => void;
}

export default function HiLoGame({ isAuthenticated, balance, onBalanceUpdate }: HiLoGameProps) {
  const [currentNumber, setCurrentNumber] = useState<number | null>(null);
  const [betAmount, setBetAmount] = useState(0.1);
  const [gameActive, setGameActive] = useState(false);
  const [lastResult, setLastResult] = useState<'win' | 'lose' | null>(null);
  const [streak, setStreak] = useState(0);

  if (!isAuthenticated) {
    return null;
  }

  const startGame = () => {
    if (balance < betAmount) {
      alert('Insufficient balance!');
      return;
    }
    const newNumber = Math.floor(Math.random() * 100) + 1;
    setCurrentNumber(newNumber);
    setGameActive(true);
    setLastResult(null);
  };

  const makeGuess = (guess: 'higher' | 'lower') => {
    if (!gameActive || currentNumber === null) return;

    const nextNumber = Math.floor(Math.random() * 100) + 1;
    let won = false;

    if (guess === 'higher' && nextNumber > currentNumber) {
      won = true;
    } else if (guess === 'lower' && nextNumber < currentNumber) {
      won = true;
    }

    if (won) {
      onBalanceUpdate(balance + betAmount * 0.95); // 95% payout
      setLastResult('win');
      setStreak(streak + 1);
    } else {
      onBalanceUpdate(balance - betAmount);
      setLastResult('lose');
      setStreak(0);
    }

    setCurrentNumber(nextNumber);
    setGameActive(false);
  };

  const resetGame = () => {
    setCurrentNumber(null);
    setGameActive(false);
    setLastResult(null);
  };

  return (
    <div className="bg-gradient-to-r from-[#1A1A1A] to-[#0B0B0B] rounded-xl p-6 border border-[#21C7E6]/30">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <Star className="text-[#FF6200]" size={24} />
          <h2 className="text-xl font-bold text-white">HI-LO Game</h2>
        </div>
        {streak > 0 && (
          <div className="flex items-center space-x-1 bg-[#FF6200]/20 px-3 py-1 rounded-full">
            <Star className="text-[#FF6200]" size={16} />
            <span className="text-[#FF6200] font-medium">{streak}x Streak</span>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <div className="mb-4">
            <label className="block text-[#E5E5E5] text-sm font-medium mb-2">
              Bet Amount (TRX)
            </label>
            <input
              type="number"
              step="0.01"
              min="0.01"
              max={balance}
              value={betAmount}
              onChange={(e) => setBetAmount(parseFloat(e.target.value) || 0.01)}
              className="w-full bg-[#0B0B0B]/50 border border-[#21C7E6]/20 rounded-lg px-3 py-2 text-white focus:border-[#21C7E6] focus:outline-none"
              disabled={gameActive}
            />
            <p className="text-xs text-[#A0A0A0] mt-1">Win chance: ~49% | Payout: x1.95</p>
          </div>

          {currentNumber !== null && (
            <div className="text-center mb-4">
              <div className="text-6xl font-bold text-[#21C7E6] mb-2">
                {currentNumber}
              </div>
              <p className="text-[#E5E5E5]">Current Number</p>
              {lastResult && (
                <div className={`text-sm font-medium mt-2 ${
                  lastResult === 'win' ? 'text-[#21C7E6]' : 'text-[#FF6200]'
                }`}>
                  {lastResult === 'win' ? '+' : '-'}{betAmount.toFixed(6)} TRX
                </div>
              )}
            </div>
          )}
        </div>

        <div>
          {!gameActive && currentNumber === null ? (
            <button
              onClick={startGame}
              className="w-full bg-gradient-to-r from-[#21C7E6] to-[#FF6200] hover:from-[#21C7E6]/80 hover:to-[#FF6200]/80 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[#21C7E6]/25 focus:outline-none focus:ring-2 focus:ring-[#21C7E6]/50"
              aria-label="Start Hi-Lo game"
            >
              Start Earning TRX Now
            </button>
          ) : gameActive ? (
            <div className="space-y-3">
              <p className="text-center text-[#E5E5E5] mb-4">
                Will the next number be higher or lower?
              </p>
              <button
                onClick={() => makeGuess('higher')}
                className="w-full bg-gradient-to-r from-[#21C7E6] to-[#21C7E6]/80 hover:from-[#21C7E6]/80 hover:to-[#21C7E6]/60 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[#21C7E6]/25 flex items-center justify-center space-x-2 focus:outline-none focus:ring-2 focus:ring-[#21C7E6]/50"
                aria-label="Guess higher number"
              >
                <TrendingUp size={20} />
                <span>Higher</span>
              </button>
              <button
                onClick={() => makeGuess('lower')}
                className="w-full bg-gradient-to-r from-[#FF6200] to-[#FF6200]/80 hover:from-[#FF6200]/80 hover:to-[#FF6200]/60 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[#FF6200]/25 flex items-center justify-center space-x-2 focus:outline-none focus:ring-2 focus:ring-[#FF6200]/50"
                aria-label="Guess lower number"
              >
                <TrendingDown size={20} />
                <span>Lower</span>
              </button>
            </div>
          ) : (
            <div className="space-y-3">
              <button
                onClick={startGame}
                className="w-full bg-gradient-to-r from-[#21C7E6] to-[#FF6200] hover:from-[#21C7E6]/80 hover:to-[#FF6200]/80 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[#21C7E6]/25 focus:outline-none focus:ring-2 focus:ring-[#21C7E6]/50"
              >
                Start Earning TRX Now
              </button>
              <button
                onClick={resetGame}
                className="w-full bg-[#1A1A1A] hover:bg-[#1A1A1A]/80 text-white font-medium py-2 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 border border-[#21C7E6]/20 focus:outline-none focus:ring-2 focus:ring-[#21C7E6]/50"
              >
                <RotateCcw size={16} />
                <span>Reset</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
