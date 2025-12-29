"use client";
import React from 'react';
import { usePaystackPayment } from 'react-paystack';
import { CreditCard, CheckCircle } from 'lucide-react';
import axios from 'axios';

const DUES_AMOUNT = 10000; // ₦10,000 for example

export default function DuesPayment({ userEmail, userId }: { userEmail: string, userId: string }) {
  const config = {
    reference: `FGCW06_${new Date().getTime()}`,
    email: userEmail,
    amount: DUES_AMOUNT * 100, // Paystack works in Kobo
    publicKey: process.env.NEXT_PUBLIC_PAYSTACK_KEY!,
  };

  const initializePayment = usePaystackPayment(config);

  const onSuccess = async (reference: any) => {
    try {
      // 1. Verify on backend immediately after popup closes
      await axios.post('/api/payments/verify', {
        reference: reference.reference,
        amount: DUES_AMOUNT,
        userId: userId
      }, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      alert("Payment Successful! Your status is now 'Financial'.");
      window.location.reload();
    } catch (err) {
      console.error("Verification failed", err);
    }
  };

  return (
    <div className="bg-green-50 border border-green-200 p-6 rounded-2xl flex flex-col items-center">
      <div className="w-12 h-12 bg-[#006837] rounded-full flex items-center justify-center text-white mb-4">
        <CreditCard size={24} />
      </div>
      <h3 className="text-lg font-bold text-gray-900">Annual Membership Dues</h3>
      <p className="text-3xl font-black text-[#006837] my-2">₦10,000</p>
      <p className="text-xs text-gray-500 mb-6 text-center">Securely processed via Paystack</p>
      
      <button 
        onClick={() => initializePayment({ onSuccess, onClose: () => alert("Payment cancelled") })}
        className="w-full bg-[#006837] text-white py-3 rounded-xl font-bold hover:bg-green-800 transition-all shadow-lg shadow-green-100"
      >
        Pay Now
      </button>
    </div>
  );
}