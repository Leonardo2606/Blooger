import styled from 'styled-components';

export const FooterContaniner = styled.footer`
    background-color: rgba(10,10,10,95%);
    padding: 30px 0 0 0;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
`

export const FooterContentBox = styled.div`
    flex: 0 1 15%;
    height: 200px;
    padding: 5px;
    text-align: left;
    overflow: auto;
    @media (max-width: 788px) {
        flex: 0 1 40%;
    }
`

export const FooterForm = styled.form`
    flex: 0 1 15%;
    height: 200px;
    padding: 5px;
    text-align: left;
    overflow: auto;
    @media (max-width: 788px) {
        flex: 0 1 40%;
    }
`

export const FooterTitle = styled.h2`
    color: white;
    font-weight: bold;
    margin: 10px 0;
`

export const FooterText = styled.p`
    color: rgba(255,255,255,70%);
    margin: 5px 0;
`

export const TextSpan = styled.span`
    color: white;
`

export const FooterInput = styled.input`
    padding: 5px;
    width: 80%;
    background-color: black;
    color: white;
    border: none;
`

export const FooterButton = styled.button`
    width: 25px;
    height: 25px;
    border: none;
    font-weight: 500;
    font-size: 1.1rem;
    background-color: rgb(149, 194, 224);
    margin: 0;
    padding: 0;
    :hover {
        cursor: pointer;
    }
`

export const EndFooter = styled.footer`
    flex: 1 0 100%;
    padding: 20px 0 25px 0;
    text-align: center;
    color: rgba(100,100,100,100%);
`

export const FooterInstagramList = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
`

export const FooterItem = styled.img`
    margin: 5px 0;
    width: 55px;
    height: 55px;
    :hover {
        cursor: pointer;
    }
`

export const FooterSocialList = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    margin: 20px 30px 0 0;
`

export const FooterSocialImg = styled.img`
    width: 25px;
    height: 25px;
    background-color: white;
    border-radius: 10px;
    transition: all 0.5s ease;
    :hover {
        cursor: pointer;
        transform: scale(1.3);
    }
`