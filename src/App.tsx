import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Banner from './components/Banner';
import HeroSection from './components/HeroSection';
import UserOnboarding from './components/UserOnboarding';
import BalanceDisplay from './components/BalanceDisplay';
import FaucetClaim from './components/FaucetClaim';
import HiLoGame from './components/HiLoGame';
import AboutTronMax from './components/AboutTronMax';
import StatsDisplay from './components/StatsDisplay';
import PageContent from './components/PageContent';
import Footer from './components/Footer';
import AuthModal from './components/AuthModal';
import HiLoPopup from './components/HiLoPopup';

function App() {
  // Backend testing state
  const [backendMessage, setBackendMessage] = useState<string | null>(null);

  const testBackend = async () => {
    try {
      const response = await fetch("http://localhost:3001/faucet-test");
      const data = await response.json();
      setBackendMessage(data.message);
    } catch (err) {
      setBackendMessage("❌ Backend not reachable");
    }
  };

  // Existing app state
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [balance, setBalance] = useState(0);
  const [canClaim, setCanClaim] = useState(true);
  const [timeLeft, setTimeLeft] = useState(0);
  const [authModal, setAuthModal] = useState<{ isOpen: boolean; type: 'login' | 'register' }>({
    isOpen: false,
    type: 'login'
  });
  const [showHiLoPopup, setShowHiLoPopup] = useState(false);
  const [lastClaimAmount, setLastClaimAmount] = useState(0);

  const stats = {
    totalUsers: 45127,
    totalClaimed: 2847392,
    totalPayouts: 18493,
    avgClaimTime: '2.3s'
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (!canClaim && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            setCanClaim(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [canClaim, timeLeft]);

  const handleLogin = () => {
    setAuthModal({ isOpen: true, type: 'login' });
  };

  const handleRegister = () => {
    setAuthModal({ isOpen: true, type: 'register' });
  };

  const handleAuthSubmit = (email: string, password: string, username?: string) => {
    setIsAuthenticated(true);
    setBalance(0.125000);
    setAuthModal({ isOpen: false, type: 'login' });
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setBalance(0);
    setCanClaim(true);
    setTimeLeft(0);
    setCurrentPage('home');
  };

  const handleClaim = () => {
    const claimAmount = Math.random() * (0.5 - 0.1) + 0.1;
    setBalance(balance + claimAmount);
    setLastClaimAmount(claimAmount);
    setCanClaim(false);
    setTimeLeft(3600); // 1 hour in seconds
  };

  const handleBalanceUpdate = (newBalance: number) => {
    setBalance(newBalance);
  };

  const handleShowHiLoPopup = () => {
    setShowHiLoPopup(true);
  };

  const handlePlayHiLo = () => {
    setShowHiLoPopup(false);
    // Scroll to HiLo game section or focus on it
    const hiloSection = document.getElementById('hilo-game');
    if (hiloSection) {
      hiloSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0B0B] text-white">
      {/* Backend Test Section */}
      <div style={{ padding: "1rem", backgroundColor: "#1A1A1A", borderBottom: "1px solid #21C7E6" }}>
        <h2 style={{ color: "#21C7E6", marginBottom: "1rem" }}>Backend Connection Test</h2>
        <button
          onClick={testBackend}
          style={{
            padding: "0.5rem 1rem",
            fontSize: "1rem",
            background: "#21C7E6",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            marginRight: "1rem"
          }}
        >
          Test Backend
        </button>
        {backendMessage && (
          <span style={{ fontWeight: "bold", color: backendMessage.includes("❌") ? "#FF6200" : "#21C7E6" }}>
            {backendMessage}
          </span>
        )}
      </div>

      <Banner />
      <Navigation
        isAuthenticated={isAuthenticated}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        onLogin={handleLogin}
        onRegister={handleRegister}
        onLogout={handleLogout}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {currentPage === 'home' && (
          <>
            <HeroSection onRegister={handleRegister} />
            
            {!isAuthenticated && (
              <UserOnboarding onGetStarted={handleRegister} />
            )}

            <BalanceDisplay balance={balance} isAuthenticated={isAuthenticated} />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <FaucetClaim
                isAuthenticated={isAuthenticated}
                canClaim={canClaim}
                timeLeft={timeLeft}
                onClaim={handleClaim}
                onShowHiLoPopup={handleShowHiLoPopup}
              />
              <div id="hilo-game">
                <HiLoGame
                  isAuthenticated={isAuthenticated}
                  balance={balance}
                  onBalanceUpdate={handleBalanceUpdate}
                />
              </div>
            </div>

            <AboutTronMax />
            <StatsDisplay stats={stats} />
          </>
        )}

        {(currentPage === 'staking' || currentPage === 'support') && (
          <PageContent page={currentPage} />
        )}
      </main>

      <Footer />

      <AuthModal
        isOpen={authModal.isOpen}
        type={authModal.type}
        onClose={() => setAuthModal({ ...authModal, isOpen: false })}
        onSubmit={handleAuthSubmit}
        onSwitchType={(newType) => setAuthModal({ isOpen: true, type: newType })}
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
