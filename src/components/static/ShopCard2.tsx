/* eslint-disable @typescript-eslint/no-explicit-any */
// import React from 'react'
import styled from "styled-components";
// import can from "../../assets/image/h1-product-8-600x728.jpg";

interface iShopCard {
    pics: any;
    title: string;
    price: string;
}

const ShopCard2:React.FC<iShopCard> = ({pics, title, price}) => {
  return (
    <ShopCardd>

        <Image src={pics} alt="" />

        <Basket>{title}</Basket>

        <Price>{price}</Price>
    </ShopCardd>
  )
}

export default ShopCard2;

const ShopCardd = styled.div`
width: 270px;
height: 390px;
/* background-color: gray; */
`;

const Image = styled.img`
width: 100%;
`;

const Basket = styled.h5`
text-align: center;
`;

const Price = styled.h5`
text-align: center;
`;

// const ShopCardd = styled.div``;