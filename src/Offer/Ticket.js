import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const TicketContent = styled.div`
  background: #fff;
  padding-bottom: 16px;
  margin-bottom: 12px;
  @media screen and (min-width: 768px) {
    margin-bottom: 0;
  }
`;
const Title = styled.h2`
  box-sizing: border-box;
  padding: 22px 16px 21px;
  background: #cd2027;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-height: 63px;
  line-height: 20px;
  font-size: 16px;
  font-weight: normal;
  color: #ffffff;
  white-space: nowrap;
`;

const Img = styled.img``;

const Logo = styled.img`
  margin-left: 8px;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
`;
const Cost = styled.div`
  margin: 18px 16px 17px 0;
  line-height: 16px;
  font-size: 20px;
  text-align: right;
  color: #5c5c5c;
  position: relative;
  @media screen and (min-width: 768px) {
    margin-right: 8px;
  }
`;

const CostFrom = styled.span`
  font-size: 12px;
  margin-right: 4px;
`;

const DaysLeft = styled.div`
  line-height: 15px;
  font-size: 12px;
  text-align: right;
  color: #d93633;
  margin-top: 10px;
`;
const Text = styled.p`
  line-height: 16px;
  font-size: 12px;
  margin-bottom: 44px;
  color: #242424;
  padding: 0 8px;
  text-align: left;
  min-height: 48px;
`;

const Button = styled.button`
  border: 2px solid #cd1f27;
  border-radius: 3px;
  background: rgba(0, 0, 0, 0.0001);
  line-height: 20px;
  font-size: 16px;
  text-align: center;
  padding: 10px 0;
  color: #d93533;
  max-width: 276px;
  width: 100%;
  margin: 0 auto;
  display: block;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    max-width: 224px;
  }
`;

const Ticket = props => (
  <TicketContent>
    <Title>
      {props.title}
      <Img src={props.icon} alt="" />
    </Title>
    <Cost>
      <Logo src={props.company} />
      <CostFrom>от</CostFrom>
      {props.cost} ₽
      <DaysLeft>{props.daysLeft} </DaysLeft>
    </Cost>
    <Text>{props.text}</Text>
    <Button>Узнать подробности</Button>
  </TicketContent>
);

Ticket.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  cost: PropTypes.string.isRequired,
  daysLeft: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Ticket;
