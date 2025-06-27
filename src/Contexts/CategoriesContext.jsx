import { createContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import LoadingScreen from '../Components/LoadingScreen/LoadingScreen';

export const CategoriesContext = createContext();

export default function CategoriesProvider({ children }) {
    const { data, isLoading, error } = useQuery({
        queryKey: ['categories'],
        queryFn: () =>
            axios
                .get('https://dummyjson.com/products/categories')
                .then((res) => res.data),
    });

    if (isLoading) return <LoadingScreen />;
    if (error) return <p className="text-red-500 text-center">Error loading categories.</p>;

    return (
        <CategoriesContext.Provider value={{ categories: data }}>
            {children}
        </CategoriesContext.Provider>
    );
}
