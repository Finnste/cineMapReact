import React from "react";
import "../styles/cinemaArchiveStyles.css";
import Navbar from "../components/Navbar";
import ArchiveModel from "../components/ArchiveModel.js";

const cinemaArchive = () => {
  var cinemaArray = [
    "riocinema",
    "actonecinema",
    "arthouse",
    "chiswick",
    "peckhamplex",
    "lumiere",
    "phoenixcinema",
    "watermans",
    "lexi",
    "closeup",
    "genesis",
    "thecastlecinema",
    "jw3",
    "thecastlecinema",
    "thecastlecinema",
    "thecastlecinema",
    "thecastlecinema",
    "thecastlecinema",
    "thecastlecinema",
    "thecastlecinema",
    "thecastlecinema",
    "thecastlecinema",
    "thecastlecinema",
    "thecastlecinema",
    "thecastlecinema",
  ];

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }
  shuffleArray(cinemaArray);

  return (
    <div className="archiveBody">
      <Navbar />
      <div className="indexWrapper">
        <ArchiveModel/>
      </div>
    </div>
  );
};

export default cinemaArchive;
