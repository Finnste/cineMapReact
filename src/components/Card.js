import React from "react";
import ImageCard from "../components/ImageCard";
import BlurbCard from "../components/BlurbCard";
import QuestionCard from "../components/QuestionCard";
import ModelCard from "../components/ModelCard";
import "../styles/cardStyles.css";

export default function Card(props) {
  switch (props.type) {
    case "image":
      return (
        <div className="cardWrapper">
          <ImageCard cinema="riocinema" num={props.num} />
        </div>
      );
    case "model":
      return (
        <div className="cardWrapper">
          <ModelCard colors={["white", "yellow"]} name="riocinema" />
        </div>
      );
    case "blurb":
      return (
        <div className="cardWrapper">
          <BlurbCard />
        </div>
      );
    case "question":
      return (
        <div className="cardWrapper">
          <QuestionCard question={props.question} answers={props.answers} />
        </div>
      );
  }
}
