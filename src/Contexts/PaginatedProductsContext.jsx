import { createContext, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const PaginatedProductsContext = createContext();

export default function PaginatedProductsProvider({ children }) {
    const [page, setPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');

    const limit = 12;
    const skip = (page - 1) * limit;

    const fetchProducts = async () => {
        let url = `https://dummyjson.com/products?limit=${limit}&skip=${skip}`;

        if (searchTerm) {
            url = `https://dummyjson.com/products/search?q=${searchTerm}&limit=${limit}&skip=${skip}`;
        }

        if (selectedCategory) {
            url = `https://dummyjson.com/products/category/${selectedCategory}?limit=${limit}&skip=${skip}`;
        }

        const res = await axios.get(url);
        return res.data;
    };

    const { data, isLoading, error } = useQuery({
        queryKey: ['paginated-products', page, searchTerm, selectedCategory],
        queryFn: fetchProducts,
        keepPreviousData: true,
    });

    return (
        <PaginatedProductsContext.Provider
            value={{
                products: data?.products || [],
                total: data?.total || 0,
                limit,
                page,
                setPage,
                isLoading,
                error,
                searchTerm,
                setSearchTerm,
                selectedCategory,
                setSelectedCategory,
            }}
        >
            {children}
        </PaginatedProductsContext.Provider>
    );
}
