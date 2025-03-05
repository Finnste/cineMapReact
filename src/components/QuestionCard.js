import React from "react";
import FontStyles from "../styles/globalStyles";
import styled from "styled-components";

const QuestionCardWrapper = styled.div`
  // border: 2px solid white;
  padding: 0 0.6em;
`;

const QuestionTitle = styled.div`
  font-family: PINUP;
  font-size: 1em;
  color: white;
  margin: 0.5em 0;
`;

const Answers = styled.div`
  max-width: 100%;
  /* border: 2px solid green; */
`;

const QuestionAnswer = styled.p`
  font-family: PINUP;
  font-size: 0.8em;
  color: black;
  text-align: left;
  background-color: white;
  border-radius: 5px;
  padding: 0.6em 1em;
  width: max-content;
  max-width: 60%;
  margin-bottom: 2em;
  /* overflow: wrap; */
`;

const Right = styled(QuestionAnswer)`
  text-align: right;
  align-items: end;
  margin-right: 0;
  margin-left: auto;
`;

export default function QuestionCard(props) {
  return (
    <div className="">
      <FontStyles />
      <QuestionCardWrapper>
        <div>
          {props.question && <QuestionTitle>{props.question}</QuestionTitle>}
        </div>
        <Answers>
          <div>
            {props.answers[1] && (
              <QuestionAnswer>{props.answers[1]}</QuestionAnswer>
            )}
          </div>
          <div>
            {props.answers[2] && (
              <Right>
                {props.answers[2]}
              </Right>
            )}
          </div>
          <div>
            {props.answers[3] && (
              <QuestionAnswer>{props.answers[3]}</QuestionAnswer>
            )}
          </div>
        </Answers>
      </QuestionCardWrapper>
    </div>
  );
}
