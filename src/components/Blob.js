import React from "react";
import styled from "styled-components";
import FontStyles from "../styles/globalStyles";

const BlobContainer = styled.div`
  --primary-color: ${(props) => props.colors[0]};
  --secondary-color: ${(props) => props.colors[1]};
  position: relative;
  display: block;
  background-color: var(--primary-color);
  background-size: 20% 100% !important;
  background-position: left center;
  margin: 4em auto;
  width: min-content;
  max-height: 80%;
  border: 4px solid var(--secondary-color);
  border-radius: 50%;
  -webkit-box-shadow: 0 0 5px var(--secondary-color);
  -moz-box-shadow: 0 0 5px var(--secondary-color);
  box-shadow: 0 0 5px var(--secondary-color);
  justify-content: center;
`;

const Question = styled.h1`
  display: inline-block;
  margin-top: -1em;
  padding: 0.2em 0.5em;
  width: auto;
  font-family: PINUP;
  background-color: var(--primary-color);
  color: var(--secondary-color);
  text-align: center;
  text-shadow: 0 0 1px #000;
  border: 4px solid var(--secondary-color);
  -webkit-box-shadow: 0 0 5px var(--secondary-color);
  -moz-box-shadow: 0 0 5px var(--secondary-color);
  box-shadow: 0 0 5px var(--secondary-color);
  border-radius: 2rem;
  @media screen and (min-aspect-ratio: 2000/1000) {
    font-size: 0.9vw;
  }
  @media screen and (min-aspect-ratio: 2000/900) {
    font-size: 0.8vw;
  }
  @media screen and (min-aspect-ratio: 2000/800) {
    font-size: 0.7vw;
  }
  @media screen and (min-aspect-ratio: 2000/700) {
    font-size: 0.6vw;
  }
  @media screen and (min-aspect-ratio: 2000/600) {
    font-size: 0.5vw;
  }
`;

const AnswersContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Answer = styled.p`
  background-color: var(--primary-color);
  width: min-content;
  font-family: PINUP;
  line-height: 1;
  margin: -0.3em 0.6em;
  padding: 0.8rem;
  text-shadow: 0 0 1px #000;
  border: 4px solid var(--secondary-color);
  border-radius: 2rem;
  -webkit-box-shadow: inherit;
  -moz-box-shadow: 0 0 5px inherit;
  box-shadow: 0 0 5px var(--secondary-color);
  @media screen and (min-aspect-ratio: 2000/1000) {
    font-size: 0.9vw;
  }
  @media screen and (min-aspect-ratio: 2000/900) {
    font-size: 0.8vw;
  }
  @media screen and (min-aspect-ratio: 2000/800) {
    font-size: 0.7vw;
  }
  @media screen and (min-aspect-ratio: 2000/700) {
    font-size: 0.6vw;
  }
  @media screen and (min-aspect-ratio: 2000/600) {
    font-size: 0.5vw;
  }
`;

const Blob = (props) => {
  const question = props.question;
  var answers = props.question;
  const colors = props.colors;
  answers = answers.slice(1, answers.length);
  for (var i = 0; i < answers.length; i++) {
    if (answers[i] == null) {
      answers.splice(i, 1);
    }
  }
  return (
    <div>
      <FontStyles />

      <BlobContainer colors={colors}>
        <Question colors={colors}> {question[0]} </Question>
        <AnswersContainer>
          {answers.map((answers, index) => (
            <Answer key={index} colors={colors}>
              {answers}
            </Answer>
          ))}
        </AnswersContainer>
      </BlobContainer>
    </div>
  );
};

export default Blob;
