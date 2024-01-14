import React from "react";
import ImageCard from "../components/ImageCard";
import BlurbCard from "../components/BlurbCard";
import QuestionCard from "../components/QuestionCard";
import QuoteCard from "../components/QuoteCard";
import ModelCard from "../components/ModelCard";

export default function Card(props) {
  switch (props.type) {
    case "image":
      return <ImageCard cinema="riocinema" num={props.num} />;
    case "model":
      return <ModelCard colors={["white", "yellow"]} name="riocinema"/>;
    case "blurb":
      return <BlurbCard />;
    case "question":
      return <QuestionCard question={props.question} answers={props.answers} />;
  }
}
