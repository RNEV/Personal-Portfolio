import React from 'react';
import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from '../assets/img/header-img.svg';
import portraitImg from '../assets/img/Portrait.png';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ['Web Developer', 'Perpetual Student', 'Creator'];
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(200);
  console.log(delta);
  const period = 1000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
    //Set state to updated text
    setText(updatedText);
    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(200);
    }
  };
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {/* code below checks if the element is visible on screen, and if it is activates animations */}
              {({ isVisible }) => (
                <div className={isVisible ? 'animate__animated animate__fadeInDownBig' : ''}>
                  <span className="tagline">Welcome to Roy's Portfolio</span>
                  <h1>
                    {`Hi I'm Roy!`} <span className="wrap">{text}</span>
                  </h1>
                  <p>Innovative, Driven Full Stack Developer with a passion for problem solving and creation.</p>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      window.open('https://www.linkedin.com/in/royneville/', '_blank');
                    }}
                  >
                    Let's Connect! <ArrowRightCircle size={25} />
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {/* code below checks if the element is visible on screen, and if it is activates animations */}
              {({ isVisible }) => (
                <div className={isVisible ? 'animate__animated animate__fadeInRightBig' : ''}>
                  <img src={portraitImg} alt="Header Image" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
