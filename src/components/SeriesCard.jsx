
export const SeriesCard = (props) => {
  return (
    <li key={props.currentSeries.id}>
      <div>
        <img
          src={props.currentSeries.img_url}
          alt="qot"
          height="40%"
          width="40%"
        />
      </div>
      <h2>{props.currentSeries.name}</h2>
      <h3>Rating: {props.currentSeries.rating}</h3>
      <h4>Genre: {props.currentSeries.genre}</h4>
      <p>Summary: {props.currentSeries.description}</p>
      <p>Cast: {props.currentSeries.cast}</p>
      <a href={props.currentSeries.watch_url} target="_blank">
        <button>Watch Now</button>
      </a>
    </li>
  );
};
