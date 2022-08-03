import React from "react";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import styled from 'styled-components';
import {FooterBigButton} from "../App";
import {faHeart} from "@fortawesome/free-solid-svg-icons";

const FooterContainer = styled.div`
  position: relative;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100px;
  padding: 5px 0;
`

const FooterRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;
  align-items: center;
  justify-content: center;
  
  svg {
    color: #e63946;
  }
`

const Footer = () => {

    return (
        <FooterContainer className="footer">
            <FooterRow>
                <FooterBigButton>Made With ~ <FontAwesomeIcon icon={faHeart}/> ~ Alex Barnes 2022.</FooterBigButton>
            </FooterRow>
        </FooterContainer>
    )
}

export default Footer;
