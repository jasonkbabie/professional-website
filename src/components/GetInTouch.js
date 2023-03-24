import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import getInTouchImg from "../assets/img/get-in-touch-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const GetInTouch = () => {
    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    }

    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const[buttonText, setButtonText] = useState('Send');
    const [status, setStatus] = useState({});

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setButtonText('Sending...');
        try {
            let response = await fetch("http://localhost:3000/contact", {
                message: "POST",
                headers: {
                    "Content-Type": "application/json;charset=utf-8",
                },
                body: JSON.stringify(formDetails),
            });
            let result = await response.json();
            setFormDetails(formInitialDetails);
            if (result.code === 200){
                setStatus({success: true, message: 'Message sent successfully'});
            } else {
                setStatus({success: false, message: 'Something went wrong, please try again later'});
            }
        } catch (error) {
            console.error(error);
            setStatus({success: false, message: 'Something went wrong, please try again later'});
        } finally {
            setButtonText("Send");
        }
    };
    

    return (
        <section className="get-in-touch" id="get-in-touch">
            <Container>
                <Row className="align-items-center">
                    <Col size={12} md={6}>
                        <img src={getInTouchImg} alt="Contact Me"/>
                    </Col>
                    <Col size={12} md={6}>
                        <TrackVisibility>
                            {({isVisible}) =>
                                <div className={isVisible ? "animate__animated animate__flash": ""}>
                                    <h2>Get In Touch!</h2>
                                </div>}
                        </TrackVisibility>
                        <h3>Let's connect and create something great together!</h3>
                    </Col>
                    <form>
                        <Row>
                            <Col size={12} sm={6} className="px-1">
                                <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                            </Col>
                        </Row>
                    </form>
                </Row>
            </Container>
        </section>
    )
}