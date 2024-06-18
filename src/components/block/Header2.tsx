import React from 'react'
import styled from "styled-components";
import logo from "../../assets/image/logo (1).png"
import {AiOutlineMenu} from "react-icons/ai";


const Header2 = () => {

    const [mobile, setMobile] = React.useState(false);
    
    const dropDown = () => {
        setMobile(!mobile)
    }

  return (
    <Head>
        <Holder>

            <Logo>
                <Image src={logo} alt="" />
            </Logo>

            <Navs>
                <List>Home</List>
                <List>About</List>
                <List>Contact</List>
            </Navs>

            <Start>Get Started</Start>

            <Menu onClick={dropDown}>
                <AiOutlineMenu />
            </Menu>

            {/* mobile responsiveness */}
            { mobile ? 
                <Mobile>

                    <Navs2>
                        <List2>Home</List2>
                        <List2>About</List2>
                        <List2>Contact</List2>
                    </Navs2>

                    <Start2>Get Started</Start2>

                </Mobile>
                :
                null
            }

        </Holder>
    </Head>
  )
}

export default Header2;

const Head = styled.section`
width: 100%;
height: 70px;
/* background-color: gray; */
display: flex;
justify-content: center;
align-items: center;
box-shadow: 0 0 5px gray;
`;

const Holder = styled.div`
/* background-color: blue; */
width: 90%;
height: 100%;
display: flex;
justify-content: space-between;
align-items: center;
font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
position: relative;
`;

const Logo = styled.div`
width: 100px;
`;

const Image = styled.img`
width: 100%;
`;

const Navs = styled.div`
display: flex;
align-items: center;
gap: 30px;

@media screen and (max-width: 768px) {
    display: none;
}
`;

const List = styled.ol`
cursor: pointer;
`;

const Start = styled.button`
background-color: #3bc2ef;
color: white;

@media screen and (max-width: 768px) {
    display: none;
}
`;

const Mobile = styled.div`
display: none;

@media screen and (max-width: 768px) {
position: absolute;
right: 0px;
top: 75px;
background-color: gray;
height: 200px;
padding: 10px;
border-radius: 10px;
display: flex;
flex-direction: column;
gap: 10px;   
}
`;

const Menu = styled.div`
display: none;

@media screen and (max-width: 768px) {
 display: block;
}
`;

const Navs2 = styled.div``;

const List2 = styled.ol`
color: white;
margin-top: 10px;
`;

const Start2 = styled.button``;
