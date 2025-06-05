import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css'; // Ensure you have your CSS file imported

import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import Collections from './pages/Collections';
import App from './App';
import Profile from './pages/Profile';
import Bag from './pages/Bag';
import Wishlist from './pages/Wishlist';
import CollectionDetail from './pages/CollectionDetail';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/collections",
        element: <Collections />
      },
      {
        path: "/collections/:slug",
        element: <CollectionDetail />
      },
      {
        path: "/wishlist",
        element: <Wishlist />
      },
      {
        path: "/profile",
        element: <Profile />
      },
      {
        path: "/bag",
        element: <Bag />
      },
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </StrictMode>
);