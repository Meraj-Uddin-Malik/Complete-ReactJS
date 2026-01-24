import seriesData from "../api/seriesData.json";

const NetflixSeries = () => {
  // const canWatch = () => {
  //   if (age >= 18) "Allowed";
  //   return "Not Allowed";
  // };

  return (
    <ul>
      <li>
        <div>
          <img src={seriesData[0].img_url} alt="qot" height="40%" width="40%" />
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
      </li>

      <li>
        <div>
          <img src={seriesData[1].img_url} alt="qot" height="40%" width="40%" />
        </div>
        <h2>{seriesData[1].name}</h2>
        <h3>Rating: {seriesData[1].rating}</h3>
        <h4>Genre: {seriesData[1].genre}</h4>
        <p>Summary: {seriesData[1].description}</p>
        <p>Cast: {seriesData[1].cast}</p>
        <a href={seriesData[1].watch_url} target="_blank">
          <button>Watch Now</button>
        </a>
        {/* <button>{age >= 12 ? "Allowed" : "Not Allowed"}</button> */}
        {/* <button>{canWatch}</button> */}
      </li>

      <li>
        <div>
          <img src={seriesData[2].img_url} alt="qot" height="40%" width="40%" />
        </div>
        <h2>{seriesData[2].name}</h2>
        <h3>Rating: {seriesData[2].rating}</h3>
        <h4>Genre: {seriesData[2].genre}</h4>
        <p>Summary: {seriesData[2].description}</p>
        <p>Cast: {seriesData[2].cast}</p>
        <a href={seriesData[2].watch_url} target="_blank">
          <button>Watch Now</button>
        </a>
        {/* <button>{age >= 12 ? "Allowed" : "Not Allowed"}</button> */}
        {/* <button>{canWatch}</button> */}
      </li>

      <li>
        <div>
          <img src={seriesData[3].img_url} alt="qot" height="40%" width="40%" />
        </div>
        <h2>{seriesData[3].name}</h2>
        <h3>Rating: {seriesData[3].rating}</h3>
        <h4>Genre: {seriesData[3].genre}</h4>
        <p>Summary: {seriesData[3].description}</p>
        <p>Cast: {seriesData[3].cast}</p>
        <a href={seriesData[3].watch_url} target="_blank">
          <button>Watch Now</button>
        </a>
        {/* <button>{age >= 12 ? "Allowed" : "Not Allowed"}</button> */}
        {/* <button>{canWatch}</button> */}
      </li>

      <li>
        <div>
          <img src={seriesData[4].img_url} alt="qot" height="40%" width="40%" />
        </div>
        <h2>{seriesData[4].name}</h2>
        <h3>Rating: {seriesData[4].rating}</h3>
        <h4>Genre: {seriesData[4].genre}</h4>
        <p>Summary: {seriesData[4].description}</p>
        <p>Cast: {seriesData[4].cast}</p>
        <a href={seriesData[4].watch_url} target="_blank">
          <button>Watch Now</button>
        </a>
        {/* <button>{age >= 12 ? "Allowed" : "Not Allowed"}</button> */}
        {/* <button>{canWatch}</button> */}
      </li>

      <li>
        <div>
          <img src={seriesData[5].img_url} alt="qot" height="40%" width="40%" />
        </div>
        <h2>{seriesData[5].name}</h2>
        <h3>Rating: {seriesData[5].rating}</h3>
        <h4>Genre: {seriesData[5].genre}</h4>
        <p>Summary: {seriesData[5].description}</p>
        <p>Cast: {seriesData[5].cast}</p>
        <a href={seriesData[5].watch_url} target="_blank">
          <button>Watch Now</button>
        </a>
        {/* <button>{age >= 12 ? "Allowed" : "Not Allowed"}</button> */}
        {/* <button>{canWatch}</button> */}
      </li>

      <li>
        <div>
          <img src={seriesData[6].img_url} alt="qot" height="40%" width="40%" />
        </div>
        <h2>{seriesData[6].name}</h2>
        <h3>Rating: {seriesData[6].rating}</h3>
        <h4>Genre: {seriesData[6].genre}</h4>
        <p>Summary: {seriesData[6].description}</p>
        <p>Cast: {seriesData[6].cast}</p>
        <a href={seriesData[6].watch_url} target="_blank">
          <button>Watch Now</button>
        </a>
        {/* <button>{age >= 12 ? "Allowed" : "Not Allowed"}</button> */}
        {/* <button>{canWatch}</button> */}
      </li>
    </ul>
  );
};
export default NetflixSeries;
