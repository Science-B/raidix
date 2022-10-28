const SearchBar = ({ onSearch }) => {
  return (
    <div className="form">
      <form className="search__form">
        <input
          type="text"
          placeholder="Search the product..."
          className="search__input"
          onChange={(event) => onSearch(event.target.value)}
        />
      </form>
    </div>
  );
};

export default SearchBar;
