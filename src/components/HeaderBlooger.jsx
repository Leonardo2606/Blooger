import React from 'react';
import styled from 'styled-components';
import { Header, Title, NavBarList, NavBarItem, NavBarListIcon, NavBarImg, NavBox } from '../style/header';
import facebook from '../assets/facebook.png'; import instagram from '../assets/instagram.png';
import twitter from '../assets/twitter.png'; import youtube from '../assets/youtube.png';

const NavBarItemIcon = styled(NavBarItem)`
    transition: all 0.5s ease;
    padding: 0 5px;
    @media(max-width:788px) {
        position: absolute;
        top: 100;
        margin:0;
        padding:0;
    }
`

const HeaderBlooger = () => {

    return (
        <Header>
            <Title>Blooger</Title>
            <NavBox>
                <NavBarList>
                    <NavBarItem>Home</NavBarItem>
                    <NavBarItem>Category</NavBarItem>
                    <NavBarItem>Archive</NavBarItem>
                    <NavBarItem>Pages</NavBarItem>
                    <NavBarItem>Contact Us</NavBarItem>
                </NavBarList>    
            </NavBox>
            <NavBox>
                <NavBarListIcon>    
                    <NavBarItemIcon>
                        <NavBarImg src={facebook}/>
                    </NavBarItemIcon>
                    <NavBarItemIcon>
                        <NavBarImg src={instagram}/>
                    </NavBarItemIcon>
                    <NavBarItemIcon>
                        <NavBarImg src={twitter}/>
                    </NavBarItemIcon>
                    <NavBarItemIcon>
                        <NavBarImg src={youtube}/>
                    </NavBarItemIcon>    
                </NavBarListIcon>    
            </NavBox>
            
        </Header>
    )

}

export default HeaderBlooger;