import seriesData from "../api/seriesData.json";

const NetflixSeries = () => {
  // const canWatch = () => {
  //   if (age >= 18) "Allowed";
  //   return "Not Allowed";
  // };

  return (
    <div>
      <div>
        <img src={seriesData[0].img_url} alt="qot" height="40%" width="40%"/>
      </div>
      <h2>{seriesData[0].name}</h2>
      <h3>Rating: {seriesData[0].rating}</h3>
      <h4>Genre: {seriesData[0].genre}</h4>
      <p>Summary: {seriesData[0].description}</p>
      <p>Cast: {seriesData[0].cast}</p>
      <a href={seriesData[0].watch_url} target="_blank">
          <button>Watch Now</button>
      </a>
      {/* <button>{age >= 12 ? "Allowed" : "Not Allowed"}</button> */}
      {/* <button>{canWatch}</button> */}
    
    </div>
  );
};
export default NetflixSeries;
