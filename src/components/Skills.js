import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import postgres from '../assets/img/postgres.svg';
import nodejs from '../assets/img/nodejs.svg';
import javascript from '../assets/img/javascript.svg';
import express from '../assets/img/express.svg';
import html from '../assets/img/html.svg';
import css from '../assets/img/css.svg';

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>Ever growing list of technologies and frameworks</p>
              <Carousel responsive={responsive} infinite={true} className="skill-slider">
                <div className="item">
                  <img src={postgres} alt="Image" />
                  <h5>PostgreSQL</h5>
                </div>
                <div className="item">
                  <img src={nodejs} alt="Image" />
                  <h5>Node Js</h5>
                </div>
                <div className="item">
                  <img src={javascript} alt="Image" />
                  <h5>Javascript</h5>
                </div>
                <div className="item">
                  <img src={express} alt="Image" />
                  <h5>Express</h5>
                </div>
                <div className="item">
                  <img src={html} alt="Image" />
                  <h5>HTML 5</h5>
                </div>
                <div className="item">
                  <img src={css} alt="Image" />
                  <h5>CSS 3</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      {/* <img className="background-image-left" src={colorSharp} alt="bg-image-left" /> */}
    </section>
  );
};
