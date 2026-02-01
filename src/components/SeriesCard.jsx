import seriesData from "../api/seriesData.json";

export const SeriesCard = () => {
  return (
    <li key={currentSeries.id}>
      <div>
        <img src={currentSeries.img_url} alt="qot" height="40%" width="40%" />
      </div>
      <h2>{currentSeries.name}</h2>
      <h3>Rating: {currentSeries.rating}</h3>
      <h4>Genre: {currentSeries.genre}</h4>
      <p>Summary: {currentSeries.description}</p>
      <p>Cast: {currentSeries.cast}</p>
      <a href={currentSeries.watch_url} target="_blank">
        <button>Watch Now</button>
      </a>
    </li>
  );
};
