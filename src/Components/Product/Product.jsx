import { useContext } from 'react';
import { CartContext } from '../../Contexts/CartContext';
import toast from 'react-hot-toast';
import { FaStar, FaRegStar } from "react-icons/fa"; 


export default function Product({ product, onClick }) {
    const { addToCart } = useContext(CartContext);

    const handleAdd = (e) => {
        e.stopPropagation(); 
        addToCart(product);
        toast.success(`${product.title} added to cart!`);
    };

    return <>
   

        <div onClick={onClick} className="w-full bg-white shadow p-4 flex flex-col cursor-pointer hover:shadow-lg transition items-center justify-between">
         
        <div className='product-image relative'>
                <img   src={product.thumbnail}
                alt={product.title}
                className="h-40 object-cover rounded" onClick={()=>{detailsPage()}}/>
                <span className=' absolute top-0  text-white -left-7 rounded-md bg-teal-500 px-1 py-2'>{Math.ceil(product.discountPercentage)}%</span>
            </div>
         
         
         
            <h2 className="text-lg font-bold text-gray-600 mt-2 h-16">{product.title}</h2>
            <p className='text-[#00B853] text-[15px] font-semibold w-full'>{product.availabilityStatus}</p>

            <div className='flex gap-6 w-full'>


            <div className="flex text-yellow-400 items-center">
          {[...Array(5)].map((_, i) =>
            i < product.rating ? <FaStar key={i} /> : <FaRegStar key={i} />
          )}
        </div>



                <p className='text-gray-500 '>{product.reviews.length} Reviews</p>
            </div>
            
        <div className="flex gap-4 w-full">
            <span className="text-gray-500 font-semibold line-through ">${product.price}</span>
            <p className="text-red-600 font-semibold">${(product.price-(product.discountPercentage/100*product.price)).toFixed(2)}</p>

        </div>

        <p className="text-gray-500 w-full">the available products: <span className='text-blue-800 font-semibold'>{product.stock}</span> </p>
            <button
                onClick={handleAdd}
                className="mt-4 bg-[#FFCD00] text-black px-4 py-2 rounded-3xl hover:bg-yellow-300 transition"
            >
                Add to Cart
            </button>
        </div>
    </>;
}
