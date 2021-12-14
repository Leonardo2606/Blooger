import {useState} from 'react';
import post1 from '../assets/Blog-post/post-1.jpg'; 
import post2 from '../assets/Blog-post/post-2.jpg'; 
import post3 from '../assets/Blog-post/post-3.jpg'; 
import post4 from '../assets/Blog-post/post-4.png'; 
import post5 from '../assets/Blog-post/post-5.png'; 
import post6 from '../assets/Blog-post/post-6.png'; 
import post7 from '../assets/Blog-post/post-7.jpg'; 
import post8 from '../assets/Blog-post/post-8.jpg'; 
import post9 from '../assets/Blog-post/post-9.jpg'; 
import post10 from '../assets/Blog-post/post-10.jpg'; 

function useBlogPostImages() {

    let text = `Longon Fashion week's continued the evolution`;
    let min2 = '2 minutes';

    const [postArray, setPostArray] = useState([0,1,2]);
    const [allPostsArray, setallPostArray] = useState([
        {img:post1, text, min2, id:1}, {img:post2, text, min2, id:2}, {img:post3, text, min2, id:3}, 
        {img:post4, text, min2, id:4}, {img:post5, text, min2, id:5}, {img:post6, text, min2, id:6}, 
        {img:post7, text, min2, id:7}, {img:post8, text, min2, id:8},
        {img:post9, text, min2, id:9}, {img:post10, text, min2, id:10}
    ]);
    const [first, middle, last] = [...postArray];

    function fowardPosts() {
        if([last] < allPostsArray.length-1){
        setPostArray([middle, last, last+1]);}
        else setPostArray([last-1, last, 0]);
    };

    function backwardPosts() {
        if([first] > 0) {
            setPostArray([first-1, first, middle]);
        } else setPostArray([allPostsArray.length-1, first, middle]);
    };

    return [postArray, allPostsArray, fowardPosts, backwardPosts];

}

export default useBlogPostImages;