import * as React from "react";
import Layout from "../components/Layout";
import FontStyles from "../styles/globalStyles";
import styled from "styled-components";
import ModelIndex from "../components/ModelIndex";

function Home() {
  const TitleBlock = styled.div`
    top: 40%;
    left: 50%;
    -ms-transform: translateY(-50%) translateX(-50%);
    transform: translateY(-50%) translateX(-50%);
    position: absolute;
    width: max-content;
    z-index: 10;
    pointer-events: none;
  `;

  const Title = styled.h1`
    font-family: PINUP;
    font-size: 5em;
    -webkit-text-stroke: 2px white;
  `;

  const TitleCopy = styled.p`
    font-family: PINUP;
    font-size: 1em;
    text-align: center;
    line-height: 1;
    margin-top: -50px;
  `;

  const IndexWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
  `;

  const colors = ["red", "red"];

  return (
    <div className="App">
      <FontStyles />

      <div className="content">
        <TitleBlock>
          <Title>Cinemap London</Title>
          <TitleCopy>
            This website is a compendium of all 27 independent cinemas in
            London.
          </TitleCopy>
        </TitleBlock>
        <IndexWrapper>
          <ModelIndex colors={colors} name="riocinema"></ModelIndex>
        </IndexWrapper>
      </div>
    </div>
  );
}

export default Home;
