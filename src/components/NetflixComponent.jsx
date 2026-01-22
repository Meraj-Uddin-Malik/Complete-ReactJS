const NetflixSeries = () => {
  const seriesName = "Queens Of Tears";
  const rating = 8.2;
  const genre = "Romcom";
  const summary = "A gripping tale of love and loss and redemption and hope.";
  let age = 17;
  let canWatch = "Not Allowed";
  if (age >= 18) {
    canWatch = "Allowed";
  }

  return (
    <div>
      <div>
        <img
          src="./images/qot.jpg"
          alt="Queens Of Tears"
          height={300}
          width={500}
        />
      </div>
      <h2>{seriesName}</h2>
      <h3>Rating: {rating}</h3>
      <h4>Genre: {genre}</h4>
      <p>Summary: {summary}</p>
      <button>{age >= 12 ? "Allowed" : "Not Allowed"}</button>
    </div>
  );
};
export default NetflixSeries;
