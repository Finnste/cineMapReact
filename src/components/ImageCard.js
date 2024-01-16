import React from "react";
import "../styles/imageCardStyles.css";

export default function ImageCard(props) {
  const src = "/" + props.cinema + "/" + props.num + ".jpg";
  return (
    <div>
      <img src={src}></img>
    </div>
  );
}
