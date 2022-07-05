import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import styled, { css } from "styled-components";
import { userRequest } from "../requestMethods";
import {format, formtat} from "timeago.js"
const Container = styled.div`
  flex: 2;
`;
const WidgetLgTitle = styled.h3`
  font-size: 22px;
  font-weight: 600;
`;
const WidgetLgTable = styled.table`
  width: 100%;
  border-spacing: 20px;
`;
const WidgetLgTr = styled.tr``;
const WidgetLgTh = styled.th`
  text-align: left;
`;
const WidgetLgUser = styled.td`
  display: flex;
  align-items: center;
  font-weight: 600;
`;
const WidgetLgImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
`;
const WidgetLgName = styled.span``;
const WidgetLgStatus = styled.td``;
const WidgetLgButton = styled.button`
  padding: 5px 7px;
  border: none;
  border-radius: 10px;
  &.approve {
    background-color: #e5faf2;
    color: #3bb077;
  }
  &.declined {
    background-color: #fff0f1;
    color: #d95087;
  }
  &.pending {
    background-color: #ebf1fe;
    color: #2a7ade;
  }
`;
const WidgetLgDate = styled.td`
  font-weight: 300;
`;
const WidgetLg = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await userRequest.get("orders");
        setOrders(res.data);
      } catch {}
    };
    getOrders();
  }, []);
  const Button = ({ type }) => {
    return <WidgetLgButton className={type}>{type}</WidgetLgButton>;
  };
  return (
    <Container>
      <WidgetLgTitle>Lan giao dich cuoi</WidgetLgTitle>
      <WidgetLgTable>
        <WidgetLgTr>
          <WidgetLgTh>Customer</WidgetLgTh>
          <WidgetLgTh>Date</WidgetLgTh>
          <WidgetLgTh>Amount</WidgetLgTh>
          <WidgetLgTh>Status</WidgetLgTh>
        </WidgetLgTr>
        {orders.map((order) => (
          <WidgetLgTr key={order._id}>
            <WidgetLgUser>
              <WidgetLgImg src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
              <WidgetLgName>{order.userID}</WidgetLgName>
            </WidgetLgUser>
            <WidgetLgUser></WidgetLgUser>
            <WidgetLgDate>{format(order.createdAt)}</WidgetLgDate>
            <WidgetLgDate>{order.amount}</WidgetLgDate>
            <WidgetLgStatus>
              <Button type={order.status} />
            </WidgetLgStatus>
          </WidgetLgTr>
        ))}
      </WidgetLgTable>
    </Container>
  );
};

export default WidgetLg;
