import { Publish } from "@material-ui/icons";
import React, { useMemo } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import styled, { css } from "styled-components";
import Chart from "../components/Chart";
import { productData } from "../dummyData";
const Container = styled.div`
  flex: 4;
  padding: 20px;
`;
const ProductTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const ProductAddButton = styled.button`
  width: 80px;
  border: none;
  padding: 5px;
  background-color: teal;
  color: white;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
`;
const ProductTitle = styled.h1``;
const ProductTop = styled.div`
  display: flex;
`;
const ProductTopLeft = styled.div`
  flex: 1;
`;
const ProductTopRight = styled.div`
  flex: 1;
  padding: 20px;
  margin: 20px;
`;
const ProductInfoTop = styled.div`
  display: flex;
  align-items: center;
`;
const ProductInfoBottom = styled.div`
  margin-top: 10px;
`;
const ProductInfoImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 20px;
`;
const ProductName = styled.span`
  font-weight: 600;
`;
const ProductInfoItem = styled.div`
  width: 150px;
  display: flex;
  justify-content: space-between;
`;
const ProductInfoKey = styled.span``;
const ProductInfoValue = styled.span`
  font-weight: 300;
`;
const ProductBottom = styled.div`
  padding: 20px;
  margin: 20px;
`;
const ProductForm = styled.form`
  display: flex;
  justify-content: space-between;
`;
const ProductFormLeft = styled.div`
  display: flex;
  flex-direction: column;
  & > lable {
    margin-bottom: 10px;
    color: gray;
  }
  & > input {
    margin-bottom: 10px;
    border: none;
    padding: 5px;
    border-bottom: 1px solid gray;
    color: red;
  }
  & > select {
    margin-bottom: 10px;
  }
`;
const ProductFormRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const ProductUpload = styled.div`
  display: flex;
  align-items: center;
  & > lable {
    margin-bottom: 10px;
    color: gray;
    cursor:pointer
  }
  & > input {
    margin-bottom: 10px;
    border: none;
    padding: 5px;
    border-bottom: 1px solid gray;
    color: red;
  }
  & > select {
    margin-bottom: 10px;
  }
`;
const ProductUploadImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 10px;
  object-fit: cover;
  margin-right: 20px;
`;
const ProductButton = styled.button`
  border: none;
  padding: 5px;
  border-radius: 5px;
  background-color: darkblue;
  color: white;
  font-weight: 600;
  cursor: pointer;
`;

const Product = () => {
  const location = useLocation();
  const productId = location.pathname.split("/")[2];
  const product = useSelector((state) =>
    state.product.products.find((product) => product._id === productId)
  );
  return (
    <Container>
      <ProductTitleContainer>
        <ProductTitle>Product</ProductTitle>
        <Link to="/newproduct">
          <ProductAddButton>Create</ProductAddButton>
        </Link>
      </ProductTitleContainer>
      <ProductTop>
        <ProductBottom>
          <ProductFormRight>
            <ProductUpload>
              <ProductUploadImg src={product.img}></ProductUploadImg>
              <label for="file">
                <Publish />
              </label>
              <input type="file" id="file" style={{ display: "none" }} />
            </ProductUpload>
          </ProductFormRight>
        </ProductBottom>
        <ProductTopRight>
          <ProductInfoTop>
            <ProductInfoImg src={product.img}></ProductInfoImg>
            <ProductName>{product.title}</ProductName>
          </ProductInfoTop>
          <ProductInfoBottom>
            <ProductInfoItem>
              <ProductInfoKey>ID:</ProductInfoKey>
              <ProductInfoValue>{product._id}</ProductInfoValue>
            </ProductInfoItem>
            <ProductInfoItem>
              <ProductInfoKey>Sales:</ProductInfoKey>
              <ProductInfoValue>1123</ProductInfoValue>
            </ProductInfoItem>
            <ProductInfoItem>
              <ProductInfoKey>InStock:</ProductInfoKey>
              <ProductInfoValue>{(product.inStock).toString}</ProductInfoValue>
            </ProductInfoItem>
          </ProductInfoBottom>
        </ProductTopRight>
      </ProductTop>
      <ProductBottom>
        <ProductForm>
          <ProductFormLeft>
            <label>Product Name</label>
            <input type="text" placeholder={product.title}></input>
            <label>Product Description</label>
            <input type="text" placeholder={product.desc}></input>
            <label>Price</label>
            <input type="text" placeholder={product.price}></input>
            <lable>In Stock</lable>
            <select name="inStock" id="inStock">
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
            <ProductButton>Update</ProductButton>
          </ProductFormLeft>
        </ProductForm>
      </ProductBottom>
    </Container>
  );
};

export default Product;
