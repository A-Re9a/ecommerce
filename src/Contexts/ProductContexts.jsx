import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { createContext } from 'react';
import LoadingScreen from '../Components/LoadingScreen/LoadingScreen';

// Create context
export const ProductContexts = createContext();

// Context Provider Component
export default function ProductContextProvider({ children }) {

    const getAllProducts = async () => {
        const response = await axios.get("https://dummyjson.com/products");
        return response.data.products;
    };

    const { data, isLoading } = useQuery({
        queryKey: ["products"],
        queryFn: getAllProducts,
    });

    if (isLoading) {
        return <LoadingScreen />;
    }

    return (
        <ProductContexts.Provider value={{ data }}>
            {children}
        </ProductContexts.Provider>
    );
}

