import { SeriesCard } from "./SeriesCard";

const NetflixSeries = () => {
  return (
    <ul>
      {seriesData.map((currentSeries) => {
       <SeriesCard />
      })}
    </ul>
  );
};
export default NetflixSeries;
