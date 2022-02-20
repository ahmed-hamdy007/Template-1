import axios from "axios";
import React, { useState, useEffect } from "react";
import {
  PortfolioSection,
  PortfolioTitle,
  Span,
  PortfolioList,
  PortfolioItem,
  ImageWrapper,
  Image,
  Overlay,
  OverlaySpan,
} from "./style.js";

const Portfolio = () => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    axios.get("js/data.json").then((rec) => {
      setImages(rec.data.portfolio);
    });
  }, []);
  const portfolioImages = images.map((imageItem) => {
    return (
      <ImageWrapper key={imageItem.id}>
        <Image src={imageItem.image} alt="image" />
        <Overlay>
          <OverlaySpan>Show Image</OverlaySpan>
        </Overlay>
      </ImageWrapper>
    );
  });

  return (
    <PortfolioSection>
      <PortfolioTitle>
        <Span>My</Span> Portfolio
      </PortfolioTitle>
      <PortfolioList>
        <PortfolioItem active>All</PortfolioItem>
        <PortfolioItem>HTML</PortfolioItem>
        <PortfolioItem>Photoshop</PortfolioItem>
        <PortfolioItem>Wordpress</PortfolioItem>
        <PortfolioItem>Mobile</PortfolioItem>
      </PortfolioList>

      <div class="box">{portfolioImages}</div>
    </PortfolioSection>
  );
};
export default Portfolio;
