import React from "react";
import styled from "styled-components";

import ServiceBox from "../Elements/ServiceBox";

export default function Services() {
  return (
    <Wrapper id="services">
      <div className="whiteBg" style={{ padding: "60px 0" }}>
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Our Awesome Services</h1>
            <p className="font13">
              Star painting provides a high quality painting, decorating, epoxy
              flooring and
              <br />
              so on services to both resident and commercial clients across
              Addis Ababa region.
              <br />
              Our expertise and competitive, cost-effective construction
              services include:-
            </p>
          </HeaderInfo>
          <ServiceBoxRow className="flex">
            <ServiceBoxWrapper>
              <ServiceBox
                icon="roller"
                title="Interior Painting"
                subtitle="Interior painting service will help you spruce up your living space. We can also help you choose the right color scheme for your home. Our interior painting service includes: - Preparing the walls for painting - Choosing the right color scheme - Applying a coat of primer - Applying a top coat of paint - Ensuring your paint job lasts for years to come."
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox
                icon="spray"
                title="Exterior Painting"
                subtitle="Whether you need a small residential paint job or a large commercial painting project, Star Painting is the place to go. Start Painting has a variety of choices for exterior panting like our most famous service Contextra, Stone paint, granite painting and so on "
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox
                icon="bucket"
                title="Epoxy flooring"
                subtitle="Epoxy flooring service is a cost-effective and durable way to protect your warehouses, garages, factories, and retail stores"
              />
            </ServiceBoxWrapper>

            <ServiceBoxWrapper>
              <ServiceBox
                icon="brush"
                title="3D epoxy flooring"
                subtitle="The 3D Epoxy Flooring System is a heavy duty flooring system that provides a safe and secure flooring surface. The system is suitable for various environments such as warehouses, garages, factories, and retail stores. The flooring system has an unlimited use because it can be easily cleaned with a damp mop. The 3D Epoxy Flooring System is an economical flooring system because it is made of 100% recyclable materials."
              />
            </ServiceBoxWrapper>
          </ServiceBoxRow>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const ServiceBoxRow = styled.div`
  @media (max-width: 860px) {
    flex-direction: column;
  }
`;
const ServiceBoxWrapper = styled.div`
  width: 20%;
  margin-right: 5%;
  padding: 80px 0;
  @media (max-width: 860px) {
    width: 100%;
    text-align: center;
    padding: 40px 0;
  }
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;
