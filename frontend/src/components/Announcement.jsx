import React from 'react'
import styled, { css } from 'styled-components'

const Container = styled.div`
    height: 30px;
    background-color: teal;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500px;
`

const Announcement = () => {
  return (
    <Container> Siêu sale 30/4 , 1/5 tới tận 50%</Container>
  )
}

export default Announcement