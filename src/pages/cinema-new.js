import * as React from "react";
import FontStyles from "../styles/globalStyles";
import { graphql, Link } from "gatsby";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import "../styles/cinemaNewStyles.css";

const Cinema = ({ data }) => {
  var cinemaData = data.wpgraphql.cinemas.nodes[3].cinema;

  const questions = [
    ["Borough...", cinemaData.borough],
    [
      "Where to Drink Nearby...",
      cinemaData.whereToDrinkNearby.first,
      cinemaData.whereToDrinkNearby.second,
      cinemaData.whereToDrinkNearby.third,
    ],
    [
      "Come Here For...",
      cinemaData.comeHereFor.first,
      cinemaData.comeHereFor.second,
      cinemaData.comeHereFor.third,
    ],
    ["Tickets...", cinemaData.tickets],
    [
      "Acessability...",
      cinemaData.access.first,
      cinemaData.access.second,
      cinemaData.access.third,
    ],
    [
      "Where to Eat Nearby...",
      cinemaData.whereToEatNearby.first,
      cinemaData.whereToEatNearby.second,
      cinemaData.whereToEatNearby.third,
    ],
    [
      "Other Tips...",
      cinemaData.otherTips.first,
      cinemaData.otherTips.second,
      cinemaData.otherTips.third,
    ],
    [
      "Nearby Stations...",
      cinemaData.nearbyStations.first,
      cinemaData.nearbyStations.second,
      cinemaData.nearbyStations.third,
    ],
  ];

  return (
    <div>
      <FontStyles />
      <Navbar />
      <div className="columnWrapper">
        <div className="column">
          <Card type="image" cinema={cinemaData.name} num="1" />
          <Card type="image" cinema={cinemaData.name} num="2" />{" "}
          <Card
            type="question"
            question={questions[1][0]}
            answers={questions[1]}
          />
          <Card type="image" cinema={cinemaData.name} num="4" />
          <Card type="image" cinema={cinemaData.name} num="6" />
        </div>
        <div className="column">
          
          <Card
            type="question"
            question={questions[2][0]}
            answers={questions[2]}
          />{" "}
          <Card type="image" cinema={cinemaData.name} num="3" />
          <Card
            type="question"
            question={questions[3][0]}
            answers={questions[3]}
          />
          <Card type="image" cinema={cinemaData.name} num="8" />
          <Card
            type="question"
            question={questions[4][0]}
            answers={questions[4]}
          />
        </div>
        <div className="column">
          <Card
            type="question"
            question={questions[5][0]}
            answers={questions[5]}
          />
          <Card
            type="question"
            question={questions[6][0]}
            answers={questions[6]}
          />
          <Card
            type="question"
            question={questions[7][0]}
            answers={questions[7]}
          />{" "}
          <Card type="model" />
        </div>
        <div className="column"><Card type="blurb" />
          <Card
            type="question"
            question={questions[0][0]}
            answers={questions[0]}
          /></div>
        <Card type="image" cinema={cinemaData.name} num="7" />
        <div className="column">
          {" "}
          <Card type="image" cinema={cinemaData.name} num="5" />
          <Card type="image" cinema={cinemaData.name} num="9" />
        </div>
      </div>
    </div>
  );
};

export default Cinema;

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
