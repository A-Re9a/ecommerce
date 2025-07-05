import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useContext } from 'react';
import { CartContext } from '../../Contexts/CartContext';
import toast from 'react-hot-toast';

export default function ProductDetailsModal({ productId, onClose }) {
    const { addToCart } = useContext(CartContext);

    const handleAddToCart = () => {
        addToCart(data);
        toast.success(`${data.title} added to cart!`);
        onClose();
    };
    const { data, isLoading, error } = useQuery({
        queryKey: ['product-details', productId],
        queryFn: () => axios.get(`https://dummyjson.com/products/${productId}`).then(res => res.data),
        enabled: !!productId,
    });

    return (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl shadow-xl p-6 w-full max-w-xl relative">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-3 text-gray-600 hover:text-red-500 text-xl"
                >
                    &times;
                </button>

                {isLoading && <p className="text-center">Loading...</p>}
                {error && <p className="text-center text-red-500">Error: {error.message}</p>}

                {data && (
                    <>
                        <img
                            src={data.thumbnail}
                            alt={data.title}
                            className="w-full h-64 object-cover rounded-lg"
                        />
                        <h2 className="text-2xl font-bold mb-2">{data.title}</h2>
                        <p className="text-gray-600 mb-2">{data.description}</p>
                        <p className="text-teal-600 font-semibold text-lg mb-1">${data.price}</p>
                        <p className="text-yellow-500">Rating: {data.rating} ⭐</p>
                        <p className="text-gray-500 text-sm mb-4">Stock: {data.stock}</p>

                        {/* Add to Cart Button */}
                        <button
                            onClick={handleAddToCart}
                            className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition w-full"
                        >
                            Add to Cart
                        </button>
                    </>
                )}
            </div>
        </div>
    );
}
