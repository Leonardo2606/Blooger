import styled from 'styled-components';
import Background2 from '../assets/Abract01.png';

export const BlogPostContainer = styled.div`
    margin-top: 50px;
    display: grid;
    grid-template-columns: 100%;
    overflow: hidden;
    background-image: url(${Background2});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: right;
    @media (max-width: 788px) {
        background-size: 100% 80%;
        background-repeat: no-repeat;
        background-position: right;
    };
`   

export const BlogPostSection = styled.div`
    display: flex;
    height: 500px;
    justify-content: space-evenly;
    align-items: center;
    overflow: hidden;
    @media (max-width: 470px) {
        height: 400px;
    }
`

export const BlogCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 280px;
    height: 380px;
    border-radius: 10px;
    background-color: rgba(250,250,250,0);
    box-shadow: 0px 15px 15px rgba(0,0,0,30%);
    transition: all 1s ease;
    overflow: hidden;
    @media (max-width: 890px) {
        width: 240px;
        height: 350px;
    };
    @media (max-width: 788px) {
        width: 200px;
        height: 290px;
    };
    @media (max-width: 610px) {
        &:nth-child(1){
            width: 300px;
            position: relative;
            left: -40px;
            opacity: 0.6;
        }
        &:nth-child(2){
            width: 430px;
            height: 380px;
        }
        &:nth-child(3){
            width: 300px;
            position: relative;
            right: -40px;
            opacity: 0.6;
        }
    }
    @media (max-width: 530px) {
        &:nth-child(1){
            width: 500px;
            position: relative;
            left: -40px;
            opacity: 0.6;
        }
        &:nth-child(2){
            width: 1030px;
            height: 380px;
        }
        &:nth-child(3){
            width: 500px;
            position: relative;
            right: -40px;
            opacity: 0.6;
        }
    }
    @media (max-width: 470px) {
        &:nth-child(2){
            width: 2000px;
            height: 380px;
        }
    }
    
`


export const BlogPostButtonsDiv = styled.div`
    height: 30px;
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
        margin: 10px;
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
        width: 100px;
        height: 35px;
        padding: 3px 0 5px 0;
    }
`

export const BlogCardFooter = styled.footer`
    text-align: center;
    color: rgba(0,0,0,90%);
    font-size: 0.8rem; 
    flex: 1 0 auto;
    
    margin: 10px;
    @media (max-width:890px){
        margin: 15px 10px;
    }
    @media (max-width: 788px) {
        margin: 5px 10px;
        display: flex;
        align-items: center;
        justify-content: space-around;
    }
`