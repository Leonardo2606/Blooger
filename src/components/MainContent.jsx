import React from 'react';
import styled from 'styled-components';
import { Container, MainPosts, SideBar, SideBarList, CategoriesListItem, GenericTitle,
PostImg, PostBox, PostTitle, PostText, PopularPostItem, PopularPostItemTitle, PostButton,
NewsLetterBox, NewsLetterInput} from '../style/main_content';
import useMainPosts from '../hooks/useMainPosts';

const CategoryTextP = styled(PostText)`
    padding: 0 0 2px 0;
    margin: 0;
`
const PopularPostTitle = styled(GenericTitle)`
    margin: 125px 0 70px 0;
`
const NewsLetterButton = styled(PostButton)`
    margin: 10px 50px;
    @media (max-width: 788px) {
        margin: 10px 0px;
        width: 95%;
    }
`

const MainContent = () => {

    const [posts, categories, popularPost] = useMainPosts();

    function apearCategories() {
        if(document.body.scrollTop > 100) alert('funfa!')
    }

    return (
        <Container onScroll={()=>apearCategories}>
            <MainPosts>
                {posts.map((post, index )=> {
                    return (
                        <PostBox key={index}>
                            <PostImg src={post}/>
                            <PostTitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</PostTitle>
                            <PostText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta
                                tellus nec purus semper malesuada. Duis dignissim eu tellus et suscipit. 
                                In consectetur, nisl vulputate faucibus aliquam, purus diam feugiat justo, 
                                sit amet ornare magna nisi congue risus. Class aptent taciti sociosqu ad 
                                litora torquent per conubia nostra, per inceptos himenaeos.
                            </PostText>
                            <PostButton>Read More</PostButton>
                        </PostBox>
                    )    
                })}
            </MainPosts>
            <SideBar>
                <GenericTitle>Category</GenericTitle>
                <SideBarList>
                    {categories.map((obj, index ) => {
                        return (
                        <CategoriesListItem key={index}>
                            <CategoryTextP>{obj.category}</CategoryTextP>
                            <CategoryTextP>{obj.amount}</CategoryTextP>
                        </CategoriesListItem>
                        )
                    })}
                    
                </SideBarList>
                <PopularPostTitle >Popular Posts</PopularPostTitle>
                <SideBarList>
                    {popularPost.map((post, index )=> {
                        return (
                            <PopularPostItem key={index}>
                                <PostImg src={post}/>
                                <PopularPostItemTitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</PopularPostItemTitle>
                            </PopularPostItem>    
                        )
                    })}
                </SideBarList>
                <NewsLetterBox >
                    <GenericTitle>Newsletter</GenericTitle>
                    <NewsLetterInput type={'email'} required placeholder='Email'/>
                    <NewsLetterButton>Subscribe</NewsLetterButton>
                </NewsLetterBox>
            </SideBar>
        </Container>
    )

};

export default MainContent;