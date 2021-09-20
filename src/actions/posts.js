
import{UPDATE_POSTS } from './actionTypes';
export function fetchPosts(){
    return(dispatch)=>{
        const url='http://13.233.236.31/api/v1/posts?pages=1&limit=5';
        fetch(url).then((response)=>{
            console.log('response',response);
            return response.json();

        }).then((data)=>{
            console.log(data.posts);
            console.log("Inshita");
        dispatch(updatePosts(data.posts));
        });
    }
    }
    export function updatePosts(posts){
        console.log(posts,"%%");
        return{
            type: UPDATE_POSTS,
            posts,
        }
    
}