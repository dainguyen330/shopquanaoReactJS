import React from "react";
import styled, { css } from "styled-components";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {login} from "../../src/redux/apiCalls"
const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &>input{
    padding: 10px;;
    margin-bottom: 20px;
  }
  &>button{
    padding:10px;
    width: 100px;
  }
`
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch  = useDispatch()
  const handleClick = (e) =>{
    e.preventDefault()
    login(dispatch,{username, password})
  }
  return (
    <Container>
      <input
        type="text"
        placeholder="username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder='password'
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleClick}>Đăng nhập</button>
    </Container>
  );
};

export default Login;
