import React from "react";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-950 text-white font-sans">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-24 px-6 bg-gradient-to-b from-gray-900 to-black">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
          Win Free TRX Every Hour
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-8">
          Join TronMax and start earning TRX effortlessly. Claim rewards, stake
          for higher profits, and explore fun games like Dice.
        </p>
        <div className="flex space-x-4">
          <a
            href="/register"
            className="px-6 py-3 rounded-2xl bg-red-600 hover:bg-red-700 transition shadow-lg"
          >
            Get Started
          </a>
          <a
            href="/faucet"
            className="px-6 py-3 rounded-2xl border border-red-600 hover:bg-red-600 transition shadow-lg"
          >
            Try Faucet
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 grid gap-12 md:grid-cols-3 text-center">
        <div className="p-6 rounded-2xl bg-gray-900 shadow-md hover:shadow-red-600/40 transition">
          <h2 className="text-xl font-semibold mb-4">🚀 Free Faucet</h2>
          <p className="text-gray-400">
            Claim free TRX every hour with our secure faucet system powered by
            ReCAPTCHA.
          </p>
        </div>
        <div className="p-6 rounded-2xl bg-gray-900 shadow-md hover:shadow-red-600/40 transition">
          <h2 className="text-xl font-semibold mb-4">💎 Staking</h2>
          <p className="text-gray-400">
            Stake your TRX and enjoy daily profits with transparent and
            automated payouts.
          </p>
        </div>
        <div className="p-6 rounded-2xl bg-gray-900 shadow-md hover:shadow-red-600/40 transition">
          <h2 className="text-xl font-semibold mb-4">🎲 Dice Game</h2>
          <p className="text-gray-400">
            Double your fun! Play our simple high/low dice game for extra TRX
            rewards.
          </p>
        </div>
      </section>

      {/* Call To Action */}
      <section className="text-center py-16 px-6 bg-gradient-to-r from-red-700 to-red-500">
        <h2 className="text-3xl font-bold mb-4">Start Earning TRX Today!</h2>
        <p className="text-gray-200 mb-6">
          Sign up now and join thousands of users already earning with TronMax.
        </p>
        <a
          href="/register"
          className="px-8 py-3 bg-black rounded-2xl hover:bg-gray-900 transition shadow-lg"
        >
          Create Account
        </a>
      </section>

      {/* Footer */}
      <footer className="mt-auto py-8 bg-black text-gray-400 text-sm">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-6">
          <p>© {new Date().getFullYear()} TronMax. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="/about" className="hover:text-white transition">
              About
            </a>
            <a href="/terms" className="hover:text-white transition">
              Terms
            </a>
            <a href="/privacy" className="hover:text-white transition">
              Privacy
            </a>
            <a href="/contact" className="hover:text-white transition">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
