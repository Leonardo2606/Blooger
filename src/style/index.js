import styled from 'styled-components';
import Background1 from '../assets/Background-image.jpg';

export const MainBox = styled.main`
    background-image: url(${Background1});
    background-size: cover;
    background-repeat: no-repeat;
    height: 120vh;
    text-align: center;
    color: white;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
`

export const MainBoxTitle = styled.h1`
    width: 100%;
    margin: 0;
`

export const MainBoxSubtitle = styled.h3`
    width: 100%;
    margin: 0;
`

export const MainBoxButton = styled.button`
    border: none;
    width: 150px;
    background: linear-gradient( 45deg, rgb(149, 194, 224), rgb(179, 224, 254));;
    border-radius: 50px;
    padding: 15px;
    margin: 30px 0 250px 0;
    :hover {
        cursor: pointer;
    }
`