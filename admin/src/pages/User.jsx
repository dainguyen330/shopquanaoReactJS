import React from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import {
  PermIdentity,
  CalendarToday,
  PhoneAndroid,
  LocationSearching,
  MailOutline,
  Publish,
} from "@material-ui/icons";
const Container = styled.div`
  flex: 4;
  padding: 20px;
`;
const UserTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const UserTitle = styled.h3``;
const UserAddButton = styled.button`
  width: 80px;
  border: none;
  padding: 5px;
  background-color: teal;
  border-radius: 5px;
  cursor: pointer;
  color: white;
  font-size: 16px;
`;
const UserContainer = styled.div`
  display: flex;
  margin-top: 20px;
`;
const UserShow = styled.div`
  flex: 1;
  padding: 20px;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;
const UserUpdate = styled.div`
  flex: 2;
  padding: 20px;
  margin-left: 20px;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;
const UserShowTop = styled.div`
  display: flex;
  align-items: center;
`;
const UserShowTopTitle = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;
const UserShowUserName = styled.span`
  font-weight: 600;
`;
const UserShowUserTitle = styled.span`
  font-weight: 300;
`;
const UserShowBottom = styled.div`
  margin-top: 20px;
`;
const UserShowTitle = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: rgb(175, 170, 170);
`;
const UserShowInfo = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0px;
  color: #444;
`;
const UserShowImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;

const UserShowIcon = styled.span`
  font-size: 16px;
`;
const UserShowInfoTitle = styled.span`
  margin-left: 10px;
`;
const UserUpdateTitle = styled.span`
  font-size: 24px;
  font-weight: 600;
`;
const UserUpdateForm = styled.form`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;
const UserUpdateLeft = styled.div``;
const UserUpdateRight = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;
const UserUpdateItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  & > label {
    margin-bottom: 5px;
    font-size: 14px;
  }
`;
const UserUpdateInput = styled.input`
  border: none;
  width: 250px;
  height: 30px;
  border-radius: 1px solid gray;
`;
const UserUpdateUpload = styled.div`
  display: flex;
  align-items: center;
`;
const UserUpdateImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 10px;
  object-fit: cover;
  margin-right: 20px;
`;
const UserUpdateButton = styled.button`
  border-radius: 5px;
  border: none;
  padding: 5px;
  cursor: pointer;
  background-color: darkblue;
  color: white;
  font-weight: 600;
`;
const User = () => {
  return (
    <Container>
      <UserTitleContainer>
        <UserTitle>Edit User</UserTitle>
        <Link to="/newUser"><UserAddButton>Create</UserAddButton></Link>
      </UserTitleContainer>
      <UserContainer>
        <UserShow>
          <UserShowTop>
            <UserShowImg src="https://play-lh.googleusercontent.com/ObdbSatQvNUymufVs3vL5YmhGdvs3w5vvTciaGLFQOZoREVAEIIueioFOrWk9je_fqxR=w240-h480-rw"></UserShowImg>
            <UserShowTopTitle>
              <UserShowUserName>Dai</UserShowUserName>
              <UserShowUserTitle>Ai</UserShowUserTitle>
            </UserShowTopTitle>
          </UserShowTop>
          <UserShowBottom>
            <UserShowTitle>Account Title</UserShowTitle>
            <UserShowInfo>
              <UserShowIcon>
                <PermIdentity />
              </UserShowIcon>
              <UserShowInfoTitle>dai</UserShowInfoTitle>
            </UserShowInfo>
            <UserShowInfo>
              <UserShowIcon>
                <CalendarToday />
              </UserShowIcon>
              <UserShowInfoTitle>10-9-1999</UserShowInfoTitle>
            </UserShowInfo>
            <UserShowTitle>Contact Detail</UserShowTitle>
            <UserShowInfo>
              <UserShowIcon>
                <PhoneAndroid />
              </UserShowIcon>
              <UserShowInfoTitle>0833149078</UserShowInfoTitle>
            </UserShowInfo>
            <UserShowInfo>
              <UserShowIcon>
                <MailOutline />
              </UserShowIcon>
              <UserShowInfoTitle>abc@gmail.com</UserShowInfoTitle>
            </UserShowInfo>
            <UserShowInfo>
              <UserShowIcon>
                <LocationSearching />
              </UserShowIcon>
              <UserShowInfoTitle>HN</UserShowInfoTitle>
            </UserShowInfo>
          </UserShowBottom>
        </UserShow>
        <UserUpdate>
          <UserUpdateTitle> Edit </UserUpdateTitle>
          <UserUpdateForm>
            <UserUpdateLeft>
              <UserUpdateItem>
                <label>User Name</label>
                <UserUpdateInput
                  type="text"
                  placeholder="QuangDai"
                ></UserUpdateInput>
              </UserUpdateItem>
              <UserUpdateItem>
                <label>Full Name</label>
                <UserUpdateInput
                  type="text"
                  placeholder="Quang Dai"
                ></UserUpdateInput>
              </UserUpdateItem>
              <UserUpdateItem>
                <label>Email</label>
                <UserUpdateInput
                  type="text"
                  placeholder="abc@gmail.com"
                ></UserUpdateInput>
              </UserUpdateItem>
              <UserUpdateItem>
                <label>Phone</label>
                <UserUpdateInput
                  type="text"
                  placeholder="0833149078"
                ></UserUpdateInput>
              </UserUpdateItem>
              <UserUpdateItem>
                <label>Dia chi</label>
                <UserUpdateInput type="text" placeholder="HN"></UserUpdateInput>
              </UserUpdateItem>
            </UserUpdateLeft>
            <UserUpdateRight>
              <UserUpdateUpload>
                <UserUpdateImg src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"></UserUpdateImg>
                <label htmlFor="file">
                  <Publish style={{ cursor: "pointer" }} />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </UserUpdateUpload>
              <UserUpdateButton>Update</UserUpdateButton>
            </UserUpdateRight>
          </UserUpdateForm>
        </UserUpdate>
      </UserContainer>
    </Container>
  );
};

export default User;
