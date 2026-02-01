import { SeriesCard } from "./SeriesCard";
import seriesData from "../api/seriesData.json";

const NetflixSeries = () => {
  return (
    <ul>
      {seriesData.map((currentSeries) => {
        return (
          <SeriesCard key={currentSeries.id} currentSeries={currentSeries} />
        );
      })}
    </ul>
  );
};
export default NetflixSeries;
