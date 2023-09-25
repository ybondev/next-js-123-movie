import { FaSearch } from "react-icons/fa";
import { useState } from "react";
const Search = ({ onSubmit }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    onSubmit(query);
  };

  const handleClickSubmit = () => {
    window.location.href = `/search/${query}`;
  };
  return (
    <form action={`/search/${query}`} onSubmit={handleSubmit}>
      <input
        type="text"
        className="text form-control"
        placeholder="Search here..."
        value={query}
        onChange={handleInputChange}
      />
      <FaSearch className="fa_icon" onClick={handleClickSubmit} />
    </form>
  );
};

export default Search;
