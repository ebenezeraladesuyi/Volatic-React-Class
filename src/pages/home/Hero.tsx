
import styled from "styled-components";
import chair from "../../assets/image/h1-slide1-img.png";

// changes made by Joe
// const hero = () => {

//     return(
//         <>
//         </>
//     )
// };

const Hero = () => {

    return (
        <Herro>

            <Number>
                <Num>01</Num>
                <Line />
            </Number>

            <HeroHold>

                <Left>

                    <Think>THINK DIFFERENT</Think>

                    <Lorem>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae suscipit sequi ab molestias amet quia illo, labore molestia?</Lorem>

                </Left>

                <Right>
                    <Pics src={chair} />
                </Right>

            </HeroHold>

        </Herro>
    )
}

export default Hero;

const Herro = styled.section`
width: 100%;
height: 100vh;
/* background-color: green; */
display: flex;
justify-content: center;
align-items: center;
position: relative;
`;

const HeroHold = styled.div`
width: 90%;
height: 100%;
background-color: #e7e6e6;
z-index: 80;
display: flex;
align-items: center;
justify-content: space-around;
`;

const Number = styled.div`
position: absolute;
left: 20px;
bottom: 200px;
display: flex;
align-items: center;
gap: 5px;
`;

const Num = styled.h6`
font-size: 17px;
`;

const Line = styled.hr`
border: 1px solid black;
width: 50px;
`;

const Left = styled.div`
width: 40%;
margin-top: 300px;
margin-left: 80px;
`;

const Right = styled.div`
width: 45%;

`;

const Think = styled.h4`
font-size: 35px;
font-weight: 600;
margin-bottom: 20px;
letter-spacing: 5px;
`;

const Lorem = styled.h6`
font-size: 14px;
color: #a9a9a9;
line-height: 24px;
`;

const Pics = styled.img`
width: 70%;
margin-top: 70px;
margin-left: 90px;
`;