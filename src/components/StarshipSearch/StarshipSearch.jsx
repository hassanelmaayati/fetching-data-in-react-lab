import { useState } from "react";

const StarshipSearch = ({ onSearch, resultsCount, lastSearchTerm }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [prevSearchTerm, setPrevSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setPrevSearchTerm(searchTerm);

    onSearch(searchTerm);

    setSearchTerm("");
  };

  const handleReset = () => {
    onSearch("");
    setPrevSearchTerm("");
  };

  return (
    <div>
      <div className="search-meta">
        <p>{resultsCount} results shown</p>
        <p>
          {lastSearchTerm
            ? `Last search: "${lastSearchTerm}"`
            : "Search for a starship by name."}
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for a starship..."
        />
        <button type="submit">Search</button>
        {lastSearchTerm && (
          <button type="button" onClick={handleReset}>
            Show all starships
          </button>
        )}
      </form>
    </div>
  );
};

export default StarshipSearch;
