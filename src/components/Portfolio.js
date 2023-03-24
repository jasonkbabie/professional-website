import { Container, Row, Tab, Col, Nav } from "react-bootstrap";
import powershellImg from "../assets/img/powershell.png";
import obsStudioImg from "../assets/img/obs-studio.png";
import umletImg from "../assets/img/umlet.png";
import gtsImg from "../assets/img/gts.png";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from "react-on-screen";

export const Portfolio = () => {
    const openSourceProjects = [
        {
            title: "PowerShell Core",
            description: "A cross-platform version of PowerShell to support task automation and configuration management on every operating system",
            imgUrl: powershellImg,
        },
        {
            title: "OBS Studio",
            description: "Software for live streaming and screen recording",
            imgUrl: obsStudioImg,
        },
        {
            title: "UMLet",
            description: "Lightweight, highly configurable UML tool for rapid UML diagram design",
            imgUrl: umletImg,
        },
    ];

    const proprietaryProjects = [
        {
            title: "Global Trading Systems",
            description: "A flexible range of solutions for foreign exchange retail sector businesses, from the stand alone burea-de-change, to large travel and banking operations",
            imgUrl: gtsImg,
        }
    ];

    const commercialProjects = [
        {
            title: "Global Trading Systems",
            description: "A flexible range of solutions for foreign exchange retail sector businesses, from the stand alone burea-de-change, to large travel and banking operations",
            imgUrl: gtsImg,
        }
    ];

    return(
        <section className="project" id="Portfolio">
            <Container>
                <Row>
                    <Col size={12}>
                    <TrackVisibility>
                    {({isVisible}) => 
                        <div className={isVisible ? "animate__animated animate__slideInUp": ""}>
                            <h2>Portfolio</h2>
                            <p>Take your time and browse below for a diverse range of exciting projects that I have worked on (at least the ones I'm legally allowed to publicly mention ;)</p>
                        </div>}
                    </TrackVisibility>
                    <Tab.Container id="Portfolio-tabs" defaultActiveKey="first">
                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Open Source</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Proprietary</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">Commercial</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Row>
                                    {
                                        openSourceProjects.map((project, index) => {
                                            return (
                                                <ProjectCard
                                                key={index}
                                                {...project}
                                                />
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <Row>
                                    {
                                        proprietaryProjects.map((project, index) => {
                                            return (
                                                <ProjectCard
                                                key={index}
                                                {...project}
                                                />
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                                <Row>
                                    {
                                        commercialProjects.map((project, index) => {
                                            return (
                                                <ProjectCard
                                                key={index}
                                                {...project}
                                                />
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                        </Tab.Content>
                    </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section>
    )
}