import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.tsx';
import Pricing from './Pricing.tsx';
import Terms from './Terms.tsx';
import ErrorBoundary from './ErrorBoundary.tsx';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: '/pricing',
    element: <Pricing />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: '/terms',
    element: <Terms />,
    errorElement: <ErrorBoundary />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);