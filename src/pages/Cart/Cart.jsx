import { useContext } from 'react';
import { CartContext } from '../../Contexts/CartContext';
import { Link } from 'react-router-dom';
import { ShoppingBag } from "lucide-react";
export default function Cart() {
    const {
        cartItems,
        removeFromCart,
        updateQuantity,
        totalPrice,
    } = useContext(CartContext);

    return ( <>   


         <h1 className="mt-64 text-2xl m-auto w-48 rounded-md text-teal-700 font-bold mb-4 text-center bg-gradient-to-l p-4 from-blue-100 to-green-200">Your Cart <i className="fa-solid fa-cart-shopping text-teal-600" />
</h1>
            
          
         
         <div className=" flex justify-between items-center m-auto w-[94%]">
                         <Link to="/checkout" className='w-[200px] text-center text-white rounded-md p-2 bg-teal-500'>checkout</Link>
                        <p className="text-xl font-semibold">
                            Total price : <span className="text-teal-500">${totalPrice.toFixed(2)}</span>
                        </p>
                    </div>


        <div className="p-6">

            {cartItems.length === 0 ? (
                <p className="text-center text-gray-500">Your cart is empty.</p>
            ) : (
                <>
                    <div className="space-y-4">
                        {cartItems.map((item) => (
                            <div
                                key={item.id}
                                className="flex items-center justify-between bg-white shadow rounded p-4 hover:bg-gradient-to-l from-blue-100 to-green-200"
                            >
                                <div className="flex items-center gap-4 ">
                                    <img
                                        src={item.thumbnail}
                                        alt={item.title}
                                        className="w-20 h-20 object-cover rounded"
                                    />
                                    <div>
                                        <h2 className="font-semibold">{item.title}</h2>
                                        <p className="text-teal-500 font-semibold">${item.price}</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2">
                                    <input
                                        type="number"
                                        min={1}
                                        className="w-16 border rounded px-2 py-1 text-center"
                                        value={item.quantity}
                                        onChange={(e) =>
                                            updateQuantity(item.id, Number(e.target.value))
                                        }
                                    />
                                    <button
                                        onClick={() => removeFromCart(item.id)}
                                        className="text-red-500 font-medium hover:underline"
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                </>
            )}
        </div>
    </>);
}