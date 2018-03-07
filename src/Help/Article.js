import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ArticleContent = styled.div`
  margin-bottom: 16px;
`;
const Title = styled.h3`
  display: flex;
  margin-bottom: 22px;
  font-weight: bold;
  line-height: 18px;
  font-size: 13px;
  color: #4a4a4a;
`;

const Img = styled.img`
  margin-right: 10px;
`;

const Text = styled.p`
  line-height: 20px;
  font-size: 14px;
  color: #4a4a4a;
  text-align: left;
`;

const Link = styled.a`
  line-height: 20px;
  font-size: 14px;
  text-decoration: none;
  color: #00ace2;
`;

const Article = props => (
  <ArticleContent>
    <Title>
      <Img src={props.img} alt="" />
      {props.title}
    </Title>
    <Text>
      {props.text} <Link href="./">Подробнее</Link>
    </Text>
  </ArticleContent>
);

Article.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Article;
