import React from "react";
import Footer from "../Elements/FooterBox";

export default function FooterBox() {
  return (
    <Footer id="contact">
      <Footer.Wrapper>
        <Footer.Row>
          <Footer.Column>
            <Footer.Title>Contact us</Footer.Title>
            <Footer.Mail href="mailto:starpaintng@gmail.com">
              <Footer.Icon className="fa-solid fa-envelope" />
              starpaintng@gmail.com
            </Footer.Mail>
            <Footer.Text>
              <Footer.Icon className="fa-solid fa-square-phone" />
              +251911977351
            </Footer.Text>
            <Footer.Text>
              <Footer.Icon className="fa-solid fa-square-phone" />
              +251941191633
            </Footer.Text>
            <Footer.Text>
              <Footer.Icon className="fa-solid fa-square-phone" />
              +251948494901
            </Footer.Text>
          </Footer.Column>

          <Footer.Column>
            <Footer.Title>Social</Footer.Title>
            <Footer.SecondLink href="#">
              <Footer.Icon className="fa-brands fa-facebook" />
              FaceBook
            </Footer.SecondLink>
            <Footer.SecondLink href="#">
              <Footer.Icon className="fa-brands fa-instagram-square" />
              Instagram
            </Footer.SecondLink>
            <Footer.SecondLink href="#">
              <Footer.Icon className="fa-brands fa-telegram" />
              Telegram
            </Footer.SecondLink>
          </Footer.Column>

          <Footer.Column>
            <Footer.Title>Quick Link</Footer.Title>
            <Footer.Link to="home">
              <Footer.Icon className="fa-solid fa-house" />
              Home
            </Footer.Link>
            <Footer.Link to="services">
              <Footer.Icon className="fa-solid fa-paint-roller" />
              Services
            </Footer.Link>
            <Footer.Link to="projects">
              <Footer.Icon className="fa-solid fa-circle-arrow-up" />
              Project
            </Footer.Link>
          </Footer.Column>
        </Footer.Row>
        <Footer.Line />
        <Footer.Row>
          <Footer.Column>
            <Footer.Right>
              <Footer.Year></Footer.Year>
              <Footer.SecondLink
                href="https://github.com/rouge9"
                target="_blank"
                rel="noopener noreferrer"
              >
                rouge9
              </Footer.SecondLink>
            </Footer.Right>
          </Footer.Column>
        </Footer.Row>
      </Footer.Wrapper>
    </Footer>
  );
}
