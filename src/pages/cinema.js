import * as React from "react";
import FontStyles from "../styles/globalStyles";
import { graphql } from "gatsby";
import Blob from "../components/Blob";
import Blurb from "../components/Blurb";
import ModelSingle from "../components/ModelSingle";
import { useLocation } from 'react-router-dom';
import "../styles/cinemaStyles.css";


const Cinema = ({ data, location }) => {
  var i = data.wpgraphql.cinemas.nodes.length;
  while (i--) {
    if (data.wpgraphql.cinemas.nodes[i].cinema.name === location.state.cinemaName) {
      data = data.wpgraphql.cinemas.nodes[i].cinema;
    }
  }

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

  return (
    <div>
      <FontStyles />
      <div className="wrapper">
        <ModelSingle
          colors={colors}
          name={data.name.replace(/\s/g, "").toLowerCase()}
        />
        <div className="columnWrapper">
          <div className="column">
            {questionsA.map((questionsA, index) => (
              <Blob key={index} question={questionsA} colors={colors}></Blob>
            ))}
          </div>
          <div className="column" style={{ marginTop: 20 + "px" }}>
            <div className="title">{data.name}</div>
            <Blurb copy={copy} colors={colors}></Blurb>
          </div>
          <div className="column">
            {questionsB.map((questionsB, index) => (
              <Blob key={index} question={questionsB} colors={colors}></Blob>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cinema

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
