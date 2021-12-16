import React from 'react';
import styled from 'styled-components';
import { BlogPostContainer, BlogPostButtonsDiv, Button, BlogPostSection, BlogCard, BlogCardImg,
BlogCardText, BlogCardButton, BlogCardFooter } from '../style/blog_post';
import rightArrow from '../assets/right-arrow.png';
import leftArrow from '../assets/left-arrow.png';
import useBlogPostImages from '../hooks/useBlogPostImages';

const RightButton = styled(Button)`
    background-image: url(${rightArrow});
    background-size: cover;
`
const LeftButton = styled(Button)`
    background-image: url(${leftArrow});
    background-size: cover;
`


const BlogPostCarousel = () => {

    const [postArray, allPostsArray, fowardPosts, backwardPosts] = useBlogPostImages();

    return (

        <BlogPostContainer>
            <BlogPostButtonsDiv>
                <LeftButton onClick={backwardPosts}></LeftButton>
                <RightButton onClick={fowardPosts}></RightButton>
            </BlogPostButtonsDiv>
            <BlogPostSection >
                {postArray.map((idx, index) => {
                    return (
                        <BlogCard key={index}>
                            <BlogCardImg src={allPostsArray[idx].img}/>
                            <BlogCardText>{allPostsArray[idx].text}</BlogCardText>
                            <BlogCardButton>Fashion</BlogCardButton>
                            <BlogCardFooter>{allPostsArray[idx].min2}</BlogCardFooter>
                        </BlogCard>
                )})}
            </BlogPostSection>
        </BlogPostContainer>

    )

}

export default BlogPostCarousel;