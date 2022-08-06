import React, {useEffect, useState} from "react";
import styled from "styled-components";

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
  border-radius: 10px;
  height: 65vh;
  width: 80vw;
  max-width: 1200px;
  border: 1px solid white;
  z-index:5;
`

const ContactForm = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: flex-start;
    justify-content: flex-start;
  height: 100%;
  padding: 20px;
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
                        <p>
                            <label htmlFor="name">Name</label> <br />
                            <input type="text" id="name" name="name" required />
                        </p>
                        <p>
                            <label htmlFor="email">Email</label> <br />
                            <input type="email" id="email" name="email" required />
                        </p>
                        <p>
                            <label htmlFor="message">Message</label> <br />
                            <textarea id="message" name="message" required></textarea>
                        </p>
                        <p>
                            <input type="submit" value="Submit message" />
                        </p>
                    </form>
                </ContactForm>
            </ContactBox>
        </ContactContainer>
    )
}

export default Contact;
