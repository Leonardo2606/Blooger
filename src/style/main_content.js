import styled from 'styled-components';

export const Container = styled.main`
    width: 95%;
    margin: auto;
    display: grid;
    grid-template-columns: 60% 35%;
`

export const MainPosts = styled.div`
    display: flex;
    flex-direction: column;
`

export const SideBar = styled.div`
    width: 100%;
    margin-left: 30px;  
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
    transition: all 1s ease;
    @media (max-width: 580px) {
        padding: 0;
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
`

export const PopularPostItemTitle = styled.h4`
    margin: 10px 0;
`

export const NewsLetterBox = styled.form`
    display: flex;
    flex-direction: column;
`

export const NewsLetterInput = styled.input`
    type: email;
    width: 60%;
    padding: 10px;
    margin: 0 50px;
    @media(max-width:788px) {
        width: 80%;
        margin: 0;
    }   
`