import { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../assets/img/logo.png';
import linkedin from '../assets/img/linkedin.svg';
import github from '../assets/img/github.svg';
import email from '../assets/img/email.svg';

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand='md' className={scrolled ? 'scrolled' : ''}>
      <Container>
        <Navbar.Brand href='/'>
          <img className='navbar-logo' src={logo} alt='Logo' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav'>
          <span className='navbar-toggler-icon'></span>
        </Navbar.Toggle>
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ms-auto'>
            <Nav.Link href='#home' className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>
              Home
            </Nav.Link>
            <Nav.Link href='#skills' className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>
              Skills
            </Nav.Link>
            <Nav.Link href='#projects' className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>
              Projects
            </Nav.Link>
          </Nav>
          <span className='navbar-text'>
            <div className='social-icon'>
              <a
                onClick={(e) => {
                  e.preventDefault();
                  window.open('https://www.linkedin.com/in/royneville', '_blank');
                }}
                href='https://www.linkedin.com/in/royneville'
              >
                <img src={linkedin} alt='' />
              </a>
              <a
                onClick={(e) => {
                  e.preventDefault();
                  window.open('https://github.com/RNEV', '_blank');
                }}
                href='https://github.com/RNEV'
              >
                <img src={github} alt='' />
              </a>

              <a href='https://github.com/RNEV'>
                <img src={email} alt='' />
              </a>
            </div>
            {/* <button className="vvd" onClick={() => console.log('connect')}>
              <span>Let’s Connect</span>
            </button> */}
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
