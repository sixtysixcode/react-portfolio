import "./index.scss";
import React, {useState} from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import { faDownload } from '@fortawesome/free-solid-svg-icons'

const NavBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
`

const Header = styled.section`
  display: flex;
  flex-direction: row;
  height: calc(100vh - 20px);

  &:before {
    content: '';
    pointer-events: none;
    opacity: 1;
    background: radial-gradient(circle at 20% 35%, transparent 0, transparent 2px, black 3px, black 4px, transparent 4px),
    radial-gradient(circle at 75% 44%, transparent 0, transparent 2px, black 3px, black 4px, transparent 4px),
    radial-gradient(circle at 46% 52%, transparent 0, transparent 4px, black 5px, black 6px, transparent 6px);

    width: 100%;
    height: 300%;
    top: 0;
    left: 0;
    position: absolute;
    animation: bubbles 20s linear infinite both;
  }
  @keyframes bubbles {
    from {
      transform: translate();
    }
    to {
      transform: translate(0, -66.666%);
    }
  }
`

const ButtonRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  transition: 0.5s ease-in-out;
  margin-top: 20px;
`

const BigButton = styled.button`
  width: 6.5rem;
  height: 2.5rem;
  border-radius: 25px;
  background: transparent;
  color: #e63946;
  border: 1px solid #e63946;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: 0.4s ease-out;
  gap: 5px;
  
  &:hover {
    background: #e63946;
    color: white;
    transition: 0.2s ease-out;
  }
  
  &.github {
    border: 1px solid black;
    color: black;
    &:hover {
      background: black;
      color: white;
    }
  }
`

const HeaderInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 10px;
  margin: 25vh 0 0 5vw;

  &:hover {
    h1 {
      margin-left: 16px;
      transition: 0.30s ease-in-out;
    }

    h2 {
      margin-left: 8px;
      transition: 0.25s ease-in-out;
    }

    p {
      margin-left: 32px;
      transition: 0.35s ease-in-out;
    }

    .ButtonRow {
      margin-left: 55px;
      transition: 0.35s ease-in-out;
    }
  }

  h1, h2, p {
    transition: 0.5s ease-in-out;
  }

  h1, h2 {
    margin: 0;
  }

  h1 {
    color: #e63946;
    font-size: 46px;
  }

  h2 {
    color: #122144;
    font-size: 20px;
  }

  p {
    color: gray;
    font-size: 16px;
    margin: 0;
  }
`

const FlexRowBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

const MainButton = styled.button`
  display: inline-block;
  border-radius: 3px;
  margin: 0.5rem 1rem;
  padding: 0.5rem 1.5rem;
  background: transparent;
  color: gray;
  border: none;
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    top: -8px;
    left: 50%;
    transform: translateX(-50%) rotate(45deg);
    height: 6px;
    width: 6px;
    background: gray;
    opacity: 0.25;
    transition: 0.1s ease-out;
  }

  &:hover {
    color: gray;

    &:before {
      opacity: 1;
      top: -12px;
      transition: 0.1s ease-out;
    }
  }

  &.active {
    color: #e63946;
    opacity: 1;

    &:before {
      background: #e63946;
      opacity: 1;
      top: -12px;
    }
  }
`

const Logo = styled.button`
  font-size: 16px;
  color: #e63946;
  font-weight: bold;
  background: transparent;
  border: none;
`

function App() {
    const [currentTab, setCurrentTab] = useState('where');

    const changeTab = (tab) => {
        setCurrentTab(tab);
    }

    return (
        <div className="App">
            <NavBar>
                <FlexRowBox>
                    <Logo>ALX</Logo>
                </FlexRowBox>
                <FlexRowBox>
                    <MainButton className={currentTab === 'where' ? "active" : ""}
                                onClick={() => changeTab('where')}>WHERE</MainButton>
                    <MainButton className={currentTab === 'why' ? "active" : ""}
                                onClick={() => changeTab('why')}>WHY</MainButton>
                    <MainButton className={currentTab === 'how' ? "active" : ""}
                                onClick={() => changeTab('how')}>HOW</MainButton>
                </FlexRowBox>
                <FlexRowBox>

                </FlexRowBox>
            </NavBar>
            <Header>
                <HeaderInfo>
                    <h2>Hello, I'm Alex Barnes.</h2>
                    <h1>Front-End Developer</h1>
                    <p>Specialising in Javascript & UI Design</p>
                    <ButtonRow className="ButtonRow">
                        <BigButton className="github">Github<FontAwesomeIcon icon={faGithub} /></BigButton>
                        <BigButton>CV<FontAwesomeIcon icon={faDownload} /></BigButton>
                    </ButtonRow>
                </HeaderInfo>
            </Header>
        </div>
    );
}

export default App;
