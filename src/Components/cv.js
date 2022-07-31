import React from "react";
import styled from 'styled-components';
import CV from "../../src/Assets/AlexanderBarnesCV-2022.jpg";

const CvContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 150vh;
  padding: 12vh 0 4vh;

  img {
    height: 150vh;
    box-shadow: 0 0 4px 4px rgba(0,0,0,0.05);
    z-index: 2;
  }
`

const Cv = () => {

    return (
        <CvContainer>
            <img src={CV}/>
        </CvContainer>
    )
}

export default Cv;
