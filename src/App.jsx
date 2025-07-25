import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import SearchResults from './pages/SearchResults/SearchResults';
import ProductContextProvider from './Contexts/productContexts';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import CategoriesProvider from './Contexts/CategoriesContext';
import Shop from './pages/Shop/Shop';
import PaginatedProductsProvider from './Contexts/PaginatedProductsContext';
import Cart from './pages/Cart/Cart';
import CartProvider from './Contexts/CartContext';
import { Toaster } from 'react-hot-toast';
import AuthProvider from './Contexts/AuthContext';
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute';
import CheckOut from './pages/Checkout/CheckOut';
import Contact from './pages/Contact/Contact';
const router = createBrowserRouter(
  [
    {
      path: '',
      element: <Layout />,
      children: [
        { index: true, element: <ProtectedRoute><Home /></ProtectedRoute> },
        { path: 'login', element: <Login /> },
        { path: 'register', element: <Register /> },
        { path: 'product/:id', element: <ProtectedRoute><ProductDetails /></ProtectedRoute> },
        { path: 'search', element: <ProtectedRoute><SearchResults /></ProtectedRoute> },
        { path: 'shop', element: <ProtectedRoute><Shop /></ProtectedRoute> },
        { path: 'cart', element: <ProtectedRoute><Cart /></ProtectedRoute> },
        { path: 'contact', element: <ProtectedRoute><Contact /></ProtectedRoute> },
        { path: 'checkout', element: <ProtectedRoute><CheckOut /></ProtectedRoute> },
      ],
    },
  ],
  {
    basename: '/ecommerce', 
  }
);


const queryClient = new QueryClient();

function App() {
  
  return (
<QueryClientProvider client={queryClient}>
  <AuthProvider>
    <CategoriesProvider>
      <CartProvider>
        <ProductContextProvider>
          <PaginatedProductsProvider>
            <RouterProvider router={router} />
          </PaginatedProductsProvider>
        </ProductContextProvider>
      </CartProvider>
    </CategoriesProvider>
    <Toaster position="top-right" reverseOrder={false} />
  </AuthProvider>
</QueryClientProvider>
  );
}

export default App;
