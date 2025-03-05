import React from "react";
import { styled } from "styled-components";

const FilmReelSideWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 3vw;
  height: 100%;
  background-color: black;
  margin-top: 1vh;
`;

const Blob = styled.div`
  background-color: white;
  width: 60%;
  height: 1.8vh;
  margin: 0;
  border-radius: 0.4em;
`;

export default function FilmReelSide() {
  return (
    <FilmReelSideWrapper>
      {[...Array(36)].map((e, i) => (
        <Blob> </Blob>
      ))}
    </FilmReelSideWrapper>
  );
}
