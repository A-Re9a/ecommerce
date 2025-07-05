import { useContext, useEffect, useState } from 'react';
import { ProductContexts } from '../../Contexts/productContexts';
import Product from '../../Components/Product/Product';
import LoadingScreen from '../../Components/LoadingScreen/LoadingScreen';
import ProductDetailsModal from '../../Components/ProductDetailsModal/ProductDetailsModal';
import { CategoriesContext } from '../../Contexts/CategoriesContext';
import { Link } from 'react-router-dom';
import img1 from "../../assets/bacola-banner-07.jpg.png"
import img2 from "../../assets/bacola-banner-08.jpg.png"
import img3 from "../../assets/bacola-banner-05.jpg.png"
import img4 from "../../assets/bacola-banner-06.jpg.png"
import img5 from "../../assets/bacola-banner-10.jpg.png"
import img6 from "../../assets/slider.png"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import App from './../../App';





export default function Home() {
  const { data, isLoading } = useContext(ProductContexts );

  const [selectedProductId, setSelectedProductId] = useState(null);
const settings = {
  dots: false,
  infinite: true,
  speed: 1000,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1000,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};


const initialTime = 604800; 
  const [remainingSeconds, setRemainingSeconds] = useState(initialTime);

  useEffect(() => {
    if (remainingSeconds <= 0) return;

    const timer = setInterval(() => {
      setRemainingSeconds((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [remainingSeconds]);

  const hours = Math.floor(remainingSeconds / 3600);
  const minutes = Math.floor((remainingSeconds % 3600) / 60);
  const seconds = remainingSeconds % 60;

  const renderBox = (value) => (
    <div className="bg-rose-600 text-white w-12 h-12 rounded-md flex items-center justify-center text-xl font-semibold">
      {String(value).padStart(2, "0")}
    </div>
  );



  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <>


<div style={{ backgroundImage: `url(${img6})` }} className='bg-cover bg-center flex flex-col h-[550px] w-[94%] lg:mt-[340px]   m-auto p-10'>

<div className='flex gap-4 mb-2 lg:mb-4'>
  <p className='text-[#202435] font-[11px]'>EXCLUSIVE OFFER</p>
  <div className='rounded-3xl bg-gradient-to-r from-green-200 to-green-50 px-2'>
<span className='text-green-700'>-20 % OFF</span>
  </div>
</div>

<div>
  <h1 className='font-bold text-3xl w-[85%] lg:w-[30%]'>Specialist in the
  grocery store</h1>
</div>

<p className='text-[#202435] font-[11px] mt-2'>Only this week. Don’t miss...</p>

<p className='text-[#202435] font-[11px] mt-4'>from <span className='font-semibold text-red-600 text-xl'>$7.99</span></p>

<Link to={'/shop'}> <button className='rounded-3xl px-3 p-1 bg-[#35AFA0] hover:bg-teal-500 hover:scale-110 transition-transform text-white mt-6'>Shop Now →</button></Link>


</div>



    <div className="flex lg:flex-row flex-col p-4 justify-center items-center m-auto w-[94%]">
      <div className="flex flex-col items-center justify-center">
              <h1 className='text-3xl text-center text-[#233A95] mt-4'>
                Special Offers of the week!
            </h1>
            <span className='text-[#9B9BB4] text-center'>Ut placerat, magna quis porttitor vulputate, magna nunc auctor ante.</span>
</div>

<div className="p-4 items-center h-16">

      <div className="flex items-center space-x-2 mb-4">
        {renderBox(hours)}
        <span className="text-black text-xl font-bold">:</span>
        {renderBox(minutes)}
        <span className="text-black text-xl font-bold">:</span>
        {renderBox(seconds)}
      </div>

    </div>




</div>
 
      <div style={{ border: '4px solid red' , borderRadius: '8px' }} className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  justify-center items-center w-[94%] m-auto'>
        {data.map((product) => (
    product.discountPercentage >15 ? <div  className='' key={product.id} onClick={() => setSelectedProductId(product.id)}>
            <Product
              key={product.id}
              product={product}
              onClick={() => setSelectedProductId(product.id)}
            />

          </div>:null
        ))}
      </div>

      {selectedProductId && (
        <ProductDetailsModal
          productId={selectedProductId}
          onClose={() => setSelectedProductId(null)}
        />
      )}

<div className="flex mt-4  mb-4 justify-between items-center w-[94%] m-auto gap-6 lg:flex-row flex-col">

<div style={{ backgroundImage: `url(${img1})` }} className=" bg-cover bg-center h-[250px] w-full lg:w-1/2 p-6 rounded-md">
<div className="flex flex-col w-[45%]">
  <h2 className='font-semibold text-3xl text-gray-800'>The freshest
  milk products</h2>
  <p className='text-gray-600 text-xs p-3'>A family place for grocery</p>
  <Link to={'/shop'}> <button className='rounded-3xl px-3 p-1 bg-red-600 text-white'>Shop Now</button></Link>
  </div>

</div>


<div style={{ backgroundImage: `url(${img2})` }} className=" bg-cover bg-center h-[250px] w-full lg:w-1/2 p-6 rounded-md">
<div className="flex flex-col w-[45%]">
  <h2 className='font-semibold text-3xl text-gray-800'>
  Yogurt with
  Delicious Fruit
  </h2>
  <p className='text-gray-600 text-xs p-3'>A different kind of grocery store</p>
  <Link to={'/shop'}> <button className='rounded-3xl px-3 p-1 bg-red-600 text-white'>Shop Now</button></Link>
  </div>

</div>







</div>







                <Slider {...settings} className='w-[94%] m-auto shadow rounded-md'   >
  {data
    ?.filter((product) => product.category === "groceries")
    .map((product) => (
      <div key={product.id} className="">
        <div className="flex flex-col items-center p-4 bg-gradient-to-r from-gray-100 to-gray-50">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="h-40 object-cover rounded"
          />
          <h2 className="mt-2 font-semibold">{product.title}</h2>
          <p className="text-sm text-gray-500">{product.stock} items</p>
        </div>
      </div>
    ))}
</Slider>

<div className=" flex flex-col w-[94%] m-auto py-5">
<p className="font-dosis font-semibold text-[20px] leading-[24px] tracking-normal align-middle uppercase text-[#202435]">
Best Sellers
</p>
<p className="font-inter font-normal text-[14px] leading-[18px] tracking-[-0.1px] align-middle text-[#9B9BB4]">
Do not miss the current offers until the end of month.</p>

  </div>

<div  className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  justify-center items-center w-[94%] m-auto'>
        {data.map((product) => (
    product.price <5 ? <div  className='' key={product.id} onClick={() => setSelectedProductId(product.id)}>
            <Product
              key={product.id}
              product={product}
              onClick={() => setSelectedProductId(product.id)}
            />

          </div>:null
        ))}
      </div>


<div className="flex mt-4  mb-4 justify-between items-center w-[94%] m-auto gap-6 lg:flex-row flex-col">

<div style={{ backgroundImage: `url(${img3})` }} className=" bg-cover bg-center h-[250px] w-full lg:w-1/3 p-6 rounded-md">
<div className="flex flex-col w-[60%]">
  <p className='text-green-600 text-sm font-semibold'>Weekend Discount 40%</p>
  <h2 className='font-semibold text-2xl text-gray-800'>Natural Eggs</h2>
  <p className='text-gray-600 text-xs p-2'>Eat one every day</p>
  <Link to={'/shop'}> <button className='rounded-3xl px-3 p-1 mt-1 bg-red-600 text-white'>Shop Now</button></Link>
  </div>

</div>



<div style={{ backgroundImage: `url(${img4})` }} className=" bg-cover bg-center h-[250px] w-full lg:w-1/3 p-6 rounded-md">
<div className="flex flex-col w-[60%]">
  <p className='text-green-600 text-sm font-semibold'>Weekend Discount 40%</p>
  <h2 className='font-semibold text-2xl text-gray-800'>Taste the Best</h2>
  <p className='text-gray-600 text-xs p-2'>Shine the morning</p>
  <Link to={'/shop'}> <button className='rounded-3xl px-3 p-1 mt-1 bg-red-600 text-white'>Shop Now</button></Link>
  </div>

</div>







<div style={{ backgroundImage: `url(${img5})` }} className=" bg-cover bg-center h-[250px] w-full lg:w-1/3 p-6 rounded-md">
<div className="flex flex-col w-[60%]">
  <p className='text-green-600 text-sm font-semibold'>Weekend Discount 40%</p>
  <h2 className='font-semibold text-2xl text-gray-800'>Ditch the Junk</h2>
  <p className='text-gray-600 text-xs p-2'>Breakfast made better</p>
  <Link to={'/shop'}> <button className='rounded-3xl px-3 p-1 mt-1 bg-red-600 text-white'>Shop Now</button></Link>
  </div>

</div>




</div>




<div className=" flex flex-col w-[94%] m-auto py-3">
<p className="font-dosis font-semibold text-[20px] leading-[24px] tracking-normal align-middle uppercase text-[#202435]">
Featured Products
</p>
<p className="font-inter font-normal text-[14px] leading-[18px] tracking-[-0.1px] align-middle text-[#9B9BB4]">
Do not miss the current offers until the end of March.</p>

  </div>


<Slider {...settings} className='w-[94%] m-auto shadow rounded-md'   >
  {data
    ?.filter((product) => product.rating >4)
    .map((product) => (

      <div key={product.id} onClick={() => setSelectedProductId(product.id)}>
      <Product
        key={product.id}
        product={product}
        onClick={() => setSelectedProductId(product.id)}
      />

    </div>
    ))}
</Slider>



<div className="w-[94%] rounded-md justify-center m-auto p-2 mt-3 text-center uppercase bg-red-100 text-red-600 font-inter font-bold text-[16px] leading-[24px] tracking-[4px]">
<p>Save an Extra 5-10 % On Every Autoship Order!</p>
</div>


    </>
  );
}
