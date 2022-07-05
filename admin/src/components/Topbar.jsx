import React from "react";
import styled, { css } from "styled-components";
import { Language, NotificationsNone, Settings } from "@material-ui/icons";
const Container = styled.div`
  display: flex;
`;
const TopBar = styled.div`
  width: 100%;
  height: 50px;
  background-color: white;
  position: sticky;
  top:0px;
  z-index:999;
`;
const TopBarWrapper = styled.div`
  height: 100%;
  padding: 0px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const TopLeft = styled.div``;
const TopRight = styled.div`
  display: flex;
  align-items: center;
`;
const Logo = styled.span`
  font-weight: bold;
  font-size: 30px;
  color: black;
  cursor: pointer;
`;
const TopBarIconContainer = styled.div`
  position: relative;
  cursor: pointer;
  margin-right: 10px;
  color :#555;
`;
const TopIconBadge = styled.span`
  width: 15px;
  height: 15px;
  position: absolute;
  top: -5px;
  right:0px;
  background-color: red;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
`;
const TopAvatar = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    cursor: pointer;
`
const Topbar = () => {
  return (
    <Container>
      <TopBar>
        <TopBarWrapper>
          <TopLeft>
            <Logo>Admin</Logo>
          </TopLeft>
          <TopRight>
            <TopBarIconContainer>
              <NotificationsNone />
              <TopIconBadge>2</TopIconBadge>
            </TopBarIconContainer>
            <TopBarIconContainer>
              <Language />
            </TopBarIconContainer>
            <TopBarIconContainer>
              <Settings />
            </TopBarIconContainer>
            <TopAvatar src='https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'/>
          </TopRight>
        </TopBarWrapper>
      </TopBar>
    </Container>
  );
};
export default Topbar;
