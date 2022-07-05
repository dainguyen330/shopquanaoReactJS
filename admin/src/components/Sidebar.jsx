import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  AttachMoney,
  Storefront,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
} from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

const Container = styled.div`
  flex: 1;
  height: calc(100vh - 50px);
  background-color: rgb(251, 251, 255);
  position: sticky;
  top: 50px;
`;
const SidebarWrapper = styled.div`
  padding: 20px;
  color: #555;
`;
const SidebarMenu = styled.div`
  margin-bottom: 10px;
`;
const SidebarTitle = styled.h3`
  font-size: 13px;
  color: rgb(187, 186, 186);
`;
const SidebarList = styled.ul`
  list-style: none;
  padding: 5px;
`;
const SidebarListItem = styled.li`
  padding: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  border-radius: 10px;
  &.active {
    background-color: rgb(228, 228, 250);
  }
  &:hover {
    background-color: rgb(228, 228, 250);
  }
`;
const SidebarIcon = styled.div`
  margin-right: 5px;
  font-size: 20px !important;
`;
const Links = styled(Link)`
  text-decoration: none;
  color:inherit;
`

const Sidebar = () => {
  return (
    <Container>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarTitle>Dashboard</SidebarTitle>
          <SidebarList>
            <Links to="/">
            <SidebarListItem>
              <SidebarIcon>
                <LineStyle />
              </SidebarIcon>
              Home
            </SidebarListItem>
            </Links>
            <SidebarListItem>
              <SidebarIcon>
                <Timeline />
              </SidebarIcon>
              Analytics
            </SidebarListItem>
            <SidebarListItem>
              <SidebarIcon>
                <TrendingUp />
              </SidebarIcon>
              Sales
            </SidebarListItem>
          </SidebarList>
        </SidebarMenu>
        <SidebarMenu>
          <SidebarTitle>QuickMenu</SidebarTitle>
          <SidebarList>
            <Links to="/users">
              <SidebarListItem>
                <SidebarIcon>
                  <PermIdentity />
                </SidebarIcon>
                Users
              </SidebarListItem>
            </Links>
            <Links to="products">
              <SidebarListItem>
                <SidebarIcon>
                  <Storefront />
                </SidebarIcon>
                Products
              </SidebarListItem>
            </Links>
            <SidebarListItem>
              <SidebarIcon>
                <AttachMoney />
              </SidebarIcon>
              Transactions
            </SidebarListItem>
          </SidebarList>
        </SidebarMenu>
        <SidebarMenu>
          <SidebarTitle>Notifications</SidebarTitle>
          <SidebarList>
            <SidebarListItem>
              <SidebarIcon>
                <MailOutline />
              </SidebarIcon>
              Mail
            </SidebarListItem>
            <SidebarListItem>
              <SidebarIcon>
                <DynamicFeed />
              </SidebarIcon>
              Feedback
            </SidebarListItem>
            <SidebarListItem>
              <SidebarIcon>
                <ChatBubbleOutline />
              </SidebarIcon>
              Messages
            </SidebarListItem>
          </SidebarList>
        </SidebarMenu>
        <SidebarMenu>
          <SidebarTitle>Staff</SidebarTitle>
          <SidebarList>
            <SidebarListItem>
              <SidebarIcon>
                <WorkOutline />
              </SidebarIcon>
              Manage
            </SidebarListItem>
            <SidebarListItem>
              <SidebarIcon>
                <Timeline />
              </SidebarIcon>
              Analytics
            </SidebarListItem>
            <SidebarListItem>
              <SidebarIcon>
                <Report />
              </SidebarIcon>
              Reports
            </SidebarListItem>
          </SidebarList>
        </SidebarMenu>
      </SidebarWrapper>
    </Container>
  );
};

export default Sidebar;
