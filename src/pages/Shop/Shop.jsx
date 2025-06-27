import { useState, useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { CategoriesContext } from '../../Contexts/CategoriesContext';
import Product from '../../Components/Product/Product';
import ProductDetailsModal from '../../Components/ProductDetailsModal/ProductDetailsModal';

export default function Shop() {
    // Get categories from context
    const context = useContext(CategoriesContext);
    const categories = context?.categories || [];

    const [selectedCategory, setSelectedCategory] = useState(null);

    // Fetch products when category is selected
    const {
        data: products,
        isLoading,
        error,
    } = useQuery({
        queryKey: ['category-products', selectedCategory],
        queryFn: () =>
            axios
                .get(`https://dummyjson.com/products/category/${selectedCategory}`)
                .then((res) => res.data.products),
        enabled: !!selectedCategory,
    });

    const handleCheckboxChange = (category) => {
        setSelectedCategory((prev) => (prev === category ? null : category));
    };
    const [selectedProductId, setSelectedProductId] = useState(null);
    return (
        <div className="flex p-6">
            {/* Sidebar: Categories */}
            <div className="w-1/4 pr-6">
                <h2 className="font-bold text-lg mb-4">Product Categories</h2>
                <ul className="space-y-2">
                    {Array.isArray(categories) &&
                        categories.map((category) => {
                            const value =
                                typeof category === 'string'
                                    ? category
                                    : category.slug || '';

                            const label =
                                typeof category === 'string'
                                    ? category.replaceAll('-', ' ')
                                    : category.name || 'Unknown';

                            if (!value) return null;

                            return (
                                <li key={value} className="flex items-center space-x-2">
                                    <input
                                        type="checkbox"
                                        checked={selectedCategory === value}
                                        onChange={() => handleCheckboxChange(value)}
                                    />
                                    <label className="capitalize">{label}</label>
                                </li>
                            );
                        })}
                </ul>
            </div>

            {/* Product Grid */}
            <div className="w-3/4">
                {isLoading && selectedCategory && <p>Loading products...</p>}
                {error && <p className="text-red-500">Error: {error.message}</p>}
                {!selectedCategory && (
                    <p className="text-gray-500 mb-4">Please select a category.</p>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {products?.map((product) => (
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
            </div>

        </div>
    );
}
