import React, {useEffect, useMemo, useState} from "react";
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
  padding: 8vh 0;
  margin-top: 20vh;
  gap: 40px;
  position: relative;

  h1 {
    font-size: 40px;
    color: #edf2ff;
    z-index:2;
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
    color: white;
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
      opacity: 0.6;
    }
  }

  &.active {
    margin-top: -50px;
    transition: 0.2s ease-out;
    &:before {
      background: #e63946;
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
  justify-content: flex-start;
  flex-direction: column;
  gap: 10px;
  height: 200px;
  margin: 50px 0;
  width: 60%;
  z-index: 2;
  color: #ffffff;
  font-size: 20px;
  text-align: left;
`

const SkillsCode = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: #0a0a0a;
  color: #edf2ff;
  padding: 40px 20px 20px;
  border-radius: 4px;
  justify-content: flex-start;
  overflow: hidden;
  position: relative;
  width: 100%;
  max-width: 800px;
`

const SkillsCodeHeader = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background: #282c34;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 6px;
  padding: 6px 10px;
  
  span {
    height: 10px;
    width: 10px;
    border-radius: 50%;
    background: #73c54d;
    
    &:nth-of-type(1){
      background: #c45a58;
    }
    &:nth-of-type(2){
      background: #edbb3f;
    }
  }
`

const Skills = () => {
    const [activeItem, setActiveItem] = useState("js");
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        handleScroll();

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const text = useMemo(() => {
        let text = "Over 7 years experience writing Javascript, started with Vanilla Javascript but also have experience with jQuery and Typescript.";
        if(activeItem === "react"){
            text = "Two years experience using the React framework, paired with Redux for state management. " +
                "Learning React has opened a whole new realm of possibilities when it comes to building modern user interfaces that 'react' (I am so sorry) instantaneously - " +
                "resulting in a smoother experience for the user.";
        } else if(activeItem === "css"){
            text = "A strong core understanding of CSS has been essential to meeting design goals throughout my career so far. " +
                "Despite using component libraries with React in the past two years, I still rely heavily on my ability to tie elements together and solve styling issues manually.";
        } else if(activeItem === "sass"){
            text = "I prefer to write styling using SASS - an extension of CSS which allows for functionality such as variables, loops and other useful tools.";
        } else if(activeItem === "python"){
            text = "Experience with Django and other Python based back ends.";
        }else if(activeItem === "github"){
            text = "Git has always been my first choice when it comes to version control.";
        }
        return text;
    }, [activeItem]);

    return (
        <SkillsContainer>
            <div className="background" style={{height: scrollY}}/>
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
                <SkillsCode>
                    <SkillsCodeHeader>
                        <span/>
                        <span/>
                        <span/>
                    </SkillsCodeHeader>
                    dev@alx ~ % {text}
                    {activeItem === "github" &&
                        <>
                    <span>dev@alx ~ % git add -u</span>
                    <span>dev@alx ~ % git commit -m 'Great Choice'</span>
                    <span>dev@alx ~ % git push -u origin alex/barnes</span>
                    </>
                    }
                </SkillsCode>
            </SkillsText>
        </SkillsContainer>
    )
}

export default Skills;
