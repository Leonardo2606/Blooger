import styled, {keyframes} from 'styled-components';
import Background2 from '../assets/Abract01.png';

/*const closer = keyframes`
    0% {
        margin: 0 100px;
    }
    100% {              
        margin: 0;
    }
`

//////////////////  Melhor usar transition do que essas animações /////////////////////////////////

const further = keyframes`
    0%{
        margin: 0;
    }
    100% {
        margin: 0 100px;
    }
`*/

export const BlogCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 280px;
    height: 380px;
    background-color: rgba(250,250,250,0);
    box-shadow: 0px 15px 15px rgba(0,0,0,30%);
    transition: all 1s ease;
    transition-delay: 2s;
    opacity: 0;
    overflow: hidden;
    &:nth-child(1){
        margin-left: 100px;
    };
    @media (max-width: 890px) {
        width: 240px;
        height: 330px;
    }
    @media (max-width: 788px) {
        width: 150px;
        height: 230px;
        :hover {
            width: 180px;
            height: 260px;
        }
    }
`
/*^  ^^^^^^   animation: ${further} 2s;
animation-delay: 2s;*/
export const BlogPostSection = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-image: url(${Background2});
    background-size: 60% 100%;
    background-repeat: no-repeat;
    background-position: right;
    height: 95vh;
    @media (max-width: 788px) {
        background-size: 100% 80%;
        background-repeat: no-repeat;
        background-position: right;
    }
`

export const BlogPostContainer = styled.div`
    margin-top: 20px;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 60px, auto;
    &:hover ${BlogCard} {
        transition: all 0.5s ease;
        opacity: 1;
        &:nth-child(1){
            margin: 0;
        }
    };
`   
// ^^^^ animation: ${closer} 0.7s;
export const BlogPostButtonsDiv = styled.div`
    margin: auto;
`

export const Button = styled.button`
    border: none;
    background-color: rgba(0,0,0,0);
    width: 30px;
    height: 30px;
    margin: 0 20px;
    :hover{
        cursor: pointer;
    }
`

export const BlogCardImg = styled.img`
    flex: 1 1 50%;
`

export const BlogCardText = styled.p`
    font-family: sans-serif;    
    font-weight: bold;
    font-size: 1rem;
    text-align: center;
    padding: 0;
    margin-top: 30px;
    @media (max-width: 788px) {
        font-size: 0.8rem;
        margin: 10px 0;
    }
`

export const BlogCardButton = styled.button`
    width: 120px;
    padding: 15px;
    border-radius: 30px;
    margin: 0 auto;
    border: none;
    background: linear-gradient( 45deg, rgb(149, 194, 224), rgb(179, 224, 254));
    :hover{
        cursor: pointer;
    }
    @media (max-width: 788px) {
        width: 80px;
        height: 20px;
        padding: 3px 0 5px 0;
    }
`

export const BlogCardFooter = styled.footer`
    text-align: center;
    color: rgba(0,0,0,90%);
    font-size: 0.8rem;
    margin-top: 20px;   
    flex: 1 0 auto;
    @media (max-width: 788px) {
        margin: 10px 0 5px 0;
    }
`