import { createContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import LoadingScreen from '../Components/LoadingScreen/LoadingScreen';

export const SortedProductsContext = createContext();

export default function SortedProductsProvider({ children }) {
    const { data, isLoading, error } = useQuery({
        queryKey: ['sorted-products'],
        queryFn: () =>
            axios
                .get('https://dummyjson.com/products?sort=desc')
                .then((res) => res.data.products),
    });

    if (isLoading) return <LoadingScreen />;
    if (error) return <p className="text-red-500 text-center">Error loading sorted products.</p>;

    return (
        <SortedProductsContext.Provider value={{ products: data }}>
            {children}
        </SortedProductsContext.Provider>
    );
}
