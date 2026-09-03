import { useState, useEffect } from "react";
import * as starshipService from "./services/starshipService";
import StarshipSearch from "./components/StarshipSearch/StarshipSearch";
import StarshipList from "./components/StarshipList/StarshipList";

const App = () => {
  const [starshipsData, setStarshipsData] = useState([]);
  const [displayedStarships, setDisplayedStarships] = useState([]);
  const [lastSearchTerm, setLastSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStarships = async () => {
      try {
        setLoading(true);
        const data = await starshipService.index();
        setStarshipsData(data);
        setDisplayedStarships(data);
      } catch (error) {
        console.error("Error in App:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStarships();
  }, []);

  const handleSearch = (searchTerm) => {
    setLastSearchTerm(searchTerm);

    if (searchTerm.trim() === "") {
      setDisplayedStarships(starshipsData);
      return;
    }

    const filtered = starshipsData.filter((starship) =>
      starship.name.toLowerCase().includes(searchTerm.toLowerCase()),
    );

    setDisplayedStarships(filtered);
  };

  if (loading) {
    return (
      <main>
        <h1>Loading starships...</h1>
      </main>
    );
  }

  return (
    <main>
      <h1>Star Wars Starships</h1>

      <StarshipSearch
        onSearch={handleSearch}
        resultsCount={displayedStarships.length}
        lastSearchTerm={lastSearchTerm}
      />

      <StarshipList starships={displayedStarships} />
    </main>
  );
};

export default App;
