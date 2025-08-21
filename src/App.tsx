import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import BalanceDisplay from './components/BalanceDisplay';
import FaucetClaim from './components/FaucetClaim';
import StatsDisplay from './components/StatsDisplay';
import HiLoGame from './components/HiLoGame';
import AuthModal from './components/AuthModal';
import HiLoPopup from './components/HiLoPopup';
import PageContent from './components/PageContent';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [balance, setBalance] = useState(5.234567);
  const [canClaim, setCanClaim] = useState(true);
  const [timeLeft, setTimeLeft] = useState(0);
  const [authModal, setAuthModal] = useState<'login' | 'register' | null>(null);
  const [showHiLoPopup, setShowHiLoPopup] = useState(false);
  const [lastClaimAmount, setLastClaimAmount] = useState(0);

  const stats = {
    totalUsers: 45678,
    totalClaimed: 2345678,
    totalPayouts: 98765,
    avgClaimTime: '45 min',
  };

  // Countdown timer effect
  useEffect(() => {
    if (!canClaim && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && !canClaim) {
      setCanClaim(true);
    }
  }, [canClaim, timeLeft]);

  const handleClaim = () => {
    const claimAmount = Math.random() * (0.5 - 0.1) + 0.1; // Random between 0.1-0.5
    setBalance(balance + claimAmount);
    setLastClaimAmount(claimAmount);
    setCanClaim(false);
    setTimeLeft(3600); // 1 hour cooldown
  };

  const handleLogin = (email: string, password: string) => {
    // Mock login
    setIsAuthenticated(true);
    setAuthModal(null);
  };

  const handleRegister = (email: string, password: string, username: string) => {
    // Mock register
    setIsAuthenticated(true);
    setAuthModal(null);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCurrentPage('home');
  };

  const handlePlayHiLo = () => {
    setShowHiLoPopup(false);
    setCurrentPage('home'); // Stay on home where HI-LO game is visible
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0B0B0B] via-[#1A1A1A] to-[#0B0B0B]">
      <Navigation
        isAuthenticated={isAuthenticated}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        onLogin={() => setAuthModal('login')}
        onRegister={() => setAuthModal('register')}
        onLogout={handleLogout}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {currentPage === 'home' ? (
          <>
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-[#21C7E6] via-[#FF6200] to-[#21C7E6] bg-clip-text text-transparent mb-4">
                Free TRX Faucet
              </h1>
              <p className="text-xl text-[#E5E5E5] max-w-2xl mx-auto">
                Claim free TRX every hour, play games to multiply your rewards, and build your crypto portfolio
              </p>
            </div>

            <BalanceDisplay balance={balance} isAuthenticated={isAuthenticated} />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <FaucetClaim
                isAuthenticated={isAuthenticated}
                canClaim={canClaim}
                timeLeft={timeLeft}
                onClaim={handleClaim}
                onShowHiLoPopup={() => setShowHiLoPopup(true)}
              />
              
              {isAuthenticated && (
                <HiLoGame
                  isAuthenticated={isAuthenticated}
                  balance={balance}
                  onBalanceUpdate={setBalance}
                />
              )}
            </div>

            <StatsDisplay stats={stats} />
          </>
        ) : (
          <PageContent page={currentPage} />
        )}
      </div>

      <AuthModal
        isOpen={authModal !== null}
        type={authModal || 'login'}
        onClose={() => setAuthModal(null)}
        onSubmit={authModal === 'login' ? handleLogin : handleRegister}
      />

      <HiLoPopup
        isOpen={showHiLoPopup}
        onClose={() => setShowHiLoPopup(false)}
        onPlayNow={handlePlayHiLo}
        lastClaimAmount={lastClaimAmount}
      />
    </div>
  );
}

export default App;
