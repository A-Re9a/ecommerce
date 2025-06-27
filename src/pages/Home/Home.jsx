import { useContext, useState } from 'react';
import { ProductContexts } from '../../Contexts/productContexts';
import Product from '../../Components/Product/Product';
import LoadingScreen from '../../Components/LoadingScreen/LoadingScreen';
import ProductDetailsModal from '../../Components/ProductDetailsModal/ProductDetailsModal';

export default function Home() {
  const { data, isLoading } = useContext(ProductContexts);
  const [selectedProductId, setSelectedProductId] = useState(null);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <>
      <h1 className='text-3xl font-bold underline text-center text-blue-600 mt-10'>
        Welcome to the Home Page
      </h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4'>
        {data.map((product) => (
          <div key={product.id} onClick={() => setSelectedProductId(product.id)}>
            <Product
              key={product.id}
              product={product}
              onClick={() => setSelectedProductId(product.id)}
            />

          </div>
        ))}
      </div>

      {selectedProductId && (
        <ProductDetailsModal
          productId={selectedProductId}
          onClose={() => setSelectedProductId(null)}
        />
      )}
    </>
  );
}
