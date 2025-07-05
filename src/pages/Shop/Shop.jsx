import { useContext, useState } from 'react';
import './shop.css'
import { CategoriesContext } from '../../Contexts/CategoriesContext';
import { PaginatedProductsContext } from '../../Contexts/PaginatedProductsContext';
//import Product from '../../Components/Product/Product';
//import ProductDetailsModal from '../../Components/ProductDetailsModal/ProductDetailsModal';
import ProductCard from '../../Components/productCard/productCard';
import { Link } from 'react-router-dom';
import sidebar from '../../images/sidebar-banner.gif.png'
import bacola from '../../images/bacola-banner-18.jpg.png'
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import ReactPaginate from "react-paginate";

export default function Shop() {
    const productsContext=useContext(PaginatedProductsContext);
    const filteredProducts= productsContext?.products;
    const total= productsContext?.total;
    const limit= productsContext?.limit;
    const page= productsContext?.page;
    const setPage= productsContext?.setPage;
    const selectedCategory= productsContext?.selectedCategory;
    const setSelectedCategory= productsContext?.setSelectedCategory;

    //to display categories
    const context= useContext(CategoriesContext);
    const categories = context.categories;
    
    const handleCategoryChange = (category) => {
        setSelectedCategory((prev) => (prev === category ? null : category));
        setPage(1)
        setIsOpenCate(false)
    };

    const brands = [{brand:'Essence', numofpro:8},{brand:'Glamour Beauty', numofpro:36},{brand:'Velvet Touch', numofpro:1},{brand:'Chic Cosmetics', numofpro:1},{brand:'Nail Couture', numofpro:16},{brand:'Calvin Klein', numofpro:16},{brand:'Chanel', numofpro:16},{brand:'Dior', numofpro:16},{brand:'Dolce & Gabbana', numofpro:16},{brand:'Gucci', numofpro:16},{brand:'Annibale Colombo', numofpro:16}]
    
     //pagination
    const pageCount = Math.ceil(total / limit);
    const handlePageClick = ({ selected }) => {
        setPage(selected+1);
    };
    const [isOpenCate, setIsOpenCate]=useState(false);
    const [isOpenBrands, setIsOpenBrands]=useState(false);
    const [isOpenPrice, setIsOpenPrice]=useState(false);
    const [isOpenStock, setIsOpenStock]=useState(false);
    return(
        <div className='shop pt-[300px] '>
            <div className='links mb-[20px] lg:mb-[45px] flex items-center'>
                <Link to="/"><span>home</span></Link><IoIosArrowForward className='arrow'/><p>Products</p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-4'>
                <div className='search-types gap-[5px] lg:gap-[45px] lg:col-span-1 mb-[20px]'>
                    <div className='categories'>
                        <div className='flex'><h3 className='text-[12px] lg:text-[15px] mb-[5px] lg:mb-5'>Product Categories</h3><IoIosArrowForward onClick={()=>setIsOpenCate(!isOpenCate)} className='arrow ml-1 lg:hidden xxl:hidden'/></div>
                        <div className={`${isOpenCate? 'block' : 'hidden lg:block'}`}>
                            {categories.map((cate)=>
                            <div key={cate.name} className='categories-options'>
                                <input type="checkbox" value={cate.name} name='cate' id={cate.name} checked={selectedCategory===cate.name} onChange={() => handleCategoryChange(cate.name)}/>
                                <label htmlFor={cate.name} >{cate.name}</label>
                            </div>
                            )}
                        </div>
                    </div>
                    <div>
                        <div className='flex'><h3 className='text-[12px] lg:text-[15px] mb-[5px] lg:mb-5'>Brands</h3><IoIosArrowForward onClick={()=>setIsOpenBrands(!isOpenBrands)} className='arrow ml-1 lg:hidden xxl:hidden'/></div>
                        <div className={`${isOpenBrands? 'block' : 'hidden lg:block'}`}>
                            {brands.map((brand)=>(
                            <div key={brand.brand} className='flex justify-between'>
                                <div className='categories-options'>
                                    <input type='checkbox' value='' name='' id='' onChange={() =>{}}/>
                                    <label htmlFor=''>{brand.brand}</label>
                                </div>
                                <p>({brand.numofpro})</p>
                            </div>
                            ))}
                        </div>
                    </div>
                    <div className='price'>
                        <div className='flex'><h3 className='text-[12px] lg:text-[15px] mb-[5px] lg:mb-5'>Price</h3><IoIosArrowForward onClick={()=>setIsOpenPrice(!isOpenPrice)} className='arrow ml-1 lg:hidden xxl:hidden'/></div>
                        <div className={isOpenPrice? 'block' : 'hidden lg:block'}>
                            <div className="from grid grid-cols-[1fr_auto_1fr]">
                                <div>
                                    <p className='mt-1 mb-1'>From</p>
                                    <input type='number' name='from' onChange={()=>{}}/>
                                </div>
                                <div className='between flex items-center ps-5 pe-5'>_</div>
                                <div>
                                    <p className='to mt-1 mb-1'>To</p>
                                    <input type='number' name='to' onChange={()=>{}}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='flex'><h3 className='text-[12px] lg:text-[15px] mb-[5px] lg:mb-5'>Availability</h3><IoIosArrowForward onClick={()=>setIsOpenStock(!isOpenStock)} className='arrow ml-1 lg:hidden xxl:hidden'/></div>
                        <div className={isOpenStock? 'block' : 'hidden lg:block'}>
                            <div className='flex justify-between'>
                                <div className='categories-options'>
                                    <input type='checkbox' value='inStock' onChange={()=>{}} name='In stock' id='inStock'/>
                                    <label htmlFor='inStock'>In stock</label>
                                </div>
                                <p>({total})</p>
                            </div>
                            <div className='flex justify-between'>
                                <div className='categories-options'>
                                    <input type='checkbox' value='outOfStock' onChange={()=>{}} name='outOfStock' id='outOfStock'/>
                                    <label htmlFor='outOfStock'>Out of stock</label>
                                </div>
                                <p>(0)</p>
                            </div>
                        </div>
                    </div>
                    <div className='hidden lg:block'><img src={sidebar} alt='sidbar'/></div>
                </div>
                <div className='products-side lg:col-span-3 lg:mt-0 lg:mr-[15px] lg:mb-[115px] lg:ml-[30px] m-0 mb-[15px]'>
                    <div className='relative bg-image w-full'>
                        <img src={bacola} alt='bacola' className='w-full h-full'/>
                        <div className='absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:w-fit lg:text-start w-full text-center'>
                            <h2 className='text-[18px] lg:text-[24px] m-0 lg:mb-[5px]'>Organic Meals Prepared</h2>
                            <h1 className='text-[22px] lg:text-[30px] m-0'>Delivered to <span>your Home</span></h1>
                            <p className='text-[10px] lg:text-[12px] m-0 lg:mt-[8px]'>Fully prepared & delivered nationwide.</p>
                        </div>
                    </div>
                    <div className='sort flex justify-between'>
                        <p>{total} products</p>
                        <p>Sort by: <span>Alphabetically, A-Z</span></p>
                    </div>
                    <div className='grid grid-cols-2 md:grid-cols-4 overflow-hidden rounded-[7px] mb-[40px]'>
                        {filteredProducts.map((product)=>(<ProductCard key={product.id} product={product}/>))}
                    </div>
                    <div className='pagination'>
                        <ReactPaginate
                            breakLabel="..."
                            nextLabel={<IoIosArrowForward className="text-[#202435] text-[18px]"/>}
                            onPageChange={handlePageClick}
                            forcePage={page-1}
                            pageRangeDisplayed={3}
                            marginPagesDisplayed={1}
                            pageCount={pageCount}
                            previousLabel={<IoIosArrowBack className="text-[#202435] text-[18px]"/>}
                            containerClassName="flex justify-center items-center space-x-2 text-sm"
                            pageClassName="px-3 py-1 rounded-full hover:bg-gray-300"
                            activeClassName="!bg-[#35AFA0] text-white"
                            previousClassName={`px-3 py-1 rounded-full hover:bg-gray-200 ${page == 1 ? 'hidden' : ''}`}
                            nextClassName={`px-3 py-1 rounded-full hover:bg-gray-200 ${page== pageCount ? "hidden" : ''}`}
                            breakClassName="px-3 py-1"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
