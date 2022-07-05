import React, { useState } from "react";
import styled, { css } from "styled-components";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import { useEffect } from "react";
import { userRequest } from "../requestMethods";
import { getInitialGridColumnReorderState } from "@material-ui/data-grid";
const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const FeaturedItem = styled.div`
  flex: 1;
  margin: 0px 20px;
  padding: 30px;
  border-radius: 10px;
  cursor: pointer;
`;
const FeaturedTitle = styled.span`
  font-size: 20px;
`;
const FeaturedMoneyContainer = styled.div`
  margin: 10px 0px;
  display: flex;
  align-items: center;
`;
const FeaturedMoney = styled.span`
  font-size: 30px;
  font-weight: 600;
`;
const FeaturedMoneyRate = styled.span`
  display: flex;
  align-items: center;
  margin-left: 20px;
`;
const FeturedIcon = styled.div`
  font-size: 14px;
  margin-left: 5px;
  color: green;
  &.negative {
    color: red;
  }
`;
const FeaturedSub = styled.span`
  font-size: 15px;
  color: grey;
`;
const FeaturedInfo = () => {
  const [income, setIncome] = useState([]);
  const [perc, setPerc] = useState(0);
  useEffect(() => {
    const getIncome = async () => {
      try {
        const res = await userRequest.get("orders/income");
        setIncome(res.data);
        setPerc(
          ((res.data[1].total - res.data[0].total) * 100) / res.data[0].total
        );
      } catch {}
    };
    getIncome();
  }, []);


  return (
    <Container>
      <FeaturedItem>
        <FeaturedTitle>Revanue</FeaturedTitle>
        <FeaturedMoneyContainer>
          <FeaturedMoney>${income[1]?.total}</FeaturedMoney>
          <FeaturedMoneyRate>
            {Math.floor(perc)}%
            {perc < 0 ? (
              <FeturedIcon className="negative">
                <ArrowDownward />
              </FeturedIcon>
            ) : (
              <FeturedIcon>
                <ArrowUpward />
              </FeturedIcon>
            )}
          </FeaturedMoneyRate>
        </FeaturedMoneyContainer>
        <FeaturedSub>Compare to last month</FeaturedSub>
      </FeaturedItem>
      <FeaturedItem>
        <FeaturedTitle>Sales</FeaturedTitle>
        <FeaturedMoneyContainer>
          <FeaturedMoney>$2000</FeaturedMoney>
          <FeaturedMoneyRate>
            -11.4
            <FeturedIcon className="negative">
              <ArrowDownward />
            </FeturedIcon>
          </FeaturedMoneyRate>
        </FeaturedMoneyContainer>
        <FeaturedSub>Compare to last month</FeaturedSub>
      </FeaturedItem>
      <FeaturedItem>
        <FeaturedTitle>Cost</FeaturedTitle>
        <FeaturedMoneyContainer>
          <FeaturedMoney>$2,225</FeaturedMoney>
          <FeaturedMoneyRate>
            +11.4
            <FeturedIcon>
              <ArrowUpward />
            </FeturedIcon>
          </FeaturedMoneyRate>
        </FeaturedMoneyContainer>
        <FeaturedSub>Compare to last month</FeaturedSub>
      </FeaturedItem>
    </Container>
  );
};

export default FeaturedInfo;
