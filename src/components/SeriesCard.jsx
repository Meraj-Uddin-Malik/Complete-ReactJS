export const SeriesCard = (props) => {
  const {id, name, img_url, rating, genre, description, cast, watch_url } =
    props.data;
  return (
    <li key={id}>
      <div>
        <img
          src={img_url}
          alt="qot"
          height="40%"
          width="40%"
        />
      </div>
      <h2>{name}</h2>
      <h3>Rating: {rating}</h3>
      <h4>Genre: {genre}</h4>
      <p>Summary: {description}</p>
      <p>Cast: {cast}</p>
      <a href={watch_url} target="_blank">
        <button>Watch Now</button>
      </a>
    </li>
  );
};
