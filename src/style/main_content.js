import styled from 'styled-components';

export const Container = styled.main`
    width: 95%;
    margin: 50px auto;
    display: grid;
    grid-template-columns: 60% 35%;
    @media (max-width: 560px) {
        width: 100%;
        grid-template-columns: 90% 10%;
        margin: 50px 5px;
    }
`

export const MainPosts = styled.div`
    display: flex;
    flex-direction: column;
    @media (max-width: 560px){
        grid-column-start: 1;
        grid-column-end: 3;
    }
`

export const SideBar = styled.div`
    width: 100%;
    margin-left: 30px;  
    @media (max-width: 560px) {
        grid-column-start: 1;
        grid-column-end: 3;
        margin: 0;
    }
`

export const PostBox = styled.div`
    display: flex;
    overflow: hidden;
    flex-direction: column;
    justify-content: space-around;
    margin-bottom: 50px;
    border-bottom: 2px solid rgba(0,0,0,30%);
`

export const PostImg = styled.img`
    transition: all 1s ease;
    :hover {
        transform: scale(1.05);
        image-size: cover;
    }
`

export const PostTitle = styled.h2`
    flex: 1 1 auto;
    padding: 20px 10px 10px 0;
    margin: 0;
`

export const PostText = styled.p`
    padding: 10px 10px 10px 0;
    margin: 0 0 15px 0;
`

export const PostButton = styled.button`
    width: 25%;
    border: none;
    background: linear-gradient(20deg, rgb(130,180,250), rgb(230,230,255));
    padding: 10px;
    margin-bottom: 30px;
    transition: all .3s ease;
    :hover {
        transform: scale(1.1);
        cursor: pointer;
    }
    @media (max-width: 788px) {
        width: 50%;
    }
`

export const GenericTitle = styled.h2`
    text-align: left;
    margin: 0 0 25px 0;
`

export const SideBarList = styled.ul`
    list-style: none;
    width: 80%;
    margin: auto;
    transition: all 1s ease;
    padding: 0;
    @media (max-width: 560px) {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
    }
`

export const CategoriesListItem = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: linear-gradient(20deg, rgb(130,180,250), rgb(230,230,255));
    border-radius: 20px;
    margin: 10px 0;
    padding: 5px 20px;
    :hover {
        cursor: pointer;
    }
`

export const PopularPostItem = styled.li`
    overflow: hidden;
    margin: 0 0 80px 0;
    display: flex;
    flex-direction: column;
    @media (max-width: 560px) {
        width: 45%;
        margin: 10px auto;
    };
    @media (max-width: 360px) {
        width: 80%;
    }
`

export const PopularPostItemTitle = styled.h4`
    margin: 10px 0;
`

export const NewsLetterBox = styled.form`
    display: flex;
    flex-direction: column;
    margin: auto;
    @media (max-width: 560px) {
        width: 90%;
    }
`

export const NewsLetterInput = styled.input`
    type: email;
    width: 100%;
    padding: 10px 3px;
    @media(max-width:788px) {
        width: 95%;
        margin: auto;
    }   
`