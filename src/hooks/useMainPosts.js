import { useState } from 'react';
import blog1 from '../assets/Blog-post/blog1.png';
import blog2 from '../assets/Blog-post/blog2.png';
import blog3 from '../assets/Blog-post/blog3.png';
import blog4 from '../assets/Blog-post/blog4.png';
import popularPost1 from '../assets/popular-post/m-blog-1.jpg';
import popularPost2 from '../assets/popular-post/m-blog-2.jpg';
import popularPost3 from '../assets/popular-post/m-blog-3.jpg';
import popularPost4 from '../assets/popular-post/m-blog-4.jpg';
import popularPost5 from '../assets/popular-post/m-blog-5.jpg';

function useMainPosts() {

    const [posts] = useState([blog1, blog2, blog3, blog4]);
    const [categories] = useState([
        {category: 'Software', amount: '(5)'},
        {category: 'Techology', amount: '(2)'},
        {category: 'Lifestyle', amount: '(7)'},
        {category: 'Shopping', amount: '(1)'},
        {category: 'Food', amount: '(8)'}
    ])

    const [popularPost] = useState([
        popularPost1, popularPost2, popularPost3, popularPost4, popularPost5
    ])


    return [posts, categories, popularPost];

}

export default useMainPosts;