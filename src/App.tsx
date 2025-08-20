import React from "react";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white font-sans">
      {/* 🔻 Optional Banner */}
      <div className="bg-red-600 text-center py-2 text-sm font-medium">
        🚀 Limited Time Offer: Earn free TRX every hour!
      </div>

      {/* 🎯 Hero Section */}
      <header className="flex flex-col items-center justify-center flex-1 px-6 py-16 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
          Win Free <span className="text-red-500">TRX</span> Every Hour
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-8">
          Join <span className="text-red-500 font-semibold">TronMax</span> and start claiming TRX instantly. 
          Simple, secure, and rewarding. Your TRX journey begins here.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row gap-4">
          <a
            href="/register"
            className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg text-lg font-semibold transition"
          >
            Get Started
          </a>
          <a
            href="/faucet"
            className="bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-lg text-lg font-semibold transition"
          >
            Try Faucet
          </a>
        </div>

        {/* Placeholder for Character/Illustration */}
        <div className="mt-12">
          <img
            src="/tron-character.png"
            alt="TRX Mascot"
            className="w-72 mx-auto drop-shadow-lg"
          />
        </div>
      </header>

      {/* 🔻 Secondary CTA Section */}
      <section className="bg-gray-900 py-12 px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Don’t miss out on daily rewards!
        </h2>
        <p className="text-gray-400 mb-6">
          Register today and unlock exclusive bonuses, faster payouts, and referral earnings.
        </p>
        <a
          href="/register"
          className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg text-lg font-semibold transition"
        >
          Create Free Account
        </a>
      </section>

      {/* 📑 Footer */}
      <footer className="bg-black py-6 text-center text-sm text-gray-500 border-t border-gray-800">
        <div className="flex justify-center gap-6 mb-3">
          <a href="/about" className="hover:text-red-500">About</a>
          <a href="/terms" className="hover:text-red-500">Terms</a>
          <a href="/privacy" className="hover:text-red-500">Privacy</a>
          <a href="/contact" className="hover:text-red-500">Contact</a>
        </div>
        <p>© {new Date().getFullYear()} TronMax. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
