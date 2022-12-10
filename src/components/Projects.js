import React from 'react';
import { Container, Row, Col, Nav, Tab } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';
import colorSharp2 from '../assets/img/color-sharp2.png';
import FurriendsSS from '../assets/img/FurriendsSS.png';
import critterCleaners from '../assets/img/critter-cleaners.png';
import repdb from '../assets/img/repdb.png';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const projects = [
    {
      title: 'Furriends Web App',
      description: 'Social Media for your pets',
      imgUrl: FurriendsSS,
      link: 'https://furriends-32ebf.web.app/home',
    },
    {
      title: 'Critter Cleaners',
      description: 'Dog Grooming Business Page',
      imgUrl: critterCleaners,
      link: 'https://crittercleaners.netlify.app/',
    },
    {
      title: 'RepDB',
      description: 'Reptile/Animal database management system. Work in progress',
      imgUrl: repdb,
      link: 'https://github.com/RNEV/RepDB',
    },
  ];
  return (
    <section className='project' id='projects'>
      <Container>
        <Row>
          <Col>
            <TrackVisibility>
              {/* code below checks if the element is visible on screen, and if it is activates animations */}
              {({ isVisible }) => (
                <div className={isVisible ? 'animate__animated animate__slideInUp' : ''}>
                  <h2>Projects</h2>
                  <p>Click a project to find out more!</p>
                </div>
              )}
            </TrackVisibility>
            <Tab.Container id='projects-tabs' defaultActiveKey='first'>
              <Nav
                variant='pills'
                className='nav-pills mb-5 justify-content-center align-items center'
                id='pills-tab'
              >
                <Nav.Item>
                  <Nav.Link eventKey='first'>Web Applications</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='second'>Web Designs</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='third'>Miscellaneous</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey='first'>
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey='second'>This section coming soon!</Tab.Pane>
                <Tab.Pane eventKey='third'>This section coming soon!</Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className='background-image-right' src={colorSharp2} alt='background-right' />
    </section>
  );
};
