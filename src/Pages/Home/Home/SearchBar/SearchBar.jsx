

const SearchBar = ({handleSearch}) => {

  return (
    <section className=" my-12">
      <div className="flex items-center justify-center mt-4">
        <input
          onChange={handleSearch}
          type="text"
          placeholder="Type Your Favorite College..."
          className="w-64 md:w-4/12 p-2 md:p-4 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        {/* <button className="bg-green-500 text-white font-semibold p-2  md:p-4 rounded-r-md ml-1 focus:outline-none focus:ring-2 focus:ring-green-500">
          Search
        </button> */}
      </div>
    </section>
  );
};

export default SearchBar;
