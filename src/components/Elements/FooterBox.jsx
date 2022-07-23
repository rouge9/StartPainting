import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import { useEffect, useState } from "react";

export default function Footer({ children, ...props }) {
  return <Container {...props}> {children} </Container>;
}

Footer.Wrapper = function FooterWrapper({ children, ...props }) {
  return <Wrapper {...props}> {children} </Wrapper>;
};

Footer.Column = function FooterColumn({ children, ...props }) {
  return <Column {...props}> {children} </Column>;
};

Footer.Row = function FooterRow({ children, ...props }) {
  return <Row {...props}> {children} </Row>;
};

Footer.Title = function FooterTitle({ children, ...props }) {
  return <Title {...props}> {children} </Title>;
};

Footer.Link = function FooterLink({ children, ...props }) {
  return <Link {...props}> {children} </Link>;
};
Footer.SecondLink = function FooterSecondLink({ children, ...props }) {
  return <SecondLink {...props}> {children} </SecondLink>;
};

Footer.Text = function FooterText({ children, ...props }) {
  return <Text {...props}> {children} </Text>;
};

Footer.Icon = function FooterIcon({ className }) {
  return <Icon className={className}> </Icon>;
};

Footer.QuickLink = function QuickLink() {
  const [y, setY] = useState(window.scrollY);
  const [sidebarOpen, toggleSidebar] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => setY(window.scrollY));
    return () => {
      window.removeEventListener("scroll", () => setY(window.scrollY));
    };
  }, [y]);
};

Footer.Year = function FooterYear() {
  return (
    <Year> © {new Date().getFullYear()} All rights reserved. Designed by </Year>
  );
};

Footer.Line = function FooterLine() {
  return <Line />;
};

Footer.ImgStyle = function ImgStyle({ src }) {
  return <ImgStyle src={src}> </ImgStyle>;
};

Footer.Right = function FooterRight({ children, ...props }) {
  return <Right {...props}> {children} </Right>;
};

Footer.Mail = function FooterMail({ children, ...props }) {
  return <Link {...props}> {children} </Link>;
};
const Container = styled.div`
  padding: 80px 60px;
  background: radial-gradient(
    circle,
    rgba(112, 94, 28, 0.98) 3%,
    rgba(116, 115, 110, 1) 100%,
    rgba(0, 212, 255, 1) 100%
  );
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;
`;

const Row = styled.div`
  display: flex;
  grid-template-colums: repeat(auto-fill, minmax(230px, 1fr));
  grid-gap: 150px;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 50px;
`;

const Title = styled.p`
  color: #fff;
  font-size: 20px;
  margin-bottom: 10px;
  font-weight: bold;
`;

const SecondLink = styled.a`
  color: #fff;
  margin-bottom: 15px;
  font-size: 18px;
  text-decoration: none;

  &:hover {
    color: #ff8420;
    transition: color 0.3s ease-in-out;
`;

const Text = styled.p`
  color: #ffb120;
  font-size: 18px;
  margin-bottom: 20px;
`;

const Icon = styled.i`
  font-size: 16px;
  margin-right: 16px;
`;

const Line = styled.hr`
  width: 100%;
  border: 1px solid #fff;
  margin-bottom: 20px;
  margin-top: 20px;
`;

const ImgStyle = styled.img`
  width: 20%;
  height: 20%;
  margent-left: 15px;
`;
const Right = styled.p`
  color: #fff;
  text-align: center;
  line-height: 20px;
  margin-left: 300px;
  margin-right: auto;

  @media (max-width: 1000px) {
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  }
`;

const Year = styled.p`
  color: #fff;
`;
