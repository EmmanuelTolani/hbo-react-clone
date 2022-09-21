import React from "react";
import PropTypes from "prop-types";
import "./card.css";

export default function Card(props) {
  return (
    <div className="card">
      <img className="card__img" src={props.imageUrl} />
      <span className="card__title">{props.title}</span>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string,
  imageUrl: PropTypes.string,
};

Card.defaultProps = {
  title: "Goku",
  imageUrl:
    "https://www.fightersgeneration.com/nf2/char/dbfz/goku/dbfz-goku-official-artwork.jpg",
};
