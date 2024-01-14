import React from "react";
import "../styles/cardStyles.css";
import "../styles/questionCardStyles.css";
import FontStyles from "../styles/globalStyles";

export default function QuestionCard(props) {
  return (
    <div className="cardWarpper">
      <FontStyles />
      <div className="questionCard">
        <div>
          {props.question && (
            <p className="questionTitle">{props.question}</p>
          )}
        </div>
        <div>
          {props.answers[1] && (
            <p className="questionAnswer ">{props.answers[1]}</p>
          )}
        </div>
        <div>
          {props.answers[2] && (
            <p className="questionAnswer right">{props.answers[2]}</p>
          )}
        </div>
        <div>
          {props.answers[3] && (
            <p className="questionAnswer ">{props.answers[3]}</p>
          )}
        </div>
      </div>
    </div>
  );
}
