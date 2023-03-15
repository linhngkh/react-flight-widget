import { useState } from "react";
import styled, { keyframes } from "styled-components";
const widgetFlipping = keyframes`
0%{transform: rotateX(0deg)}
50%{transform: rotateX(90deg)}
100%{transform: rotateX(0deg)}

`;
const Container = styled.div`
  border: solid 4px rbg(26, 26, 26);
  background-color: black;
  min-width: 20px;
  height: 40px;
  float: left;

  animation-name: ${widgetFlipping};
  animation-duration: 0.5s;
  animation-iteration-count: linear;
`;

const TableLetter = ({ letter, index }) => {
  const [flip, setFlip] = useState(false);

  setTimeout(() => {
    setFlip(true);
  }, 100 * index);
  return (
    <Container className={flip ? "flip" : null} key={index}>
      {flip ? letter : null}
    </Container>
  );
};

export default TableLetter;
