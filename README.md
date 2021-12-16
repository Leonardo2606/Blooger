
This project was made through npx creat-react-app blooger.
styled components was used to style the project.
custom hooks where used to store arrays with the assets.
Check the build at https://blooger-practice.netlify.app

there are no animations in the style, everything happens using transition.

The BlogPosts.jsx carrousel:

The useBlogPostImages customHook has 2 useStates and 1 const variable, the first useState has 3 numbers [0,1,2], these will be used as index to render the objects of the second state, this that has all the objects that contain images and text, and the constant has 3 words [first, middle, last], this one is used in the fowardPosts and backwardPosts functions. In the BlogPosts component, the postArray state render with a map 3 objects from the allPostsArray state.

The functions fowardPosts

~~~ 

const [postArray, setPostArray] = useState([0,1,2]);
const [first, middle, last] = [...postArray]; 

function fowardPosts() {
    if([last] < allPostsArray.length-1){
        setPostArray([middle, last, last+1]);
    } else {
        setPostArray([last-1, last, 0]);
    }
}

~~~

function backwardPosts

~~~

const [postArray, setPostArray] = useState([0,1,2]);
const [first, middle, last] = [...postArray]; 

function backwarPosts(){

    if([first] > 0) {
        setPostArray([first-1, first, middle]);
    } else {
        setPostArray([allPostsArray.length-1, first, first]);
    }

}

~~~
