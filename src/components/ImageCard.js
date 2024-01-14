import React from "react";
import "../styles/imageCardStyles.css";
import "../styles/cardStyles.css";

export default function ImageCard(props) {
  const src = "/" + props.cinema + "/" + props.num + ".jpg";
  return (
    <div className="cardWrapper">
      <img src={src}></img>
    </div>
  );
}
