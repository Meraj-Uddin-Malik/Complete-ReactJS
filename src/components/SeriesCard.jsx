import style from "./Netflix.module.css";
import styled from "styled-components";

export const SeriesCard = (props) => {
  console.log(props);
  const { name, img_url, rating, genre, description, cast, watch_url } =
    props.data;

  // const btn_style = {};

  // const MineButton = styled.button(
  //   {
  //      padding: "1.2rem 2.4rem",
  //   border: "none",
  //   fontsize: "1.6rem",
  //   backgroundColor:` ${rating >= 8.5 ? "#7dcea0" : "#f7dc6f"}`,
  //   color: "var(--bg-color)",
  //   fontWeight: "bold",
  //   cursor: "pointer",
  //   }
  // )

  const MineButton = styled.button`
    padding: 1.2rem 2.4rem;
    border: none;
    font-size: 1.6rem;
    background-color: ${(prop) => (prop.rating >= 8.5 ? "#7dcea0" : "#f7dc6f")};
    color: var(--bg-color);
    font-weight: bold;
    cursor: pointer;
  `;

  const ratingClass = rating >= 8.5 ? "super_hit" : "average";

  return (
    <li className={style.card}>
      <div>
        <img src={img_url} alt="qot" height="40%" width="40%" />
      </div>

      <div className={style.card_content}>
        <h2>{name}</h2>
        <h4>
          Rating:{" "}
          <span className={`${style[ratingClass]} ${style.rating}`}>
            {rating}
          </span>
        </h4>
        <h4>Genre: {genre}</h4>
        <p>Summary: {description}</p>
        <p>Cast: {cast}</p>
        <a href={watch_url} target="_blank">
          {/* <button style={btn_style}>Watch Now</button> */}

          <MineButton rating={rating}>Watch Now</MineButton>
        </a>
      </div>
    </li>
  );
};
