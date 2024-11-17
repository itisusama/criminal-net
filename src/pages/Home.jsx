import React, { useState, useEffect } from 'react';
import criminals from '../data/criminals.json';

const Home = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (query) {
      const filteredResults = criminals.filter(criminal =>
        criminal.criminal_name.toLowerCase().startsWith(query.toLowerCase())
      );
      setResults(filteredResults);
    } else {
      setResults([]);
    }
  }, [query]);

  const handleSearch = () => {
    console.log('Search query:', query);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black p-4 text-white">
      <h1 className="text-4xl font-bold mb-8 text-center">Criminal Database Search</h1>
      <div className="w-full max-w-md flex gap-3">
        <input 
          type="text" 
          value={query} 
          onChange={(e) => setQuery(e.target.value)} 
          placeholder="Enter search query..." 
          className="w-full p-3 border border-gray-800 rounded mb-4 bg-gray-900 text-white placeholder-gray-500"
        />
        <button 
          onClick={handleSearch} 
          className="bg-red-600 h-11 py-0 px-2 text-white rounded hover:bg-red-700 transition duration-300"
        >
          Search
        </button>
      </div>
      <div className="mt-8 w-full max-w-md">
        {results.length > 0 ? (
          <ul>
            {results.map(criminal => (
              <li key={criminal.criminal_id} className="mb-2 p-2 border border-gray-700 rounded bg-gray-800">
                {criminal.criminal_name}
              </li>
            ))}
          </ul>
        ) : (
          query && <p className="text-gray-500">No results found</p>
        )}
      </div>
    </div>
  );
};

export default Home;
