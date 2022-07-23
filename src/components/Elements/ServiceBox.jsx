import React from "react";
import styled from "styled-components";
// Assets
import SprayImg from "../../assets/img/service/spray.png";
import BucketImg from "../../assets/img/service/bucket.png";
import BrushImg from "../../assets/img/service/brush.png";
import RollerImg from "../../assets/img/service/rollerg.png";

export default function ServiceBox({ icon, title, subtitle }) {
  let getIcon;

  switch (icon) {
    case "roller":
      getIcon = <ImgStyle src={RollerImg} alt="roller" />;
      break;
    case "spray":
      getIcon = <ImgStyle src={SprayImg} alt="spray" />;
      break;
    case "bucket":
      getIcon = <ImgStyle src={BucketImg} alt="bucket" />;
      break;
    case "brush":
      getIcon = <ImgStyle src={BrushImg} alt="brush" />;
      break;
    default:
      getIcon = <ImgStyle src={RollerImg} alt="roller" />;
      break;
  }

  return (
    <Wrapper className="flex flexColumn">
      <IconStyle>{getIcon}</IconStyle>
      <TitleStyle className="font20 extraBold">{title}</TitleStyle>
      <SubtitleStyle className="font13">{subtitle}</SubtitleStyle>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;
const IconStyle = styled.div`
  @media (max-width: 860px) {
    margin: 0 auto;
  }
`;
const TitleStyle = styled.h2`
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
  padding: 40px 0;
  @media (max-width: 860px) {
    padding: 20px 0;
  }
`;
const SubtitleStyle = styled.p`
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
`;

const ImgStyle = styled.img`
  width: 35%;
  height: 35%;
  padding: 0 auto;
`;
