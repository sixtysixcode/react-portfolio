import React, {useEffect, useState} from "react";
import styled from "styled-components";
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import {Icon} from 'leaflet'

const ContactContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
`

const ContactBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 4px;
  height: 50vh;
  width: 80vw;
  max-width: 1200px;
  border: 3px solid #172b58;
  z-index:5;
`

const ContactForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: flex-start;
  justify-content: flex-start;
  height: 100%;
  padding: 30px;
  width: 50%;

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  div {
    width: 100%;
  }

  label {
    color: white;
    margin-bottom: 8px;
  }

  input, textarea {
    border: 1px solid #172b58;
    border-radius: 2px;
    margin-top: 5px;
    width:100%;
  }

  input {
    height: 30px;

    &[type='submit'] {
      padding: 15px 25px;
      height: auto !important;
      background: #e63946;
      color: white;
      font-size: 16px;
      font-weight: bold;
      cursor: pointer;

      &:hover {
        background: #fc4c59;
      }
    }
  }

  textarea {
    height: 100px;
    resize: none;
  }
`

const Map = styled.div`
  display: flex;
  height:100%;
  width:100%;
`

const Title = styled.h1`
  color: white;
`

const Contact = () => {

    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scroll = window.scrollY - 400;
            setScrollY(scroll);
        };
        handleScroll();

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);


    return (
        <ContactContainer>
            <div className="background" style={{height: scrollY}}/>

            <ContactBox>
                <ContactForm>
                    <Title>Get In Touch</Title>
                    <form name="contact" method="post">
                        <input type="hidden" name="form-name" value="contact" />
                        <div>
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" name="name" required />
                        </div>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" required />
                        </div>
                        <div>
                            <label htmlFor="message">Message</label>
                            <textarea id="message" name="message" required />
                        </div>
                        <div>
                            <input type="submit" value="Submit message" />
                        </div>
                    </form>
                </ContactForm>
                <Map>
                    <MapContainer center={[51.454514,-2.587910]} zoom={13} style={{ height: "100%", width: '100%' }} scrollWheelZoom={false}>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={[51.459304,-2.59790999]} icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 0]})}>
                            <Popup>
                                The Code Cave
                            </Popup>
                        </Marker>
                    </MapContainer>
                </Map>
            </ContactBox>
        </ContactContainer>
    )
}

export default Contact;
