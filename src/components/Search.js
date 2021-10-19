import React, {useState} from "react";

function Search( {search}) {
  const [currentSearch, setCurrentSearch] = useState("")
  function handleSubmit(e) {
    e.preventDefault();
   
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={search}
        onChange={(e) => setCurrentSearch(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
