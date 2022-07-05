import { Badge, Menu } from '@material-ui/core'
import { Search,ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Container = styled.div`
    text-align: center;
`
const Warpper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`
const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`
const Input = styled.input`
  border: none;
`
const Logo = styled.h1`
  font-weight: box;
  text-align:center;
  color: brown;
`
const Left = styled.div`
  flex:1;
  display: flex;
  align-items: center;
`
const Center = styled.div`
  flex:1;
  text-align: center;
`
const Right = styled.div`
  flex:1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`
const Links  = styled(Link)`
  &:visited {color: black;}
  text-decoration: none;
`;
const Searchs = styled(Search)`
  cursor: pointer;
`
const Navbar = () => {
  const quantity = useSelector(state=>state.cart.quantity)
  console.log(quantity)
  return (
    <Container>
        <Warpper>
          <Left>
            <Language>EN</Language>
            <SearchContainer>
              <Input/>
              <Searchs onClick="" style={{color:"gray", fontSize:16}}/>
            </SearchContainer>
          </Left>
          <Center><Logo><Links to="/">Cửa Hàng ABC</Links></Logo></Center>
          <Right>
            <MenuItem><Links to="/register">Đăng Kí</Links></MenuItem>
            <MenuItem><Links to="/login">Đăng Nhập</Links></MenuItem>
            <MenuItem>
              <Badge badgeContent={quantity} color="primary">
                <Link to="/cart">
                <ShoppingCartOutlined/>
                </Link>
              </Badge>
            </MenuItem>
          </Right>
        </Warpper>
    </Container>
  )
}

export default Navbar