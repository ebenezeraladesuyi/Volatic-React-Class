
import styled from "styled-components";
import { TiArrowSortedDown } from "react-icons/ti";
import ShopCard from "../../components/static/ShopCard";
import can from "../../assets/image/h1-product-8-600x728.jpg";
import speaker from "../../assets/image/h1-product-7-600x728.jpg";
import chair from "../../assets/image/h1-product-6-600x728.jpg";
import clock from "../../assets/image/h1-product-5-600x728.jpg";
import storage from "../../assets/image/h1-product-4-600x728.jpg";
import vase from "../../assets/image/h1-product-2-600x728.jpg";
import lamp from "../../assets/image/h1-product-3-1-600x728.jpg";
import table from "../../assets/image/h1-product-1-600x728.jpg";

const Shop = () => {

    return (
        <Shopping>

            <ShopContainer>

                <ShopNav>
                    <All>
                        <Home>ALL</Home>
                        <Home>HOME DECOR</Home>
                        <Home>LIGHTING</Home>
                        <Home>DECORATION</Home>
                        <Home>VASES</Home>
                        <Home>BASICS</Home>
                    </All>

                    <Filter>
                        <Filt>FILTER</Filt>
                        <TiArrowSortedDown />
                    </Filter>
                </ShopNav>

                <CardHold>

                    <ShopCard 
                        image={can}
                        name="BASKET WITH HANDLES"
                        price="$160"
                        neww="NEW"
                    />

                    <ShopCard 
                        image={chair}
                        name="DECO ASSESSORY"
                        price="$15"
                        neww="NEW"
                    />

                    <ShopCard 
                        image={speaker}
                        name="FLOWER VASE"
                        price="$170"
                    />

                    <ShopCard 
                        image={clock}
                        name="WALL CLOCK"
                        price="$115"
                        neww="NEW"
                    />

                    <ShopCard 
                        image={storage}
                        name="NEWSPAPAR STORAGE"
                        price="$60"
                    />

                    <ShopCard 
                        image={vase}
                        name="POTTERY VASE"
                        price="$90"
                    />

                    <ShopCard 
                        image={lamp}
                        name="ROSE HOLDBACK"
                        price="$24"
                        neww="NEW"
                    />

                    <ShopCard 
                        image={table}
                        name="TABLE LAMP"
                        price="$240"
                    />

                </CardHold>

            </ShopContainer>

        </Shopping>
    )
}

export default Shop;

const Shopping = styled.section`
width: 100%;
height: 100%;
/* background-color: gray; */
display: flex;
justify-content: center;
align-items: center;
padding-top: 100px;
padding-bottom: 30px;
`;

const ShopContainer = styled.div`
width: 90%;
height: 100%;
/* background-color: blue; */
`;

const ShopNav = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`;

const All = styled.div`
display: flex;
gap: 35px;
`;

const Filter = styled.button`
display: flex;
gap: 10px;
align-items: center;
border: none;
background: none;
`;

const Home = styled.a`
color:  #c4a892;
cursor: pointer;
font-size: 14px;

:hover{
    color: black;
}
`;

const Filt = styled.h6`
font-size: 13px;
`;

const CardHold = styled.section`
width: 100%;
margin-top: 30px;
display: flex;
justify-content: space-between;
flex-wrap: wrap;
`;
