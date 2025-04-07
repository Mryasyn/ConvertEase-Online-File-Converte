import React from 'react';
import { Check, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PricingTier {
  name: string;
  price: string;
  period: string;
  popular?: boolean;
  features: string[];
  conversionMinutes: string;
  maxFileSize: string;
  priority: string;
}

const pricingTiers: PricingTier[] = [
  {
    name: 'Basic',
    price: '$12.99',
    period: '/Month (cancel any time)',
    features: ['100% Money Back Guarantee'],
    conversionMinutes: '1,500 conversion minutes/month',
    maxFileSize: '1.5 GB maximum file size',
    priority: 'High priority',
  },
  {
    name: 'Standard',
    price: '$24.99',
    period: '/Month (cancel any time)',
    features: ['100% Money Back Guarantee'],
    conversionMinutes: '2,000 conversion minutes/month',
    maxFileSize: '2 GB maximum file size',
    priority: 'Highest priority',
  },
  {
    name: 'Pro',
    price: '$29.99',
    period: '/Month (cancel any time)',
    popular: true,
    features: ['100% Money Back Guarantee'],
    conversionMinutes: '4,000 conversion minutes/month',
    maxFileSize: '5 GB maximum file size',
    priority: 'Highest priority',
  },
  {
    name: 'Scale',
    price: 'On-Demand',
    period: 'Best Value for Power Users',
    features: ['100% Money Back Guarantee'],
    conversionMinutes: 'Up to 1M conversion mins/month',
    maxFileSize: 'Up to 20 GB max file size',
    priority: 'Highest priority',
  },
];

function Pricing() {
  return (
    <div className="min-h-screen bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center text-indigo-400 hover:text-indigo-300 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Converter
          </Link>
        </div>

        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">Convert more for less</h1>
          <p className="text-xl text-gray-300">Quickly convert large files in blazing fast speeds.</p>
          
          <div className="mt-8 inline-flex items-center bg-gray-800 rounded-lg p-1">
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-md">Monthly</button>
            <button className="px-4 py-2 text-gray-300 hover:text-white">Yearly</button>
          </div>
          
          <div className="mt-4 text-indigo-400">
            Get 2 months free 🤩
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {pricingTiers.map((tier) => (
            <div
              key={tier.name}
              className={`bg-gray-800 rounded-xl p-6 border ${
                tier.popular ? 'border-indigo-500' : 'border-gray-700'
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-semibold text-white">{tier.name}</h3>
                {tier.popular && (
                  <span className="px-2 py-1 text-xs font-semibold text-white bg-indigo-500 rounded-full">
                    POPULAR
                  </span>
                )}
              </div>

              <div className="mb-4">
                <div className="text-3xl font-bold text-white">{tier.price}</div>
                <div className="text-sm text-gray-400">{tier.period}</div>
              </div>

              <button className="w-full py-2 px-4 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-colors mb-6">
                Get Started
              </button>

              <ul className="space-y-4">
                <li className="flex items-center text-gray-300">
                  <Check className="w-5 h-5 text-green-500 mr-2" />
                  {tier.conversionMinutes}
                </li>
                <li className="flex items-center text-gray-300">
                  <Check className="w-5 h-5 text-green-500 mr-2" />
                  {tier.maxFileSize}
                </li>
                <li className="flex items-center text-gray-300">
                  <Check className="w-5 h-5 text-green-500 mr-2" />
                  {tier.priority}
                </li>
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 text-green-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Pricing;