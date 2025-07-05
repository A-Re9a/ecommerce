import { useState } from "react";
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

export default function ProductCard({product}){
    const navigate = useNavigate();
    const detailsPage=()=>{
        navigate(`/product/${product.id}`)
    }
    const newPrice= product.price - product.price* product.discountPercentage/100;
    const rating = Math.floor(product.rating);
    const regStars= 5 - rating;
    let solidStars=[]
    let regularStars=[]
    for(let i=0; i<rating; i++){
        solidStars.push(<FaStar className='solid-star' key={i}/>)
    }
    for(let i=regStars; i>0; i--){
        regularStars.push(<FaRegStar className='regular-star' key={i}/>)
    }
    const [quantity, setQuantity] = useState(0)
    const icrease=()=>{
        if(quantity<product.stock){
            setQuantity(quantity+1)
        }
    }
    const decrease=()=>{
        if(!quantity==0){
            setQuantity(quantity-1)
        }
    }
    return(
        <div className='product-card flex flex-col flex-1'>
            <div className='product-image relative'>
                <img src={product.images[0]} alt={product.title} onClick={()=>{detailsPage()}}/>
                <span className='sale absolute top-0 left-0'>{Math.ceil(product.discountPercentage)}%</span>
            </div>
            <div className='product-body flex-1'>
                <h2>{product.title}</h2>
                <div className='flex flex-col gap-[15px]'>
                    <span className='available-or'>{product.stock>0? "In stock" : "stock"}</span>
                    <div className='flex items-center gap-[10px]'>
                        <div className='stars flex'>{solidStars.map((s)=>(s))}{regularStars.map((s)=>(s))}</div>
                        <p className='review'>{product.reviews.length} review</p>
                    </div>
                    <div className='price flex items-center gap-[7.89px]'>
                        <span>${product.price}</span>
                        <p className='new-price'>${newPrice.toFixed(2)}</p>
                    </div>
                    <div className='numofproducts flex'>
                        <span className='minus cursor-pointer' onClick={()=>decrease()}>-</span>
                        <input type="text" name='quantityofproducts' onChange={(e)=>{setQuantity(e.target.value)}} value={quantity} className='w-full'/>
                        <span className='plus cursor-pointer' onClick={()=>icrease()}>+</span>
                    </div>
                </div>
            </div>
        </div>
    )
}