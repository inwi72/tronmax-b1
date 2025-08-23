import React, { useState } from 'react';
import { X, Mail, Lock, User } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  type: 'login' | 'register';
  onClose: () => void;
  onSubmit: (email: string, password: string, username?: string) => void;
}

interface AuthModalProps {
  isOpen: boolean;
  type: 'login' | 'register';
  onClose: () => void;
  onSubmit: (email: string, password: string, username?: string) => void;
  onSwitchType: (newType: 'login' | 'register') => void;
}

export default function AuthModal({ isOpen, type, onClose, onSubmit, onSwitchType }: AuthModalProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(email, password, type === 'register' ? username : undefined);
    setEmail('');
    setPassword('');
    setUsername('');
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-[#1A1A1A] rounded-xl p-6 w-full max-w-md border border-[#21C7E6]/30">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white">
            {type === 'login' ? 'Login' : 'Register'}
          </h2>
          <button
            onClick={onClose}
             className="text-[#A0A0A0] hover:text-white transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {type === 'register' && (
            <div>
              <label className="block text-[#E5E5E5] text-sm font-medium mb-2">
                Username
              </label>
              <div className="relative">
                <User className="absolute left-3 top-3 text-[#A0A0A0]" size={20} />
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full bg-[#0B0B0B]/50 border border-[#21C7E6]/20 rounded-lg pl-10 pr-3 py-2 text-white focus:border-[#21C7E6] focus:outline-none"
                  placeholder="Enter your username"
                  required
                />
              </div>
            </div>
          )}

          <div>
            <label className="block text-[#E5E5E5] text-sm font-medium mb-2">
              Email
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 text-[#A0A0A0]" size={20} />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-[#0B0B0B]/50 border border-[#21C7E6]/20 rounded-lg pl-10 pr-3 py-2 text-white focus:border-[#21C7E6] focus:outline-none"
                placeholder="Enter your email"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-[#E5E5E5] text-sm font-medium mb-2">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 text-[#A0A0A0]" size={20} />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-[#0B0B0B]/50 border border-[#21C7E6]/20 rounded-lg pl-10 pr-3 py-2 text-white focus:border-[#21C7E6] focus:outline-none"
                placeholder="Enter your password"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#21C7E6] to-[#FF6200] hover:from-[#21C7E6]/80 hover:to-[#FF6200]/80 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[#21C7E6]/25 focus:outline-none focus:ring-2 focus:ring-[#21C7E6]/50"
          >
            {type === 'login' ? 'Login' : 'Create Account'}
          </button>
        </form>

        <div className="mt-4 text-center">
          <p className="text-[#A0A0A0] text-sm">
            {type === 'login' ? "Don't have an account? " : 'Already have an account? '}
            <a
              href={type === 'login' ? '/register' : '/login'}
              onClick={(e) => {
                e.preventDefault();
                onSwitchType(type === 'login' ? 'register' : 'login');
              }}
              className="text-[#21C7E6] hover:text-[#21C7E6]/80 font-medium"
            >
              {type === 'login' ? 'Sign Up' : 'Sign In'}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
