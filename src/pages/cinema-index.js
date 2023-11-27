import * as React from "react";
import Layout from "../components/Layout";
import FontStyles from "../styles/globalStyles";
import ModelIndex from "../components/ModelIndex";
import "../styles/cinemaIndexStyles.css"

function Home() {
  

  const colors = ["red", "red"];

  return (
    <div className="App">
      <FontStyles />

      <div className="content">
        <div className="titleBlock">
          <div className="title">Cinemap London</div>
          <div className="titleCopy">
            This website is a compendium of all 27 independent cinemas in
            London.
          </div>
        </div>
        <div className="indexWrapper">
          <ModelIndex colors={colors} name="riocinema"></ModelIndex>
        </div>
      </div>
    </div>
  );
}

export default Home;
