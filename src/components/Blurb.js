import React from "react";
import styled from "styled-components";

const BlurbContainer = styled.div`
  --primary-color: ${(props) => props.colors[0]};
  --secondary-color: ${(props) => props.colors[1]};
  font-family: PINUP;
  text-shadow: 0 0 2px #000;
  overflow: scroll;
  background-color: var(--primary-color);
  padding: 1em;
  margin: 0 1em;
  max-height: 30vh;
  border: 4px solid var(--secondary-color);
  -webkit-box-shadow: 0 0 5px var(--secondary-color);
  -moz-box-shadow: 0 0 5px var(--secondary-color);
  box-shadow: 0 0 5px var(--secondary-color);
  border-radius: 2rem;
  text-align: center;
  scrollbar-width: none; /* for Firefox */
  overflow-y: scroll;
  pointer-events: auto;
  @media screen and (min-aspect-ratio: 2000/1000) {
    font-size: 1vw;
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
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Blurb = (props) => {
  return <BlurbContainer colors={props.colors}>{props.copy}</BlurbContainer>;
};

export default Blurb;
