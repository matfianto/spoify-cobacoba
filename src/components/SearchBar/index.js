const SearchBar = (props) => {
  const { handleSearchSubmit, handleSearchChange, searchInput } = props;
  return (
    <form className="search-bar" onSubmit={handleSearchSubmit}>
      <label htmlFor="keyword" className="search-label">
      🔍 Search your song 🔎
      </label>
      <input
        id="keyword"
        name="keyword"
        type="text"
        className="input"
        onChange={handleSearchChange}
        value={searchInput}
        placeholder="Enter the keyword for search the song"
        required
      />
      <button type="submit" className="btn btn--search" disabled={!searchInput}>
        Search
      </button>
    </form>
  );
};

export default SearchBar;
