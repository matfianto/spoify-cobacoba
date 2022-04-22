import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

const SearchBar = (props) => {
  const { handleSearchSubmit, handleSearchChange, searchInput } = props;
  return (
    <form className="search-bar" onSubmit={handleSearchSubmit}>
      <label htmlFor="keyword" className="search-label">
      🔍 Search your song 🔎
      </label>
      <Box
      component="form"
      sx={{
        '& > :not(style)': { mb: 2, mt: 2, width: '115ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField label="Search the song" variant="outlined"
                  style={{borderRadius:'50',
                    backgroundColor: "white" }}
      // eslint-disable-next-line react/jsx-no-duplicate-props
      id="keyword"
      name="keyword"
      type="text"
      className="input"
      onChange={handleSearchChange}
      value={searchInput}
      placeholder="Enter the keyword for search the song"
      required
      />
    </Box>
      {/* <input
        id="keyword"
        name="keyword"
        type="text"
        className="input"
        onChange={handleSearchChange}
        value={searchInput}
        placeholder="Enter the keyword for search the song"
        required
      /> */}
      <button type="submit" className="btn btn--search" disabled={!searchInput}>
        Search
      </button>
    </form>
  );
};

export default SearchBar;
