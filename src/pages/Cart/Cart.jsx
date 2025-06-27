import { useContext } from 'react';
import { CartContext } from '../../Contexts/CartContext';

export default function Cart() {
    const {
        cartItems,
        removeFromCart,
        updateQuantity,
        totalPrice,
    } = useContext(CartContext);

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4 text-center">Your Cart</h1>

            {cartItems.length === 0 ? (
                <p className="text-center text-gray-500">Your cart is empty.</p>
            ) : (
                <>
                    <div className="space-y-4">
                        {cartItems.map((item) => (
                            <div
                                key={item.id}
                                className="flex items-center justify-between bg-white shadow rounded p-4"
                            >
                                <div className="flex items-center gap-4">
                                    <img
                                        src={item.thumbnail}
                                        alt={item.title}
                                        className="w-20 h-20 object-cover rounded"
                                    />
                                    <div>
                                        <h2 className="font-semibold">{item.title}</h2>
                                        <p className="text-blue-600">${item.price}</p>
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

                    <div className="mt-6 text-right">
                        <p className="text-xl font-semibold">
                            Total: <span className="text-blue-600">${totalPrice.toFixed(2)}</span>
                        </p>
                    </div>
                </>
            )}
        </div>
    );
}
