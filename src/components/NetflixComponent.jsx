import { SeriesCard } from "./SeriesCard";
import seriesData from "../api/seriesData.json";

const NetflixSeries = () => {
  return (
    <ul className="grid">
      {seriesData.map((currentSeries) => {
        return <SeriesCard key={currentSeries.id} data={currentSeries} />;
      })}
    </ul>
  );
};
export default NetflixSeries;
