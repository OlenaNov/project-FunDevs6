import React, { useState, useLayoutEffect } from 'react';
import { LiaPawSolid } from 'react-icons/lia';

import {
  Item,
  NewsBody,
  NewsTitle,
  TextContent,
  BottomInfoWrapper,
  NewsDate,
  NewsLink,
  ImageWrapper,
  Wrapper,
} from './NewsCard.sryled';

const NewsCard = ({ cards }) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useLayoutEffect(() => {
    const updateSize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', updateSize);

    return () => {
      window.removeEventListener('resize', updateSize);
    };
  }, []);

  return Array(cards)
    .fill(0)
    .map((card, index) => (
      <Item key={index}>
        <ImageWrapper>
          <LiaPawSolid />
        </ImageWrapper>
        <TextContent>
          <NewsTitle count={2} inline={true} />
          <Wrapper>
            <NewsBody count={screenWidth < 768 ? 7 : 5} inline={true} />
          </Wrapper>
          <BottomInfoWrapper>
            <NewsDate inline={true} />
            <NewsLink inline={true} />
          </BottomInfoWrapper>
        </TextContent>
      </Item>
    ));
};

export default NewsCard;
