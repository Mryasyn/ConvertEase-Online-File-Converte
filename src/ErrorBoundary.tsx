import React from 'react';
import { useRouteError, Link } from 'react-router-dom';
import { Home, AlertTriangle } from 'lucide-react';

function ErrorBoundary() {
  const error = useRouteError() as Error;

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="max-w-md w-full bg-gray-800 rounded-xl p-8 text-center border border-gray-700">
        <AlertTriangle className="w-16 h-16 text-yellow-500 mx-auto mb-6" />
        <h1 className="text-2xl font-bold text-white mb-4">Oops! Something went wrong</h1>
        <p className="text-gray-300 mb-6">
          {error?.message || "We couldn't find the page you're looking for."}
        </p>
        <Link
          to="/"
          className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
        >
          <Home className="w-5 h-5 mr-2" />
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default ErrorBoundary;