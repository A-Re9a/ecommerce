import { Link } from 'react-router-dom';
import SearchInput from '../SearchInput/SearchInput';
import { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../Contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import logo from "../../assets/Link - Bacola Store.png";
import { CategoriesContext } from '../../Contexts/CategoriesContext';
import { CartContext } from '../../Contexts/CartContext';
import { ShoppingBag } from "lucide-react";

export default function Navbar() {
  const { logout, isLoggedIn } = useContext(AuthContext);
  const { categories } = useContext(CategoriesContext);
  const { cartItems, totalPrice } = useContext(CartContext);
  const navigate = useNavigate();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [ListOpen, setListOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 65);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`transition-all duration-500 ease-in-out fixed top-0 left-0 right-0 z-20 
        ${isScrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'}
        flex flex-col justify-between items-center m-auto lg:gap-4 gap-3 lg:p-0 p-2 bg-white shadow-md`}
      >
        <div className='bg-[#35AFA0] text-center w-full px-0 hidden lg:block'>
          <p className='text-white'>
            Due to current circumstances, there may be slight delays in order processing
          </p>
        </div>

        <div className='lg:flex hidden lg:flex-row flex-col w-full justify-between items-center m-auto lg:px-16 shadow-sm'>
          <div className="flex lg:flex-row lg:py-4 gap-2 items-center justify-between m-auto">
            <Link to="/about"><h3 className='text-gray-600 text-base'>About Us</h3></Link>
            <h3 className='text-gray-600 text-base'>Compare</h3>
            <h3 className='text-gray-600 text-base'>Wishlist</h3>
          </div>

          <div className="flex lg:flex-row gap-2.5 items-center justify-between m-auto">
            <div className='relative'>
              <i className="fa-regular fa-hand text-gray-600 text-3xl" />
              <i className="fas fa-shield-alt text-gray-600 absolute top-3.5 left-4" />
            </div>
            <p className='text-gray-600'>
              100% Secure delivery without contacting the courier
            </p>
          </div>

          <div>
            <p className="text-gray-600">
              Need help? Call Us:
              <Link to="tel:+0020500" className="text-green-700 text-lg font-medium hover:underline">
                8 800 555-55
              </Link>
            </p>
          </div>

          <div className="flex text-sm text-gray-700 gap-1.5 items-center justify-between m-auto">
            <span>English</span>
            <span>USD</span>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row w-full justify-between items-center m-auto lg:px-16 px-4">
          <div className="flex lg:w-5/6 justify-between items-center m-auto">
            <div className='lg:w-1/6'>
              <Link to="/">
                <img src={logo} alt="Bacola Store Logo" />
              </Link>
            </div>
            <div className='lg:w-5/6 lg:me-4'>
              <SearchInput />
            </div>
          </div>

          <div className='flex justify-center items-center gap-4 lg:w-1/6'>
            <i className="fa-regular fa-circle-user text-black text-xl" />
            <h3 className='text-black'>${totalPrice.toFixed(2)}</h3>
            <Link to="/cart">
              <div className="relative w-9 h-9 flex items-center justify-center bg-red-100 rounded-full">
                <ShoppingBag className="w-4 h-4 text-red-500" />
                <div className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4 bg-red-600 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                  {cartItems.length}
                </div>
              </div>
            </Link>
          </div>
        </div>

        <div className="flex justify-between items-center m-auto w-full lg:px-16 pb-4">
          <div className="relative inline-block text-center lg:w-1/4 w-1/2">
            <button
              onClick={() => setIsOpen(true)}
              className="bg-teal-500 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              ALL CATEGORIES
            </button>
            {isOpen && (
              <div className="absolute mt-2 bg-white shadow-lg rounded-md w-48 z-10 max-h-80 overflow-y-auto">
                <ul className="p-2 space-y-2">
                  {categories.map((category) => (
                    <li
                      key={category.id}
                      onClick={() => setIsOpen(false)}
                      className="hover:bg-gray-100 px-4 py-2 cursor-pointer text-gray-700"
                    >
                      <Link to="/shop">{category.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className='lg:w-3/4 w-1/2 text-center items-center relative'>
            {isLoggedIn != null &&
              <>
                <button className="lg:hidden text-black" onClick={() => setListOpen(!ListOpen)}>☰</button>
                <ul className={`${ListOpen ? "block" : "hidden"} lg:flex flex-col lg:flex-row py-2 w-24 lg:gap-4 gap-2 bg-gray-50 text-center lg:bg-transparent rounded-md shadow lg:shadow-none lg:justify-end absolute lg:static lg:w-full m-auto top-full`}>
                  <li><Link className='text-gray-600 hover:text-teal-500 text-base' onClick={() => setListOpen(false)} to="">Home</Link></li>
                  <li><Link className='text-gray-600 hover:text-teal-500 text-base' onClick={() => setListOpen(false)} to="/shop">Shop</Link></li>
                  <li><Link className='text-gray-600 hover:text-teal-500 text-base' onClick={() => setListOpen(false)} to="/cart">Cart</Link></li>
                  <li><Link className='text-gray-600 hover:text-teal-500 text-base' onClick={() => setListOpen(false)} to="/contact">Contact</Link></li>
                  {isLoggedIn && (
                    <button onClick={handleLogout} className="text-red-500 font-medium">
                      Logout
                    </button>
                  )}
                </ul>
              </>
            }
          </div>
        </div>
      </nav>
    </>
  );
}