import { Container, Row, Tab, Col, Nav } from "react-bootstrap";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from "react-on-screen";

export const Projects = () => {
    const Projects = [
        {
            title: "Professional Website",
            description: "Design and Development",
            imgUrl: projImg1,
        },
        {
            title: "PowerShell Contribution",
            description: "Design and Development of PowerShell 7",
            imgUrl: projImg2,
        },
        {
            title: "OBS Studio Contribution",
            description: "Design and Development of OBS Studio",
            imgUrl: projImg3,
        },
    ];
    return(
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col size={12}>
                    <TrackVisibility>
                    {({isVisible}) => 
                        <div className={isVisible ? "animate__animated animate__slideInUp": ""}>
                            <h2>Projects</h2>
                            <p>See below for a list of projects that I have worked on (both open source and proprietary)</p>
                        </div>}
                    </TrackVisibility>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Tab 1</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Tab 2</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">Tab 3</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Row>
                                    {
                                        Projects.map((project, index) => {
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
                            <Tab.Pane eventKey="second">Something</Tab.Pane>
                            <Tab.Pane eventKey="third">Something</Tab.Pane>
                        </Tab.Content>
                    </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section>
    )
}