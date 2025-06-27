import { useContext } from 'react';
import { CartContext } from '../../Contexts/CartContext';
import toast from 'react-hot-toast';

export default function Product({ product, onClick }) {
    const { addToCart } = useContext(CartContext);

    const handleAdd = (e) => {
        e.stopPropagation(); 
        addToCart(product);
        toast.success(`${product.title} added to cart!`);
    };

    return (
        <div onClick={onClick} className="w-64 bg-white rounded-xl shadow p-4 flex flex-col cursor-pointer hover:shadow-lg transition">
            <img
                src={product.thumbnail}
                alt={product.title}
                className="h-40 object-cover rounded"
            />
            <h2 className="text-lg font-bold mt-2">{product.title}</h2>
            <p className="text-blue-600 font-semibold">${product.price}</p>

            <button
                onClick={handleAdd}
                className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
                Add to Cart
            </button>
        </div>
    );
}
