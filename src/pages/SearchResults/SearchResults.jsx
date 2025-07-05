import { useSearchParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Product from '../../Components/Product/Product';
import { useState } from 'react';
import ProductDetailsModal from '../../Components/ProductDetailsModal/ProductDetailsModal';

export default function SearchResults() {
    const [searchParams] = useSearchParams();
    const query = searchParams.get('q') || '';
    const [selectedProductId, setSelectedProductId] = useState(null);

    const { data, isLoading, error } = useQuery({
        queryKey: ['search', query],
        queryFn: () =>
            axios
                .get(`https://dummyjson.com/products/search?q=${query}`)
                .then((res) => res.data.products),
        enabled: !!query,
    });

    if (!query) return <p className="text-center mt-10">Please enter a search term.</p>;
    if (isLoading) return <p className="text-center mt-10">Loading results...</p>;
    if (error) return <p className="text-center text-red-500 mt-10">Error: {error.message}</p>;
    if (data?.length === 0) return <p className="text-center mt-80">No results found for "{query}".</p>;

    return (
        <div className="p-6">
            <h2 className="text-xl font-bold mb-4 text-center">
                Search results for: "<span className="text-blue-600">{query}</span>"
            </h2>
            <p className="text-sm text-gray-500 mb-4">
                Showing {data.length} result(s)
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {data?.map((product) => (
                    <Product
                        key={product.id}
                        product={product}
                        onClick={() => setSelectedProductId(product.id)}
                    />
                ))}
            </div>

            {/* Modal for product details */}
            {selectedProductId && (
                <ProductDetailsModal
                    productId={selectedProductId}
                    onClose={() => setSelectedProductId(null)}
                />
            )}
        </div>
    );
}
