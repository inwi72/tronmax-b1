import React from 'react';
import { TrendingUp, BarChart3, Shield, Zap, HelpCircle, Mail, Send } from 'lucide-react';

interface PageContentProps {
  page: string;
}

export default function PageContent({ page }: PageContentProps) {
  const [contactForm, setContactForm] = React.useState({
    name: '',
    email: '',
    reason: '',
    message: ''
  });

  const [expandedFaq, setExpandedFaq] = React.useState<number | null>(null);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('Message sent! We will get back to you soon.');
    setContactForm({ name: '', email: '', reason: '', message: '' });
  };

  const faqItems = [
    {
      question: "How often can I claim free TRX?",
      answer: "You can claim free TRX every hour. After each claim, there's a 60-minute cooldown period before you can claim again."
    },
    {
      question: "Is TonMax secure and legitimate?",
      answer: "Yes, TonMax uses industry-standard security measures. All games are provably fair, and we have processed thousands of payouts to our users."
    },
    {
      question: "How do TRX payouts work?",
      answer: "Payouts are instant and sent directly to your account balance. You can withdraw your TRX at any time once you reach the minimum withdrawal threshold."
    },
    {
      question: "Are the games fair?",
      answer: "All our games use provably fair algorithms. You can verify the fairness of each game result using cryptographic methods."
    },
    {
      question: "How does the referral program work?",
      answer: "Share your referral link with friends. When they sign up and start playing, you earn a commission from their activities. The more active referrals, the more you earn!"
    }
  ];

  if (page === 'staking') {
    return (
      <div className="space-y-6">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-4">TRX Staking</h1>
          <p className="text-slate-300">Stake your TRX and earn passive rewards</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-r from-[#1A1A1A] to-[#0B0B0B] rounded-xl p-6 border border-[#21C7E6]/20">
            <div className="flex items-center space-x-2 mb-4">
              <TrendingUp className="text-[#21C7E6]" size={24} />
              <h2 className="text-xl font-bold text-white">Flexible Staking</h2>
            </div>
            <div className="space-y-3">
              <div className="text-2xl font-bold text-[#21C7E6]">8.5% APY</div>
              <div className="text-[#E5E5E5]">No lock-up period</div>
              <div className="text-[#E5E5E5]">Withdraw anytime</div>
              <button className="w-full bg-[#21C7E6] hover:bg-[#21C7E6]/80 text-white font-bold py-2 px-4 rounded-lg transition-colors">
                Stake Now
              </button>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-[#1A1A1A] to-[#0B0B0B] rounded-xl p-6 border border-[#21C7E6]/20">
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="text-[#FF6200]" size={24} />
              <h2 className="text-xl font-bold text-white">Fixed Staking</h2>
            </div>
            <div className="space-y-3">
              <div className="text-2xl font-bold text-[#FF6200]">15% APY</div>
              <div className="text-[#E5E5E5]">30-day lock period</div>
              <div className="text-[#E5E5E5]">Higher rewards</div>
              <button className="w-full bg-[#FF6200] hover:bg-[#FF6200]/80 text-white font-bold py-2 px-4 rounded-lg transition-colors">
                Stake Now
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (page === 'support') {
    return (
      <div className="space-y-6">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-4">Support Center</h1>
          <p className="text-[#E5E5E5]">Find answers to common questions or contact us for help</p>
        </div>
        
        {/* FAQ Section */}
        <div className="bg-gradient-to-r from-[#1A1A1A] to-[#0B0B0B] rounded-xl p-6 border border-[#21C7E6]/30 mb-8">
          <div className="flex items-center space-x-2 mb-6">
            <HelpCircle className="text-[#21C7E6]" size={24} />
            <h2 className="text-2xl font-bold text-white">Frequently Asked Questions</h2>
          </div>
          
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div key={index} className="border border-[#21C7E6]/20 rounded-lg">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full text-left p-4 hover:bg-[#0B0B0B]/50 transition-colors flex justify-between items-center"
                >
                  <span className="text-white font-medium">{item.question}</span>
                  <span className="text-[#21C7E6]">{expandedFaq === index ? '−' : '+'}</span>
                </button>
                {expandedFaq === index && (
                  <div className="px-4 pb-4">
                    <p className="text-[#E5E5E5]">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-gradient-to-r from-[#1A1A1A] to-[#0B0B0B] rounded-xl p-6 border border-[#21C7E6]/30">
          <div className="flex items-center space-x-2 mb-6">
            <Mail className="text-[#FF6200]" size={24} />
            <h2 className="text-2xl font-bold text-white">Contact Us</h2>
          </div>
          
          <p className="text-[#E5E5E5] mb-6">
            Is your issue unrelated to any of the questions above? Contact us so we can help you!
          </p>

          <form onSubmit={handleContactSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-[#E5E5E5] text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  value={contactForm.name}
                  onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                  className="w-full bg-[#0B0B0B]/50 border border-[#21C7E6]/20 rounded-lg px-3 py-2 text-white focus:border-[#21C7E6] focus:outline-none"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label className="block text-[#E5E5E5] text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={contactForm.email}
                  onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                  className="w-full bg-[#0B0B0B]/50 border border-[#21C7E6]/20 rounded-lg px-3 py-2 text-white focus:border-[#21C7E6] focus:outline-none"
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>
            
            <div>
              <label className="block text-[#E5E5E5] text-sm font-medium mb-2">
                Reason
              </label>
              <select
                value={contactForm.reason}
                onChange={(e) => setContactForm({...contactForm, reason: e.target.value})}
                className="w-full bg-[#0B0B0B]/50 border border-[#21C7E6]/20 rounded-lg px-3 py-2 text-white focus:border-[#21C7E6] focus:outline-none"
                required
              >
                <option value="">Select a reason</option>
                <option value="technical">Technical Issue</option>
                <option value="payment">Payment Problem</option>
                <option value="account">Account Issue</option>
                <option value="general">General Inquiry</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-[#E5E5E5] text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                value={contactForm.message}
                onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                className="w-full bg-[#0B0B0B]/50 border border-[#21C7E6]/20 rounded-lg px-3 py-2 text-white focus:border-[#21C7E6] focus:outline-none h-32 resize-none"
                placeholder="Describe your issue or question..."
                required
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#21C7E6] to-[#FF6200] hover:from-[#21C7E6]/80 hover:to-[#FF6200]/80 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[#21C7E6]/25 flex items-center justify-center space-x-2"
            >
              <Send size={20} />
              <span>Send Message</span>
            </button>
          </form>
  return null;
}
