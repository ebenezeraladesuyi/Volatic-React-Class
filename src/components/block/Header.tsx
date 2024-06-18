import styled from "styled-components";
import depot from "../../assets/image/logo (1).png";
import { CiHeart } from "react-icons/ci";
import { SlUser } from "react-icons/sl";
import { LiaSearchSolid } from "react-icons/lia";
import { MdMenu } from "react-icons/md";

const Header = () => {
  return (
    <Head>

        <HeadHold>

            <Child1>
                <Shop>HOME</Shop>
                <Shop>SHOP</Shop>
                <Shop>PAGES</Shop>
                <Shop>ELEMENT</Shop>
            </Child1>

            <Child2>
                <Logo src={depot} />
            </Child2>

            <Child3>
                <Cart>
                    <Cart1>CART</Cart1>

                    <Cart2>($0)</Cart2>
                </Cart>

                <Love>
                    <CiHeart />

                    <Zero>(0)</Zero>
                </Love>

                <Login>
                    <SlUser />

                    <Login1>LOGIN</Login1>
                </Login>

                <Search>
                    <LiaSearchSolid />
                </Search>

                <Toggle>
                    <MdMenu />
                </Toggle>
            </Child3>

        </HeadHold>
        
    </Head>
  )
}

export default Header

const Head = styled.section`
width: 100%;
height: 95px;
display: flex;
justify-content: center;
align-items: center;
/* box-shadow: 0 0 5px gray; */
position: fixed;
background-color: white;
z-index: 100;
`;

const HeadHold = styled.div`
width: 90%;
height: 100%;
/* background-color: green; */
display: flex;
justify-content: space-between;
align-items: center;
`;

const Child1 = styled.div`
display: flex;
align-items: center;
gap: 50px;
font-weight: 600;
font-size: 13px;
`;

const Child2 = styled.div``;

const Child3 = styled.div`
display: flex;
align-items: center;
gap: 20px;
font-size: 20px;
`;

const Shop = styled.ol``;

const Logo = styled.img`
width: 120px;
`;

const Cart = styled.div`
display: flex;
align-items: center;
gap: 10px;
`;

const Love = styled.div`
display: flex;
align-items: center;
/* gap: 15px; */
`;

const Login = styled.div`
display: flex;
align-items: center;
gap: 8px;
`;

const Search = styled.div``;

const Toggle = styled.div``;

const Cart1 = styled.h6``;

const Cart2 = styled.h6``;

const Zero = styled.h6``;

const Login1 = styled.h5`
font-size: 14px;
`;