// import React from 'react'
import styled from "styled-components";
import { TiArrowSortedDown } from "react-icons/ti";
import ShopCard2 from "../../components/static/ShopCard2";
import can from "../../assets/image/h1-product-8-600x728.jpg";

const Shop2 = () => {
  return (
    <Shopp>

        <Vases>
            <Basic>
                <All>ALL</All>
                <All>HOME DECOR</All>
                <All>LIGHTING</All>
                <All>DECORATION</All>
                <All>VASES</All>
                <All>BASICS</All>
            </Basic>

            <Filt>
                <Fil>FILTER</Fil>
                <Span>
                    <TiArrowSortedDown />
                </Span>
            </Filt>
        </Vases>

        <Cards>
          <ShopCard2
            pics={can} 
            title="BASKET WITH HANDLES"
            price="$160"
          />
        </Cards>

    </Shopp>
  )
}

export default Shop2;

const Shopp = styled.section`
width: 100%;
height: 100%;
/* background-color: green; */
display: flex;
flex-direction: column;
align-items: center;
padding-top: 90px;
padding-bottom: 20px;
`;

const Vases = styled.div`
width: 90%;
display: flex;
justify-content: space-between;
/* background-color: red; */
`;

const Basic = styled.div`
display: flex;
gap: 40px;
`;

const Filt = styled.div`
display: flex;
gap:15px;
align-items: center;
`;

const All = styled.h6`
font-size: 14px;
color: #969898;
cursor: pointer;
font-weight: 400;
`;

const Fil = styled.h6`
font-size: 14px;
cursor: pointer;
font-weight: 400;
`;

const Span = styled.span``;

const Cards = styled.span``;
