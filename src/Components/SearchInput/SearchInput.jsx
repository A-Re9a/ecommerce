import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SearchInput() {
    const [search, setSearch] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        if (search.trim()) {
            navigate(`/search?q=${search}`);
        }
    };

    return (
        <form onSubmit={handleSearch} className="flex gap-2">
            <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="search products..."
                className="w-full p-2 rounded text-black"
            />
            <button type="submit" className="bg-white text-blue-800 font-semibold px-4 py-2 rounded">
                Search
            </button>
        </form>
    );
}
