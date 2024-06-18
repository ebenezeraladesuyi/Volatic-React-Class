/* eslint-disable @typescript-eslint/no-explicit-any */

import styled from "styled-components";
// import can from "../../assets/image/h1-product-8-600x728.jpg"

interface iCard {
    image: any;
    name: string;
    price: string;
    neww? : string;
}

const ShopCard:React.FC<iCard> = ({image, name, price, neww}) => {

    return (
        <Card>

            <New>{neww}</New>

            <CardImg src={image} />

            <Name>{name}</Name>

            <Price>{price}</Price>

        </Card>
    )
}

export default ShopCard;

const Card = styled.div`
width: 270px;
height: 400px;
display: flex;
flex-direction: column;
gap: 10px;
align-items: center;
position: relative;
`;

const CardImg = styled.img`
width: 100%;
height: 80%;
`;

const Name = styled.h5`
`;

const Price = styled.h5`
color:  #c4a892;
`;

const New = styled.div`
position: absolute;
left: 25px;
top: 15px;
`;
