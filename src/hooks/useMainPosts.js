import { useState } from 'react';
import blog1 from '../assets/Blog-post/blog1.jpg';
import blog2 from '../assets/Blog-post/blog2.jpg';
import blog3 from '../assets/Blog-post/blog3.jpg';
import blog4 from '../assets/Blog-post/blog4.jpg';
import popularPost1 from '../assets/popular-post/m-blog-1.jpg';
import popularPost2 from '../assets/popular-post/m-blog-2.jpg';
import popularPost3 from '../assets/popular-post/m-blog-3.jpg';
import popularPost4 from '../assets/popular-post/m-blog-4.jpg';
import popularPost5 from '../assets/popular-post/m-blog-5.jpg';

function useMainPosts() {

    const [posts] = useState([blog1, blog2, blog3, blog4]);

    const [popularPost] = useState([
        popularPost1, popularPost2, popularPost3, popularPost4, popularPost5
    ])


    return [posts, popularPost];

}

export default useMainPosts;