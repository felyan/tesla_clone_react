import React from 'react';
import styled from "styled-components";

const Section = () => {
  return (
      <Wrap>
          <ItemText>
              <h1>Lorem ipsum</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </ItemText>
          <ButtonGroup>
              <LeftButton></LeftButton>
              <RightButton></RightButton>
          </ButtonGroup>
          <DownArrow src="/images/down-arrow.svg" />
      </Wrap>
  )
}

export default Section;

const Wrap = styled.div`
width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  // background-image: url("https://images.unsplash.com/photo-1656480993144-3d735f3a12ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80");
    display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const ItemText = styled.div`
  padding-top: 20vh;
  text-align: center;
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: 8px;
`;

const RightButton = styled(LeftButton)`
  background: white;
  opacity: 0.65;
  color: black;
`;

const DownArrow = styled.img`
  height: 40px;
  overflow-x: hidden;
  animation: animateDown infinite 1.5s;
`;

