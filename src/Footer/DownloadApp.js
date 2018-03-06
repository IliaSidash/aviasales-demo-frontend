import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const DownloadApp = styled.a`
  display: block;
  background: #1e292d;
  border-radius: 5px;
  padding: 8px 12px 6px;
  text-decoration: none;
  margin: 0 auto 8px;
  max-width: 125px;
  box-sizing: border-box;
  text-align: left;
  @media screen and (min-width: 768px) {
    display: inline-block;
    margin: 0 10px 0 0;
  }
  :last-of-type {
    @media screen and (min-width: 768px) {
      margin-right: 0;
    }
  }
`;
const Img = styled.img`
  display: inline-block;
  margin-right: 10px;
`;
const Text = styled.span`
  display: inline-block;
  line-height: 15px;
  font-size: 9px;
  color: #ffffff;
  text-align: left;
  max-width: 70px;
`;

const System = styled.span`
  font-weight: bold;
  font-size: 12px;
  display: block;
`;

const Download = props => (
  <DownloadApp href={props.href} key={props.id}>
    <Img src={props.img} />
    <Text>
      {props.text}
      <System>{props.store}</System>
    </Text>
  </DownloadApp>
);

Download.propTypes = {
  id: PropTypes.number.isRequired,
  href: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  store: PropTypes.string.isRequired,
};

export default Download;
