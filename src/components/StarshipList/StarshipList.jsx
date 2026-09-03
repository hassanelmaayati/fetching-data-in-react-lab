import StarshipCard from '../StarshipCard/StarshipCard';

const StarshipList = ({ starships }) => {
  if (!starships || starships.length === 0) {
    return <p>No starships found.</p>;
  }

  return (
    <section>
      <ul>
        {starships.map((starship, index) => (
          <StarshipCard key={index} starship={starship} />
        ))}
      </ul>
    </section>
  );
};

export default StarshipList;