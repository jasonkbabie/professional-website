/*useState to keep track of which link the user is on*/

import { useEffect, useState } from 'react';
import {Navbar, Container, Nav} from 'react-bootstrap';
import logo from '../assets/img/logo.svg';
import facebookIcon from '../assets/img/nav-icon2.svg';
import instagramIcon from '../assets/img/nav-icon3.svg';
import { HashLink } from 'react-router-hash-link';
import {
    BrowserRouter as Router
  } from "react-router-dom";

/*functional component with no parameters for now*/
export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() =>
        {
            const onScroll = () => {
                if (window.scrollY > 50){
                    setScrolled(true);
                } else {
                    setScrolled(false);
                }
            }
            window.addEventListener("scroll", onScroll);
            return () => window.removeEventListener("scroll", onScroll);
        }, []
    )

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <Router>
            <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
                <Container>
                    <Navbar.Brand href="#home">
                        <img src={logo} alt = "Logo"/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav">
                        <span className = "navbar-toggler-icon"></span>
                    </Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                        <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link': 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                        <Nav.Link href="#skills" className={activeLink === 'skills' ? "active navbar-link": 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                        <Nav.Link href="#Portfolio" className={activeLink === 'Portfolio' ? 'active navbar-link': 'navbar-link'} onClick={() => onUpdateActiveLink('Portfolio')}>Portfolio</Nav.Link>
                        </Nav>
                        <span className = "navbar-text">
                            <div className = "social-icon">
                                <a href="https://www.instagram.com/jasonkbabie/">
                                    <img src={instagramIcon} alt=""></img>
                                </a>
                                <a href="https://www.facebook.com/profile.php?id=100090460237968">
                                    <img src={facebookIcon} alt=""></img>
                                </a>
                            </div>
                        </span>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Router>
    );
}