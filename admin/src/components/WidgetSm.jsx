import React from "react";
import styled, { css } from "styled-components";
import { Visibility } from "@material-ui/icons";
import { useState } from "react";
import { useEffect } from "react";
import { userRequest } from "../requestMethods";
import UserList from "../pages/UserList";
import { useResolvedPath } from "react-router-dom";
const Container = styled.div`
  flex: 1;
  margin-right: 20px;
  padding: 20px;
`;
const WidgetSmTitle = styled.span`
  font-size: 22px;
  font-weight: 600;
`;
const WidgetSmList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;
const WidgetSmListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0px;
`;
const WidgetSmImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;
const WidgetSmUser = styled.div`
  display: flex;
  flex-direction: column;
`;
const WidgetSmUserName = styled.span`
  font-weight: 600;
`;
const WidgetSmUserTitle = styled.span`
  font-weight: 300;
`;
const WidgetSmButton = styled.button`
  display: flex;
  align-self: center;
  border: none;
  border-radius: 10px;
  padding: 7px 10px;
  background-color: #eeeef7;
  color: #555;
  cursor: pointer;
`;
const WidgetSmIcon = styled.div`
  font-size: 16px;
  margin-right: 5px;
`;

const WidgetSm = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await userRequest.get("users");
        setUsers(res.data);
      } catch {}
    };
    getUsers();
  }, []);
  return (
    <Container>
      <WidgetSmTitle>New Join Member</WidgetSmTitle>
      <WidgetSmList>
        {users.map((user) => (
          <WidgetSmListItem>
            <WidgetSmImage
              src={
                user.img ||
                "https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif"
              }
            />
            <WidgetSmUser>
              <WidgetSmUserName>{user.username}</WidgetSmUserName>
            </WidgetSmUser>
            <WidgetSmButton>
              <WidgetSmIcon>
                <Visibility />
              </WidgetSmIcon>
              Display
            </WidgetSmButton>
          </WidgetSmListItem>
        ))}
      </WidgetSmList>
    </Container>
  );
};

export default WidgetSm;
