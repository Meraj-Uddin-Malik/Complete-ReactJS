import styles from "./Netflix.module.css";
import styled from "styled-components";

export const SeriesCard = (props) => {
  console.log(props);
  // const { currElem } = props;
  const { img_url, name, rating, description, cast, genre, watch_url } =
    props.currElem;

  // const btn_style = {}
  // const ButtonMeraj = styled.button ({
  //   padding: "1.2rem 2.4rem",
  //   border: "none",
  //   fontSize: "1.6rem",
  //   backgroundColor: `${rating >= 8.5 ? "#7dcea0" : "#f7dc6f"}`,
  //   color: "var(--btn-color)",
  //   fontWeight: "bold",
  //   cursor: "pointer",
  // });

  const ButtonMeraj = styled.button`
    padding: 1.2rem 2.4rem;
    border: none;
    font-size: 1.3rem;
    background-color: ${(props) =>
      props.rating >= 8.5 ? "#7dcea0" : "#f7dc6f"};
    color: var(--btn-color);
    font-weight: bold;
    cursor: pointer;
  `;

  const ratingClass = rating >= 8.5 ? styles.super_hit : styles.average;

  const Rating = styled.h3`
    font-size: 1.4rem;
    color: #7dcea0;
    text-transform: capitalize;
  `;

  return (
    <li className={styles.card}>
      <div>
        <div>
          <img src={img_url} alt={name} width="40%" height="40%" />
        </div>
        <div className="flex flex-col gap-6 p-11 px-11 py-16">
          <h3>Name : {name}</h3>
          <Rating>
            Rating :
            <span className={`${styles.rating} ${ratingClass}`}>{rating}</span>
          </Rating>
          <p>Genre : {genre.join(",")}</p>
          <p>Cast : {cast.join(",")}</p>
          <p>Summary : {description}</p>
          <a href={watch_url} target="blank">
            {/* <button style={btn_style}>Watch Now</button> */}
            <ButtonMeraj rating={rating}>Watch Now</ButtonMeraj>
          </a>
        </div>
      </div>
      <br />
    </li>
  );
};
