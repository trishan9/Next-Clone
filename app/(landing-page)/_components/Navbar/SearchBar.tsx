const SearchBar = () => {
  return (
    <div className="relative flex items-center">
      <input
        type="text"
        placeholder="Search documentation..."
        className="bg-[#f2f2f2] hover:bg-[#ebebeb] placeholder:text-[#8f8f8f] hover:placeholder:text-[#7d7d7d] text-black pl-[6px] pr-8 py-1.5 rounded-md transition text-sm"
      />

      <div className="absolute right-0 text-xs px-1.5 mr-1  bg-white py-0.5 font-semibold border rounded-md">
        CtrlK
      </div>
    </div>
  );
};

export default SearchBar;
