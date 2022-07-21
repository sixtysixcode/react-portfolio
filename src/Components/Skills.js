import React, {useMemo, useState} from "react";
import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faCss3,
    faGithub,
    faJsSquare,
    faPython,
    faReact,
    faSass
} from "@fortawesome/free-brands-svg-icons";

const SkillsContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100vh;
  padding: 12vh 0;
  gap: 40px;
  
  h1 {
    font-size: 40px;
    color: #e63946;
  }
`

const SkillsRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 40px;
  width: 100%;
`

const SkillsItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  position: relative;
  cursor: pointer;
  transition: 0.2s ease-out;
  
  svg {
    font-size: 40px;
    z-index: 2;
  }
  
  &:before {
    z-index: 1;
    content: "";
    border: 2px solid #e63946;
    position: absolute;
    height: 120px;
    width: 120px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(-45deg);
  }

  &:hover {
    &:before {
      background: #e63946;
      opacity: 0.2;
    }
  }
  
  &.active {
    margin-top: -50px;
    transition: 0.2s ease-out;
    &:before {
      background: #e63946;
    }
    svg {
      color: white;
    }
    &:hover {
      &:before {
        background: #e63946;
        opacity: 1;
      }
    }
  }
  
`

const SkillsText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #e1e9fc;
  height: 200px;
  margin: 50px 0;
  width: 60%;]
  color: #122144;
`

const Skills = () => {
    const [activeItem, setActiveItem] = useState("js");

    const text = useMemo(() => {
        let text = "js";
        if(activeItem === "react"){
            text = "react";
        } else if(activeItem === "css"){
            text = "css";
        } else if(activeItem === "sass"){
            text = "sass";
        } else if(activeItem === "python"){
            text = "python";
        }else if(activeItem === "github"){
            text = "github";
        }
        return text;
    }, [activeItem]);

    return (
        <SkillsContainer>
            <h1>Skills</h1>
            <SkillsRow>
                <SkillsItem className={activeItem === "js" ? "active" : ""} onClick={() => setActiveItem("js")}>
                    <FontAwesomeIcon icon={faJsSquare}/>
                </SkillsItem>
                <SkillsItem className={activeItem === "react" ? "active" : ""} onClick={() => setActiveItem("react")}>
                    <FontAwesomeIcon icon={faReact}/>
                </SkillsItem>
                <SkillsItem className={activeItem === "css" ? "active" : ""} onClick={() => setActiveItem("css")}>
                    <FontAwesomeIcon icon={faCss3}/>
                </SkillsItem>
                <SkillsItem className={activeItem === "sass" ? "active" : ""} onClick={() => setActiveItem("sass")}>
                    <FontAwesomeIcon icon={faSass}/>
                </SkillsItem>
                <SkillsItem className={activeItem === "python" ? "active" : ""} onClick={() => setActiveItem("python")}>
                    <FontAwesomeIcon icon={faPython}/>
                </SkillsItem>
                <SkillsItem className={activeItem === "github" ? "active" : ""} onClick={() => setActiveItem("github")}>
                    <FontAwesomeIcon icon={faGithub}/>
                </SkillsItem>
            </SkillsRow>
            <SkillsText>
                <p>{text}</p>
            </SkillsText>
        </SkillsContainer>
    )
}

export default Skills;
