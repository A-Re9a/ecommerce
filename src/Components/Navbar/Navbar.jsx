import { Link } from 'react-router-dom';
import SearchInput from '../SearchInput/SearchInput';
import { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const { logout, isLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };
  return (
    <nav className="flex flex-col md:flex-row justify-between items-center gap-4 p-4 bg-red-800 text-white shadow-md">
      <h1 className="text-lg font-bold">Ecommerce</h1>
      <div className="flex items-center gap-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/shop" className="hover:underline">Shop</Link>
        <Link to="/cart" className="hover:underline">Cart</Link>
        {isLoggedIn && (
          <button onClick={handleLogout} className="text-red-500 font-medium">
            Logout
          </button>
        )}
      </div>

      <div className="w-full md:w-1/3">
        <SearchInput />
      </div>
    </nav>
  );
}
