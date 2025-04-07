import React from "react";
import styled from "styled-components";
import { Cat } from "../services/api";

type CatImageProps = {
  cat: Cat | null;
  isLoading: boolean;
}

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
  margin-top: 20px;
`;

const CatImg = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`;

const Placeholder = styled.div`
  width: 300px;
  height: 150px;
  background: url("https://via.placeholder.com/300x150?text=Cat+Placeholder") no-repeat center;
  background-size: contain;
`;

const CatImage: React.FC<CatImageProps> = ({ cat, isLoading }) => {
  if (isLoading) {
    return (
      <ImageContainer>
        <Placeholder />
      </ImageContainer>
    );
  }

  return (
    <ImageContainer>
      {cat ? <CatImg src={cat.url} alt="Cat" /> : <Placeholder />}
    </ImageContainer>
  );
};

export default CatImage;