import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export default function ProductDetails() {
    const { id } = useParams();

    const { data, isLoading, error } = useQuery({
        queryKey: ['product-details', id],
        queryFn: () =>
            axios.get(`https://dummyjson.com/products/${id}`).then(res => res.data),
        enabled: !!id,
    });

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
            <h2>{data.title}</h2>
            <img src={data.thumbnail} alt={data.title} />
            <p>{data.description}</p>
        </div>
    );
}
