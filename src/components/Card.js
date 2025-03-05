import React from "react";
import ImageCard from "../components/ImageCard";
//import BlurbCard from "../components/BlurbCard";
import QuestionCard from "../components/QuestionCard";
import ModelCard from "../components/ModelCard";
// import "../styles/cardStyles.css";
import styled from "styled-components";

const CardWrapper = styled.div`
  width: 100%;
  height: auto;
  text-align: center;
  padding: 10px;
  background-color: black;
  margin: 1em 0;
  border-radius: 0.4em;
  z-index: 100;
  border: 6px solid white;
`;

const BlurbCard = styled(CardWrapper)`
  font-family: PINUP;
  font-size: 1em;
  color: black;
  background-color: white;
  border-radius: 5px;
  text-align: left;
  padding: 0.6em;
`;

export default function Card(props) {
  switch (props.type) {
    case "image":
      return (
        <CardWrapper>
          <img src={"/" + "riocinema" + "/" + props.num + ".jpg"}></img>
        </CardWrapper>
      );
    case "model":
      return (
        <CardWrapper>
          <ModelCard colors={["white", "yellow"]} name="riocinema" />
        </CardWrapper>
      );
    case "blurb":
      return (
          <BlurbCard>
              The Rio Cinema’s striking art deco frontage has loomed over
              Kingsland High Street since 1937 – but the cinema’s history
              stretches back even further to its establishment as the Kingsland
              Empire in 1909, a small screening room set up by local
              entrepreneur Clara Ludski. Since then, the Rio has had many
              guises, specialising at various times in animated films, martial
              arts movies and even ‘adult’ cinema with live burlesque
              performers. More than a century on, the Rio remains a cherished
              community venue and a familiar presence in a corner of London
              otherwise transformed by gentrification.
          </BlurbCard>
      );
    case "question":
      return (
        <CardWrapper>
          <QuestionCard question={props.question} answers={props.answers} />
        </CardWrapper>
      );
  }
}
