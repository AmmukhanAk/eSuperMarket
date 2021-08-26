import React from "react";
import { Row, Col, Container, Card } from "react-bootstrap";
import "./Footer.css";
import { FooterData } from "../../src/state/reducers/FooterData";
export const FooterMain = () => {
    const {
        Date,
        title,
        instagram,
        facebook,
        twitter,
        linkedin,
        youtube,
        contactTitle,
        eTitle,
        email,
        phoneTitle,
        phone,
        card1Title,
        card1a1Title,
        card1a1,
        card1a2Title,
        card1a2,
        card1a3Title,
        card1a3,
        card1a4Title,
        card1a4,
        card2Title,
        card2a1Title,
        card2a1,
        card2a2Title,
        card2a2,
        card2a3Title,
        card2a3,
        card2a4Title,
        card2a4,
        card3Title,
        card3a1Title,
        card3a1,
        card3a2Title,
        card3a2,
        card3a3Title,
        card3a3,
        card3a4Title,
        card3a4,
        Footer2,
    } = FooterData.Data[0];
    return (
        <footer>
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
                integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=="
                crossorigin="anonymous"
                referrerpolicy="no-referrer"
            />
            <Row className="footerRow">
                <Col
                    xs={1}
                    md={2}
                    lg={3}
                    class="col-md-2"
                    className="footerCol"
                    className="social"
                >
                    <div className="SectionStyle">
                        <h3>{title}</h3>
                        <br />
                        <hr />
                        <div className="items" id="icons">
                            <a href={instagram}>
                                <i class="fab fa-instagram"></i>
                            </a>
                            <a href={facebook}>
                                <i class="fab fa-facebook-square"></i>
                            </a>
                            <a href={twitter}>
                                <i class="fab fa-twitter-square"></i>
                            </a>
                            <a href={linkedin}>
                                <i class="fab fa-linkedin-in"></i>
                            </a>
                            <a href={youtube}>
                                <i class="fab fa-youtube"></i>
                            </a>
                            <h6>{contactTitle}</h6>
                            <hr />
                            Email :{" "}
                            <a href={email}>
                                <h6> {eTitle}</h6>
                            </a>
                            Phone :
                            <a href={phone}>
                                <h6>{phoneTitle}</h6>{" "}
                            </a>
                        </div>
                    </div>
                </Col>
                <Col xs={1} md={2} lg={3} className="footerCol" className="about">
                    <div className="SectionStyle">
                        <h3>{card1Title}</h3> <br />
                        <hr />
                        <br />
                        <div className="items">
                            <a href={card1a1}>{card1a1Title}</a>
                            <br />
                            <a href={card1a2}>{card1a2Title}</a>
                            <br />
                            <a href={card1a3}>{card1a3Title}</a>
                            <br />
                            <a href={card1a4}>{card1a4Title}</a>
                            <br />
                        </div>
                    </div>
                </Col>
                <Col xs={1} md={2} lg={3} className="footerCol" className="fundraising">
                    <div className="SectionStyle">
                        <h3>{card2Title}</h3> <br />
                        <hr />
                        <br />
                        <Container className="items">
                            <a href={card2a1}>{card2a1Title}</a>
                            <br />
                            <a href={card2a2}>{card2a2Title}</a>
                            <br />
                        </Container>
                    </div>
                </Col>
                <Col xs={1} md={2} lg={3} className="footerCol" className="policy">
                    <div className="SectionStyle">
                        <h3>{card3Title}</h3>
                        <br />
                        <hr />
                        <br />
                        <div className="items">
                            <a href={card3a1}>{card3a1Title}</a>
                            <br />
                            <a href={card3a2}>{card3a2Title}</a>
                            <br />
                            <a href={card3a3}>{card3a3Title}</a>
                            <br />
                            <a href={card3a4}>{card3a4Title}</a>
                            <br />
                        </div>
                    </div>
                </Col>
            </Row>
            <Row className="footer2">
                <p className="copy">
                    copyright &copy;{Date} <a href="/">F-ZONE</a>{" "}
                    | Developed & Designed By{" "}
                    <a href="/">Ammukhan</a>{" "}
                </p>
            </Row>
        </footer>
    );
};