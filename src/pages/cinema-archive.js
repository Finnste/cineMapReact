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
      <div className="archiveColumnWrapper">
        <div className="archiveColumn">
          <ArchiveModel url={cinemaArray[0]} />
          <ArchiveModel url={cinemaArray[1]} />
          {/* <ArchiveModel url={cinemaArray[2]} />
          <ArchiveModel url={cinemaArray[3]} />
          <ArchiveModel url={cinemaArray[4]} /> */}
        </div>
        <div className="archiveColumn">
          <ArchiveModel url={cinemaArray[5]} />
          <ArchiveModel url={cinemaArray[6]} />
          {/*<ArchiveModel url={cinemaArray[7]} />
          <ArchiveModel url={cinemaArray[8]} />
          <ArchiveModel url={cinemaArray[9]} /> */}
        </div>
        <div className="archiveColumn">
          <ArchiveModel url={cinemaArray[10]} />
          <ArchiveModel url={cinemaArray[11]} />
          {/*<ArchiveModel url={cinemaArray[12]} />
          <ArchiveModel url={cinemaArray[13]} />
          <ArchiveModel url={cinemaArray[14]} /> */}
        </div>
        <div className="archiveColumn">
          <ArchiveModel url={cinemaArray[15]} />
          <ArchiveModel url={cinemaArray[16]} />
          {/* <ArchiveModel url={cinemaArray[17]} />
          <ArchiveModel url={cinemaArray[18]} />
          <ArchiveModel url={cinemaArray[19]} /> */}
        </div>
        <div className="archiveColumn">
          <ArchiveModel url={cinemaArray[20]} />
          <ArchiveModel url={cinemaArray[21]} />
          {/*<ArchiveModel url={cinemaArray[22]} />
          <ArchiveModel url={cinemaArray[23]} />
          <ArchiveModel url={cinemaArray[24]} /> */}
        </div>
      </div>
    </div>
  );
};

export default cinemaArchive;
