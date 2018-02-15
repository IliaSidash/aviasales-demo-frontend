import React from "react";
import styled from "styled-components";

const Ticket = styled.div`
  background: #fff;
  padding-bottom: 16px;
  margin-bottom: 12px;
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
`;

const Img = styled.img``;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 18px 0 16px;
`;
const Logo = styled.img`
  margin-left: 8px;
`;
const Cost = styled.div`
  line-height: 16px;
  font-size: 20px;
  text-align: right;
  color: #5c5c5c;
  margin-right: 16px;
  margin-bottom: 8px;
`;

const CostFrom = styled.span`
  font-size: 12px;
  margin-right: 4px;
`;

const DaysLeft = styled.div`
  line-height: 15px;
  font-size: 12px;
  text-align: right;
  margin-right: 16px;

  color: #d93633;
`;
const Text = styled.p`
  line-height: 16px;
  font-size: 12px;
  margin-bottom: 44px;
  color: #242424;
  padding: 0 8px;
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
  max-width: 292px;
  width: 100%;
  margin: 0 auto;
  display: block;
  cursor: pointer;
`;

const Col = styled.div``;

export default props => (
  <Ticket>
    <Title>
      {props.title}
      <Img src={props.icon} alt="" />
    </Title>
    <Row>
      <Logo src={props.company} />
      <Col>
        <Cost>
          <CostFrom>от</CostFrom>
          {props.cost} ₽
        </Cost>
        <DaysLeft>{props.daysLeft} </DaysLeft>
      </Col>
    </Row>
    <Text>{props.text}</Text>
    <Button>Узнать подробности</Button>
  </Ticket>
);
