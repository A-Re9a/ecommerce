import React from 'react'
import Background from "../../assets/coupon.png"
import { Link } from 'react-router-dom'

export default function Footer() {
  return <>
    
    <div className="bg-gray-100 mt-12 text-gray-700">
    <div className="bg-[#35AFA0] text-white px-20
     md:px-16 flex flex-col md:flex-row justify-between items-center">


        <div>
          <p className="text-lg">
            <span className="text-cyan-100 font-semibold">$20 discount</span> for your first order
          </p>
          <h2 className="text-2xl font-bold mt-2">Join our newsletter and get…</h2>
          <p className="mt-2 text-sm opacity-90">Join our email subscription now to get updates on promotions and coupons.</p>
        <form className="mt-6 md:mt-0 flex w-full max-w-md">
          <input type="email" placeholder="Your email address" className="p-3 rounded-l-md w-full text-gray-800" />
          <button type="submit" className="bg-white text-emerald-600 font-semibold px-5 rounded-r-md border border-white hover:bg-gray-100">Subscribe</button>
        </form>  
        </div>

      <div><img src={Background} className='h-full pt-20'></img></div>


      </div>

      <div className="flex flex-col lg:flex-row grid-cols-2 gap-4 text-center py-4 justify-between items-center m-auto w-[94%]">
        <p><i className="fas fa-shopping-cart mr-2"></i>Everyday fresh products</p>
        <p><i className="fas fa-shipping-fast mr-2"></i>Free delivery for order over $70</p>
        <p><i className="fas fa-fire mr-2"></i>Daily Mega Discounts</p>
        <p><i className="fas fa-tags mr-2"></i>Best price on the market</p>
      </div>
   <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 px-6 py-10  ">
  <div>
    <h3 className="font-semibold mb-3">FRUIT & VEGETABLES</h3>
    <ul className="space-y-2 text-sm">
      <li className="hover:underline cursor-pointer">Fresh Vegetables</li>
      <li className="hover:underline cursor-pointer">Herbs & Seasonings</li>
      <li className="hover:underline cursor-pointer">Fresh Fruits</li>
      <li className="hover:underline cursor-pointer">Cuts & Sprouts</li>
      <li className="hover:underline cursor-pointer">Exotic Fruits & Veggies</li>
      <li className="hover:underline cursor-pointer">Packaged Produce</li>
      <li className="hover:underline cursor-pointer">Party Trays</li>
    </ul>
  </div>

  <div>
    <h3 className="font-semibold mb-3">BREAKFAST & DAIRY</h3>
    <ul className="space-y-2 text-sm">
      <li className="hover:underline cursor-pointer">Milk & Flavoured Milk</li>
      <li className="hover:underline cursor-pointer">Butter and Margarine</li>
      <li className="hover:underline cursor-pointer">Cheese</li>
      <li className="hover:underline cursor-pointer">Eggs Substitutes</li>
      <li className="hover:underline cursor-pointer">Honey</li>
      <li className="hover:underline cursor-pointer">Marmalades</li>
      <li className="hover:underline cursor-pointer">Sour Cream and Dips</li>
      <li className="hover:underline cursor-pointer">Yogurt</li>
    </ul>
  </div>

  <div>
    <h3 className="font-semibold mb-3">MEAT & SEAFOOD</h3>
    <ul className="space-y-2 text-sm">
      <li className="hover:underline cursor-pointer">Breakfast Sausage</li>
      <li className="hover:underline cursor-pointer">Dinner Sausage</li>
      <li className="hover:underline cursor-pointer">Beef</li>
      <li className="hover:underline cursor-pointer">Chicken</li>
      <li className="hover:underline cursor-pointer">Sliced Deli Meat</li>
      <li className="hover:underline cursor-pointer">Shrimp</li>
      <li className="hover:underline cursor-pointer">Wild Caught Fillets</li>
      <li className="hover:underline cursor-pointer">Crab and Shellfish</li>
      <li className="hover:underline cursor-pointer">Farm Raised Fillets</li>
    </ul>
  </div>

  <div>
    <h3 className="font-semibold mb-3">BEVERAGES</h3>
    <ul className="space-y-2 text-sm">
      <li className="hover:underline cursor-pointer">Water</li>
      <li className="hover:underline cursor-pointer">Sparkling Water</li>
      <li className="hover:underline cursor-pointer">Soda & Pop</li>
      <li className="hover:underline cursor-pointer">Coffee</li>
      <li className="hover:underline cursor-pointer">Milk & Plant-Based Milk</li>
      <li className="hover:underline cursor-pointer">Tea & Kombucha</li>
      <li className="hover:underline cursor-pointer">Drink Boxes & Pouches</li>
      <li className="hover:underline cursor-pointer">Craft Beer</li>
      <li className="hover:underline cursor-pointer">Wine</li>
    </ul>
  </div>

  <div>
    <h3 className="font-semibold mb-3">BREADS & BAKERY</h3>
    <ul className="space-y-2 text-sm">
      <li className="hover:underline cursor-pointer">Milk & Flavoured Milk</li>
      <li className="hover:underline cursor-pointer">Butter and Margarine</li>
      <li className="hover:underline cursor-pointer">Cheese</li>
      <li className="hover:underline cursor-pointer">Eggs Substitutes</li>
      <li className="hover:underline cursor-pointer">Honey</li>
      <li className="hover:underline cursor-pointer">Marmalades</li>
      <li className="hover:underline cursor-pointer">Sour Cream and Dips</li>
      <li className="hover:underline cursor-pointer">Yogurt</li>
    </ul>
  </div>
</div>


    <footer className="bg-gray-100 py-6 border-t">
      <div className="flex lg:flex-row flex-col m-auto px-4  gap-4 justify-between items-center">
        <div className="flex ">
          <div className="flex items-center space-x-2">
          <Link to="tel:880055555" className="text-gray-800 text-lg font-medium hover:underline">
  8 800 555-55
</Link>
            <span className="text-sm text-gray-500">Working 8:00 - 22:00</span>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <span className="text-gray-700 font-medium mb-2">
            Download App on Mobile:
          </span>
          <div className="flex space-x-2">
           <Link to="https://play.google.com/store/games?hl=ar"> <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Google Play"
              className="w-24"
            /></Link>
         <Link to="https://www.apple.com/eg-ar/app-store/">  <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="App Store"
              className="w-24"
            /></Link> 
          </div>
        </div>

        <div className="flex justify-end space-x-4">
          <Link
            to="https://www.facebook.com/"
            className="text-gray-500 hover:text-gray-700"
            aria-label="Facebook"
          >
            <i className="fab fa-facebook"></i>
          </Link>
          <Link
            to="https://x.com/?lang=en"
            className="text-gray-500 hover:text-gray-700"
            aria-label="Twitter"
          >
            <i className="fab fa-twitter"></i>
          </Link>
          <Link
            to="https://www.instagram.com/"
            className="text-gray-500 hover:text-gray-700"
            aria-label="Instagram"
          >
            <i className="fab fa-instagram"></i>
          </Link>
        </div>
      </div>

      <div className="flex mx-auto px-4 mt-6 flex-col lg:flex-row gap-3 justify-between items-center text-gray-500 text-sm">
        <span>© 2025 All rights reserved by Blackrise Theme</span>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-gray-700">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-gray-700">
            Terms and Conditions
          </a>
          <a href="#" className="hover:text-gray-700">
            Cookie
          </a>
        </div>
        <div className="flex space-x-4">
          <img src="path/to/brand-logo.png" alt="Brand" className="h-6" />
          <img src="path/to/stripe-logo.png" alt="Stripe" className="h-6" />
          <img src="path/to/paypal-logo.png" alt="Paypal" className="h-6" />
          <img src="path/to/visa-logo.png" alt="Visa" className="h-6" />
        </div>
      </div>
    </footer>
  
    </div>
    
    </>
   
  
}
