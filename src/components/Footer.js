import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import logo from '../assets/img/logo.png';
import linkedin from '../assets/img/linkedin.svg';
import github from '../assets/img/github.svg';
import email from '../assets/img/email.svg';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-item-center">
          <Col sm={6}>
            <img className="footer-logo" src={logo} alt="Logo" />
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a
                onClick={(e) => {
                  e.preventDefault();
                  window.open('https://www.linkedin.com/in/royneville', '_blank');
                }}
                href="#"
              >
                <img src={linkedin} alt="Icon1" />
              </a>
              <a
                onClick={(e) => {
                  e.preventDefault();
                  window.open('https://github.com/RNEV', '_blank');
                }}
              >
                <img src={github} alt="Icon2" />
              </a>
              <a href="">
                <img src={email} alt="Icon3" />
              </a>
            </div>
            <p>CopyRight 2022. All Rights Reserved by Roy Neville</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
