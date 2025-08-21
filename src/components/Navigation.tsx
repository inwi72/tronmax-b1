import React from 'react';
import { Home, Droplets, TrendingUp, BarChart3, LogIn, UserPlus, Menu, X } from 'lucide-react';

interface NavigationProps {
  isAuthenticated: boolean;
  currentPage: string;
  setCurrentPage: (page: string) => void;
  onLogin: () => void;
  onRegister: () => void;
  onLogout: () => void;
}

export default function Navigation({ 
  isAuthenticated, 
  currentPage, 
  setCurrentPage, 
  onLogin, 
  onRegister,
  onLogout 
}: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'faucet', label: 'Faucet', icon: Droplets },
    { id: 'staking', label: 'Staking', icon: TrendingUp },
    { id: 'support', label: 'Support', icon: BarChart3 },
  ];

  return (
    <nav className="bg-black/95 backdrop-blur-sm border-b border-[#21C7E6]/30 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-[#21C7E6] to-[#FF6200] bg-clip-text text-transparent">
                TRXFaucet
              </h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      if (item.id === 'faucet') {
                        onRegister();
                      } else {
                        setCurrentPage(item.id);
                      }
                    }}
                    className={`px-3 py-2 rounded-md text-sm font-medium flex items-center space-x-2 transition-colors ${
                      currentPage === item.id
                        ? 'bg-[#21C7E6]/20 text-[#21C7E6]'
                        : 'text-[#E5E5E5] hover:bg-[#1A1A1A] hover:text-white'
                    }`}
                  >
                    <Icon size={16} />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:block">
            <div className="ml-4 flex items-center space-x-4">
              {isAuthenticated ? (
                <button
                  onClick={onLogout}
                  className="bg-[#FF6200] hover:bg-[#FF6200]/80 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Logout
                </button>
              ) : (
                <>
                  <button
                    onClick={onLogin}
                    className="text-[#E5E5E5] hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center space-x-2 transition-colors"
                  >
                    <LogIn size={16} />
                    <span>Login</span>
                  </button>
                  <button
                    onClick={onRegister}
                    className="bg-gradient-to-r from-[#21C7E6] to-[#FF6200] hover:from-[#21C7E6]/80 hover:to-[#FF6200]/80 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    <UserPlus size={16} className="inline mr-2" />
                    Register
                  </button>
                </>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-[#E5E5E5] hover:text-white p-2"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-[#21C7E6]/30">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      if (item.id === 'faucet') {
                        onRegister();
                      } else {
                        setCurrentPage(item.id);
                      }
                      setIsMobileMenuOpen(false);
                    }}
                    className={`w-full text-left px-3 py-2 rounded-md text-base font-medium flex items-center space-x-2 transition-colors ${
                      currentPage === item.id
                        ? 'bg-[#21C7E6]/20 text-[#21C7E6]'
                        : 'text-[#E5E5E5] hover:bg-[#1A1A1A] hover:text-white'
                    }`}
                  >
                    <Icon size={16} />
                    <span>{item.label}</span>
                  </button>
                );
              })}
              <div className="pt-4 pb-2">
                {isAuthenticated ? (
                  <button
                    onClick={() => {
                      onLogout();
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full bg-[#FF6200] hover:bg-[#FF6200]/80 text-white px-3 py-2 rounded-md text-base font-medium transition-colors"
                  >
                    Logout
                  </button>
                ) : (
                  <div className="space-y-2">
                    <button
                      onClick={() => {
                        onLogin();
                        setIsMobileMenuOpen(false);
                      }}
                      className="w-full text-[#E5E5E5] hover:text-white px-3 py-2 rounded-md text-base font-medium flex items-center space-x-2 transition-colors"
                    >
                      <LogIn size={16} />
                      <span>Login</span>
                    </button>
                    <button
                      onClick={() => {
                        onRegister();
                        setIsMobileMenuOpen(false);
                      }}
                      className="w-full bg-gradient-to-r from-[#21C7E6] to-[#FF6200] hover:from-[#21C7E6]/80 hover:to-[#FF6200]/80 text-white px-3 py-2 rounded-md text-base font-medium transition-colors"
                    >
                      Register
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
