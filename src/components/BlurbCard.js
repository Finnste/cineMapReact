import React from "react";
import "../styles/cardStyles.css";
import "../styles/blurbCardStyles.css";
import FontStyles from "../styles/globalStyles";


export default function BlurbCard() {
  return (
    <div className="cardWarpper">
      <FontStyles />

      <div className="blurb">
        <p>
          The Rio Cinema’s striking art deco frontage has loomed over Kingsland
          High Street since 1937 – but the cinema’s history stretches back even
          further to its establishment as the Kingsland Empire in 1909, a small
          screening room set up by local entrepreneur Clara Ludski. Since then,
          the Rio has had many guises, specialising at various times in animated
          films, martial arts movies and even ‘adult’ cinema with live burlesque
          performers. More than a century on, the Rio remains a cherished
          community venue and a familiar presence in a corner of London
          otherwise transformed by gentrification.
        </p>
      </div>
    </div>
  );
}
