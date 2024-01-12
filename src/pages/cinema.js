import * as React from "react";
import FontStyles from "../styles/globalStyles";
import { graphql, Link } from "gatsby";
import Blob from "../components/Blob";
import Blurb from "../components/Blurb";
import ModelSingle from "../components/ModelSingle";
import "../styles/cinemaStyles.css";

const Cinema = ({ data, location }) => {
  var i = data.wpgraphql.cinemas.nodes.length;
  var cinemaData = data.wpgraphql.cinemas.nodes[2].cinema;
  var cinemaIndex = 0;
  var locationProp = null
  if (location.state) {
    locationProp = location.state.cinemaName;
  }
  while (i--) {
    console.log(data.wpgraphql.cinemas.nodes[i].cinema.name)
    console.log("l" + locationProp)
    if (data.wpgraphql.cinemas.nodes[i].cinema.name === locationProp) {
      cinemaData = data.wpgraphql.cinemas.nodes[i].cinema;
      cinemaIndex = i;
      break;
    }
  }

  const questionsA = [
    ["Borough?", cinemaData.borough],
    [
      "Where to Drink Nearby?",
      cinemaData.whereToDrinkNearby.first,
      cinemaData.whereToDrinkNearby.second,
      cinemaData.whereToDrinkNearby.third,
    ],
    [
      "Come Here For?",
      cinemaData.comeHereFor.first,
      cinemaData.comeHereFor.second,
      cinemaData.comeHereFor.third,
    ],
    ["Tickets?", "£" + cinemaData.tickets],
  ];
  const questionsB = [
    [
      "Acessability?",
      cinemaData.access.first,
      cinemaData.access.second,
      cinemaData.access.third,
    ],
    [
      "Where to Eat Nearby?",
      cinemaData.whereToEatNearby.first,
      cinemaData.whereToEatNearby.second,
      cinemaData.whereToEatNearby.third,
    ],
    [
      "Other Tips?",
      cinemaData.otherTips.first,
      cinemaData.otherTips.second,
      cinemaData.otherTips.third,
    ],
    [
      "Nearby Stations?",
      cinemaData.nearbyStations.first,
      cinemaData.nearbyStations.second,
      cinemaData.nearbyStations.third,
    ],
  ];
  const colors = [cinemaData.primaryColor, cinemaData.secondaryColor];
  const copy = cinemaData.blurb;

  return (
    <div>
      <FontStyles />
      <div className="wrapper">
        <ModelSingle
          colors={colors}
          name={cinemaData.name.replace(/\s/g, "").toLowerCase()}
        />
        <div className="columnWrapper">
          <div className="column">
            {questionsA.map((questionsA, index) => (
              <Blob key={index} question={questionsA} colors={colors}></Blob>
            ))}
          </div>
          <div
            className="column"
            style={{
              marginTop: 20 + "px",
              pointerEvents: "none",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                pointerEvents: "auto",
              }}
            >
              <Link
                to="/cinema"
                state={{
                  cinemaName: checkIndex(data, 1, cinemaIndex),
                }}
                style={{
                  textDecoration: "none",
                  color: "black",
                  fontSize: "4em",
                }}
              >
                &larr;
              </Link>

              <Link
                to="/cinema-index"
                style={{ textDecoration: "none", color: "black" }}
              >
                <div className="title">{cinemaData.name}</div>
              </Link>
              <Link
                to="/cinema"
                state={{
                  cinemaName: checkIndex(data, 2, cinemaIndex),
                }}
                style={{
                  textDecoration: "none",
                  color: "black",
                  fontSize: "4em",
                }}
              >
                &rarr;
              </Link>
            </div>
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
};

export default Cinema;

// function to check if next / previous cinema is out of bound of cinema array
const checkIndex = function (data, a, i) {
  console.log("check" + a);
  // check for lower end of array
  if (a === 1) {
    if (i === 0) {
      const x = data.wpgraphql.cinemas.nodes.length - 1;
      return data.wpgraphql.cinemas.nodes[x].cinema.name;
    } else {
      return data.wpgraphql.cinemas.nodes[i - 1].cinema.name;
    }
  }
  // check for upper end of array
  else {
    if (i === data.wpgraphql.cinemas.nodes.length - 1) {
      return data.wpgraphql.cinemas.nodes[0].cinema.name;
    } else {
      return data.wpgraphql.cinemas.nodes[i + 1].cinema.name;
    }
  }
};

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
            access {
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
            model {
              id
            }
          }
        }
      }
    }
  }
`;
