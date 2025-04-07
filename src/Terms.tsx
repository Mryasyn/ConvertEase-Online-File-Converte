import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

function Terms() {
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

        <div className="max-w-3xl mx-auto bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-700">
          <h1 className="text-3xl font-bold text-white mb-6">Terms of Use</h1>
          
          <div className="space-y-6 text-gray-300">
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">1. Service Usage</h2>
              <p>By using our file conversion service, you agree to these terms and conditions. Our service allows you to convert files between different formats, subject to certain limitations and restrictions.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">2. File Size Limitations</h2>
              <p>Free accounts are limited to 1GB per file. For larger file sizes, please upgrade to one of our premium plans.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">3. Privacy & Security</h2>
              <p>We take your privacy seriously. All uploaded files are encrypted and automatically deleted after processing. We do not store or share your files with third parties.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">4. Acceptable Use</h2>
              <p>You agree not to use our service for any illegal purposes or to convert files that violate copyright laws or contain malicious content.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">5. Service Availability</h2>
              <p>While we strive to maintain high availability, we do not guarantee uninterrupted access to our service. We reserve the right to modify or discontinue the service at any time.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">6. Premium Features</h2>
              <p>Premium features are available through paid subscriptions. Subscription terms and features are subject to change with notice to users.</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Terms;