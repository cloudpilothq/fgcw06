"use client";
import React, { useState } from 'react';
import { Heart, ShieldCheck, Award } from 'lucide-react';
// import { createDonation } from '@/actions/donation';

export default function DonatePage() {
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");
  const [processing, setProcessing] = useState(false);

  const tiers = [
    { name: "Associate", min: "50,000", desc: "For recent graduates (last 5 years)." },
    { name: "Partner", min: "250,000", desc: "Standard Investors Circle entry level." },
    { name: "Visionary", min: "1,000,000", desc: "Top-tier champions of the FGCW 06 legacy." }
  ];

  const handlePaystack = async () => {
    if (!amount || parseFloat(amount) < 100) {
      alert('Please enter a valid amount (minimum ₦100)');
      return;
    }

    setProcessing(true);
    
    // In a real implementation, you would:
    // 1. Initialize Paystack payment
    // 2. On successful payment, call createDonation
    // For now, we'll simulate the flow:
    
    try {
      // Simulate Paystack payment success
      // const result = await createDonation(parseFloat(amount), message || undefined);
      const result = { success: true };
      
      if (result.success) {
        alert(`Thank you for your donation of ₦${amount}!`);
        setAmount("");
        setMessage("");
      } else {
        alert('Failed to record donation. Please try again.');
      }
    } catch (error) {
      console.error('Donation error:', error);
      alert('An error occurred. Please try again.');
    } finally {
      setProcessing(false);
    }
  };

  return (
    <main className="bg-white min-h-screen">
      {/* Header */}
      <div className="bg-[#006837] text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-serif font-bold mb-6">Invest in Excellence</h1>
          <p className="text-xl text-green-50 font-light">
            Your contributions provide scholarships, infrastructure support, and 
            professional development for the FGCW community.
          </p>
        </div>
      </div>

      <section className="max-w-7xl mx-auto px-4 py-20 grid lg:grid-cols-3 gap-12">
        {/* Donation Tiers */}
        <div className="lg:col-span-2 space-y-8">
          <h2 className="text-3xl font-serif font-bold border-b-4 border-yellow-400 inline-block pb-2">
            Giving Tiers
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {tiers.map((tier) => (
              <div key={tier.name} className="border-2 border-gray-100 p-6 flex flex-col hover:border-[#006837] transition-colors cursor-pointer" onClick={() => setAmount(tier.min.replace(/,/g, ""))}>
                <Award className="text-yellow-500 mb-4" size={32} />
                <h3 className="font-bold text-xl mb-2">{tier.name}</h3>
                <p className="text-[#006837] font-black text-lg mb-4">₦{tier.min}+</p>
                <p className="text-sm text-gray-500 flex-grow">{tier.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 p-8 border border-gray-200">
            <label className="block text-sm font-black uppercase tracking-widest text-gray-500 mb-4">Custom Amount (NGN)</label>
            <input 
              type="number" 
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full text-4xl font-serif font-bold bg-transparent border-b-2 border-gray-300 outline-none focus:border-[#006837] pb-2 mb-4"
              placeholder="0.00"
            />
            
            <label className="block text-sm font-black uppercase tracking-widest text-gray-500 mb-2 mt-6">Message (Optional)</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={3}
              className="w-full p-3 border border-gray-300 rounded-lg outline-none focus:border-[#006837] mb-8"
              placeholder="Leave a message with your donation..."
            />
            
            <button 
              onClick={handlePaystack}
              disabled={processing}
              className="w-full bg-[#006837] text-white py-5 font-bold uppercase tracking-[.2em] hover:bg-green-800 transition-colors disabled:bg-gray-400"
            >
              {processing ? 'Processing...' : 'Complete Donation'}
            </button>
          </div>
        </div>

        {/* Impact Sidebar */}
        <div className="bg-white border border-gray-200 p-8 self-start">
          <h3 className="text-xl font-serif font-bold mb-6">Your Impact</h3>
          <ul className="space-y-6">
            <li className="flex gap-4">
              <ShieldCheck className="text-[#006837] shrink-0" />
              <p className="text-sm text-gray-600"><strong>100% Transparency:</strong> Annual audits shared with all Investors Circle members.</p>
            </li>
            <li className="flex gap-4">
              <Heart className="text-[#006837] shrink-0" />
              <p className="text-sm text-gray-600"><strong>Legacy Projects:</strong> Direct funding for FGC Warri library and lab upgrades.</p>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}