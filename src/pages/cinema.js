import React from "react";
import FontStyles from "../styles/globalStyles";
import { graphql } from "gatsby";
import styled from "styled-components";
import Blob from "../components/Blob";
import Blurb from "../components/Blurb";
import ModelSingle from "../components/ModelSingle";

export default function cinema({ data }) {
  data = data.wpgraphql.cinemas.nodes[1].cinema;
  console.log(data.whereToDrinkNearby);
  const questionsA = [
    ["Borough?", data.borough],
    [
      "Where to Drink Nearby?",
      data.whereToDrinkNearby.first,
      data.whereToDrinkNearby.second,
      data.whereToDrinkNearby.third,
    ],
    [
      "Come Here For?",
      data.comeHereFor.first,
      data.comeHereFor.second,
      data.comeHereFor.third,
    ],
    ["Tickets?", "£" + data.tickets],
  ];
  console.log(questionsA);
  const questionsB = [
    ["Type of Organisation", data.typeOfOrganisation],
    [
      "Where to Eat Nearby?",
      data.whereToEatNearby.first,
      data.whereToEatNearby.second,
      data.whereToEatNearby.third,
    ],
    [
      "Other Tips?",
      data.otherTips.first,
      data.otherTips.second,
      data.otherTips.third,
    ],
    [
      "Nearby Stations?",
      data.nearbyStations.first,
      data.nearbyStations.second,
      data.nearbyStations.third,
    ],
  ];
  const colors = [data.primaryColor, data.secondaryColor];
  const copy = data.blurb;

  const Title = styled.h1`
    font-family: PINUP;
    font-size: 5em;
    text-align: center;
  `;

  const Wrapper = styled.div`
    position: relative;
  `;

  const ColumnWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    gap: 30px;
    width: 90%;
    margin: 0 auto;
    text-align: center;
    position: absolute;
    z-index: 10;
    top: 0;
    pointer-events: none;
  `;

  const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 33vw;
    text-align: center;
    max-height: 90vh;
  `;

  return (
    <div>
      <FontStyles />
      <Wrapper>
        <ModelSingle
          colors={colors}
          name={data.name.replace(/\s/g, "").toLowerCase()}
        />
        <ColumnWrapper>
          <Column>
            {questionsA.map((questionsA, index) => (
              <Blob key={index} question={questionsA} colors={colors}></Blob>
            ))}
          </Column>
          <Column style={{ marginTop: 20 + "px" }}>
            <Title>{data.name}</Title>
            <Blurb copy={copy} colors={colors}></Blurb>
          </Column>
          <Column>
            {questionsB.map((questionsB, index) => (
              <Blob key={index} question={questionsB} colors={colors}></Blob>
            ))}
          </Column>
        </ColumnWrapper>
      </Wrapper>
    </div>
  );
}

export const query = graphql`
  query cinemaQuery {
    wpgraphql {
      cinemas {
        nodes {
          cinema {
            name
            primaryColor
            secondaryColor
            blurb
            borough
            tickets
            nearbyStations {
              first
              second
              third
            }
            otherTips {
              first
              second
              third
            }

            typeOfOrganisation
            whereToDrinkNearby {
              first
              second
              third
            }
            whereToEatNearby {
              first
              second
              third
            }

            comeHereFor {
              first
              third
              second
            }
          }
        }
      }
    }
  }
`;
