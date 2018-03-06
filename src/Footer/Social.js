import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Link = styled.a`
  display: inline-block;
  line-height: 16px;
  font-size: 12px;
  color: #4a4a4a;
  text-decoration: none;
  margin-bottom: 12px;
  width: 33.3%;
  @media screen and (min-width: 768px) {
    width: 20%;
  }
`;
const Img = styled.img`
  display: inline-block;
  max-width: 100%;
  margin-right: 4px;
`;

const Social = props => (
  <Link key={props.id} href={props.href}>
    <Img src={props.img} /> {props.text}
  </Link>
);

Social.propTypes = {
  id: PropTypes.number.isRequired,
  href: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Social;
