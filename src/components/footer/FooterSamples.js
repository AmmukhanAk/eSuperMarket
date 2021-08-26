import React from "react";
import {
    Box,
    Container,
    Row,
    Column,
    FooterLink,
    Heading,
    Copyright,
} from "./FooterSample";
import "../Product.css"
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import FacebookIcon from '@material-ui/icons/Facebook';

export const Footer = () => {
    return (
        <Box>
            {/* <h1 style={{
                color: "green",
                textAlign: "center",
                marginTop: "-50px"
            }}>
                F-zone : place for fashion
            </h1> */}
            <Container>
                <Row>
                    <Column>
                        <Heading>Company</Heading>
                        <FooterLink href="#">About us</FooterLink>
                        <FooterLink href="#">Terms and Condition</FooterLink>
                        <FooterLink href="#">Blog</FooterLink>
                    </Column>
                    <Column>
                        <Heading>Our Ranges</Heading>
                        <FooterLink href="#">Cloths</FooterLink>
                        <FooterLink href="#">Accessories</FooterLink>
                        <FooterLink href="#">Gadgets</FooterLink>
                        <FooterLink href="#">Jewellery</FooterLink>
                    </Column>
                    <Column>
                        <Heading>Contact Us</Heading>
                        <FooterLink href="#">Nanded</FooterLink>
                        <FooterLink href="#">Aurangabad</FooterLink>
                        <FooterLink href="#">Pune</FooterLink>
                        <FooterLink href="#">Mumbai</FooterLink>
                    </Column>
                    <Column>
                        <Heading>Social Media</Heading>
                        <FooterLink href="#">
                            <i className="fab fa-facebook-f">
                                <span style={{ marginLeft: "10px" }}>
                                   <FacebookIcon/> Facebook
                                </span>
                            </i>
                        </FooterLink>
                        <FooterLink href="#">
                            <i className="fab fa-instagram">
                                <span style={{ marginLeft: "10px" }}>
                                    <InstagramIcon/> Instagram
                                </span>
                            </i>
                        </FooterLink>
                        <FooterLink href="#">
                            <i className="fab fa-twitter">
                                <span style={{ marginLeft: "10px" }}>
                                   <TwitterIcon/> Twitter
                                </span>
                            </i>
                        </FooterLink>
                        <FooterLink href="#">
                            <i className="fab fa-youtube">
                                <span style={{ marginLeft: "10px" }}>
                                    <YouTubeIcon/>Youtube
                                </span>
                            </i>
                        </FooterLink>
                    </Column>
                </Row>
                
            </Container>
         <footer>  <p>Copyright F-ZONE &#169; 2017 developed by PickupBiz</p></footer> 
        </Box>
        
    );
};

