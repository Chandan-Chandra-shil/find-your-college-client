import React from 'react';

const SearchBar = () => {
  return (
    <section className=" mt-12">
      <div className="flex items-center justify-center mt-4">
        <input
          type="text"
          placeholder="Type Your Favorite College..."
          className="w-64 md:w-96 p-2 md:p-4 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="bg-blue-500 text-white font-semibold p-2 md:p-4 rounded-r-md ml-1 focus:outline-none focus:ring-2 focus:ring-blue-500">
          Search
        </button>
      </div>
    </section>
  );
};

export default SearchBar;