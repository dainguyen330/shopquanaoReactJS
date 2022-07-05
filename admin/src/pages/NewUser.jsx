import React from "react";
import styled, { css } from "styled-components";
const Container = styled.div`
  flex: 4;
`;
const NewUserTitle = styled.h1``;
const NewUserForm = styled.form`
  display: flex;
  flex-wrap: wrap;
`;
const NewUserItem = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  margin-right: 20px;
  & > lable {
    margin-bottom: 10px;
    font-size: 14px;
    font-weight: 600;
    color: #9c9a9a;
  }
  & > input {
    height: 20px;
    padding: 10px;
    border: 1px solid gray;
    border-radius: 5px;
  }
`;
const NewUserGender = styled.div`
  & > input {
    margin-top: 15px;
  }
  & > label {
    margin: 10px;
    font-size: 18px;
    color: #555;
  }
`;
const NewUserSelect = styled.select`
  height: 40px;
  border-radius: 5px;
`;
const NewUserButton = styled.button`
  width: 200px;
  border: none;
  background-color: darkblue;
  color: white;
  padding: 7px 10px;
  font-weight: 600;
  border-radius: 10px;
  margin-top: 30px;
  cursor: pointer;
`;

const NewUser = () => {
  return (
    <Container>
      <NewUserTitle>New User</NewUserTitle>
      <NewUserForm>
        <NewUserItem>
          <lable>UserName</lable>
          <input type="text" placeholder="john" />
        </NewUserItem>
        <NewUserItem>
          <lable>Full Name</lable>
          <input type="text" placeholder="john smith" />
        </NewUserItem>
        <NewUserItem>
          <lable>Full Name</lable>
          <input type="email" placeholder="admin@email.com" />
        </NewUserItem>
        <NewUserItem>
          <lable>Password</lable>
          <input type="email" placeholder="password" />
        </NewUserItem>
        <NewUserItem>
          <lable>Phone</lable>
          <input type="number" placeholder="0833149078" />
        </NewUserItem>
        <NewUserItem>
          <lable>Dia chi</lable>
          <input type="email" placeholder="HN" />
        </NewUserItem>
        <NewUserItem>
          <lable>Gender</lable>
          <NewUserGender>
            <input type="radio" name="gender" id="male" value="male" />
            <label for="male">Male</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label for="female">Female</label>
            <input type="radio" name="gender" id="other" value="other" />
            <label for="other">Other</label>
          </NewUserGender>
        </NewUserItem>
        <NewUserItem>
          <label>Active</label>
          <NewUserSelect name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </NewUserSelect>
        </NewUserItem>
        <NewUserItem>
          <NewUserButton>Create</NewUserButton>
        </NewUserItem>
      </NewUserForm>
    </Container>
  );
};

export default NewUser;
