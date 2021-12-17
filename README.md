
What i used for this Project
==============================

This project was made through npx creat-react-app blooger.
styled components was used to style the project.
custom hooks where used to store arrays with the assets.
Check the build [here](https://blooger-practice.netlify.app)  

there are no animations in the style, everything happens using transition.  

The BlogPosts.jsx carrousel
----------------------------
The useBlogPostImages customHook has 2 useStates and 1 const variable, the first useState has 3 numbers [0,1,2], these will be used as index to render the objects of the second state, the second state has all the objects that contain images and text, and the constant has 3 words [first, middle, last], this one is used in the forwardPosts and backwardPosts functions. In the BlogPosts component, the postArray state render with a map 3 objects from the allPostsArray state.

Function forwardPosts
---------------------------  

After the website loads the first, middle and last variables will respectevely be [0,1,2], if the right pointing arrow in the website is pressed it will trigger the function bellow, in the if statement it will check if last is smaller than the last element in the allPostsArray, if true it will update the variables as seen in the code, with the last being last+1, it will be like this [1,2,3] and so and on up to the last object in the allPostsArray.  
When the last variable is equal to the last object it will trigger the else statement, this will update from [7,8,9] to [8,9,0], and now that last variable is 0 it will trigger the if statement making the carousel infinite.

~~~ 
const [allPostsArray, setAllPostsArray] = [{object1}, {object2}...{object10}];
const [postArray, setPostArray] = useState([0,1,2]);
const [first, middle, last] = [...postArray]; 

function forwardPosts() {
    if([last] < allPostsArray.length-1){
        setPostArray([middle, last, last+1]);
    } else {
        setPostArray([last-1, last, 0]);
    }
}
~~~

Function backwardPosts
-----------------------------  

The function backwardPosts goes as the name implyes, backwards, so instead of cheking the last variable the first one is checked. Let's say the variables [first, middle, last] are [1,2,3], in the if statement if the first is bigger than 0 it will update the variables from [1,2,3] to [0,1,2], but when the first is 0 it will trigger the else statement that will take the index of the last object of the allPostsArray, wich in this case is 9, and the variables will be updated from [0,1,2] to [9,0,1], and now that the first is bigger than 0 this makes the carousel infinite.

~~~
const [postArray, setPostArray] = useState([0,1,2]);
const [first, middle, last] = [...postArray]; 

function backwardPosts(){

    if([first] > 0) {
        setPostArray([first-1, first, middle]);
    } else {
        setPostArray([allPostsArray.length-1, first, middle]);
    }

}
~~~
