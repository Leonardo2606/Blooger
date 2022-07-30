import styled from 'styled-components';
import menu from '../assets/menu.png';

export const Header = styled.header`
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const NavBox = styled.nav`
    margin: 0;
    padding: 0;
`

export const Title = styled.h1`
    font-weight: 500;
    margin: 0px 30px;
    padding-bottom: 20px;
    @media (max-width: 788px) {
        margin:0 10px;
    }
`

export const NavBarList = styled.ul`
    list-style: none;
    padding: 0;
    
`

export const NavBarItem = styled.li`
    display: inline-block;
    padding: 3px 5px 0 5px;
    border-right: 1px solid rgba(0,0,0,0);
    border-left: 1px solid rgba(0,0,0,0);
    &:hover {
        cursor: pointer;
        border-right: 1px solid black;
        border-left: 1px solid black;
        text-shadow: 1px 1px 1px rgba(0,0,0,10);
    }
    &:active{
        box-shadow: 0px 0px 5px black;
        background-color: black; 
    }
    @media (max-width: 600px) {
        padding: 0;
    }
`

export const NavBarListIcon = styled.ul`
    list-style: none;
    padding: 0px;
    margin: 0 30px 15px 0;
    @media (max-width: 788px) {
        background: url(${menu});
        background-size: contain;
        background-repeat: no-repeat;
        width: 20px;
        height: 20px;
        margin: 0px 30px 0px 0px;
        li:nth-of-type(n) {
            opacity: 0;
        };
        :hover {
            cursor: pointer;
            background: rgba(255,255,255,1%);
            height: 100px;
            width: 32px;
            margin-top: 25px;
            li:nth-of-type(n) {
                opacity: 1;
                position: relative;
                background-color: white;
                border-radius: 5px;
                margin: 2px 0;
                width: 20px;
                padding: 3px;
            }
        }
    }
`

export const NavBarImg = styled.img`
    width: 20px;
    height: 20px;
`

