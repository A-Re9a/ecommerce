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
                placeholder="Search for Products, fruit, meat, eggs .etc..."
                className="w-full p-2 rounded text-black  bg-gray-200"
            />
            <button type="submit" className="text-white bg-[#35AFA0] font-semibold px-4 py-2 rounded">
                Search
            </button>
        </form>
    );
}
