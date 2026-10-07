'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { Check, ArrowUp } from 'lucide-react';
import { api } from '../../lib/api';

const InstagramIcon = ({ size = 18 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setErrorMsg('');
    setLoading(true);

    try {
      const res = await api.post('/newsletter/subscribe', { email: email.trim() });
      if (res.data.ok) {
        setSubscribed(true);
        setTimeout(() => {
          setSubscribed(false);
          setEmail('');
        }, 4000);
      }
    } catch (err: any) {
      setErrorMsg(err.response?.data?.error || 'Failed to subscribe. Please try again.');
      setTimeout(() => {
        setErrorMsg('');
      }, 4000);
    } finally {
      setLoading(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#ffffff] text-[#111111] pt-16 pb-12 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <span className="font-bebas text-3xl tracking-wider text-[#111111]">FITFAM</span>
            </Link>
            <p className="font-sans text-xs text-[#555555] leading-relaxed max-w-sm mb-6 uppercase tracking-wider">
              Engineered for the relentless. Premium gymwear and lifestyle apparel built for supreme comfort, durability, and aesthetics.
            </p>
            <div className="flex gap-4 items-center">
              <button
                onClick={scrollToTop}
                className="flex items-center gap-2 text-xs font-chakra font-bold tracking-widest text-[#111111] hover:text-black uppercase group"
              >
                Back to top
                <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5" />
              </button>
            </div>
          </div>

          {/* Col 2: Shop */}
          <div>
            <h4 className="font-bebas text-lg tracking-wider text-[#111111] mb-4">SHOP</h4>
            <ul className="space-y-2.5 font-chakra text-xs tracking-wider uppercase">
              <li>
                <Link href="/category/men" className="text-[#555] hover:text-[#111] transition-colors">
                  Men's Collection
                </Link>
              </li>
              <li>
                <Link href="/category/women" className="text-[#555] hover:text-[#111] transition-colors">
                  Women's Collection
                </Link>
              </li>
              <li>
                <Link href="/category/accessories" className="text-[#555] hover:text-[#111] transition-colors">
                  Accessories
                </Link>
              </li>
              <li>
                <Link href="/shop" className="text-[#555] hover:text-[#111] transition-colors">
                  All Products
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Support */}
          <div>
            <h4 className="font-bebas text-lg tracking-wider text-[#111111] mb-4">HELP & SUPPORT</h4>
            <ul className="space-y-2.5 font-chakra text-xs tracking-wider uppercase">
              <li>
                <Link href="/about" className="text-[#555] hover:text-[#111] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-[#555] hover:text-[#111] transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-[#555] hover:text-[#111] transition-colors">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[#555] hover:text-[#111] transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Stay Connected / Newsletter */}
          <div>
            <h4 className="font-bebas text-lg tracking-wider text-[#111111] mb-4">STAY CONNECTED</h4>
            <p className="font-sans text-xs text-[#555] mb-4 tracking-wide leading-relaxed">
              Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
              <div className="flex">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="bg-gray-50 border border-gray-200 text-xs px-3 py-2 text-[#111] placeholder-gray-400 focus:outline-none focus:border-black flex-1 rounded-l-none"
                />
                <button
                  type="submit"
                  disabled={loading || subscribed}
                  className="bg-[#111] text-white font-chakra text-xs font-bold px-4 py-2 hover:bg-black transition-colors uppercase tracking-wider disabled:opacity-50 flex items-center justify-center"
                >
                  {loading ? '...' : subscribed ? <Check className="w-4 h-4 text-green-400" /> : 'JOIN'}
                </button>
              </div>
              {errorMsg && <p className="text-[11px] text-red-500">{errorMsg}</p>}
              {subscribed && <p className="text-[11px] text-green-600 font-semibold">Thank you for subscribing!</p>}
            </form>
            <div className="mt-6">
              <div className="mb-2">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#555] hover:text-[#111] transition-colors inline-block"
                >
                  <InstagramIcon size={18} />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] font-chakra text-[#777] uppercase tracking-wider">
          <p>&copy; {new Date().getFullYear()} FITFAM APPAREL. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-[#111] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-[#111] transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
};