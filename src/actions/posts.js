import { UPDATE_POSTS } from "./actionTypes";
import { APIUrls } from "../Extra/urls";
export function fetchPosts() {
  return (dispatch) => {
    const url = APIUrls.fetchPosts();
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("Inshita");
        dispatch(updatePosts(data.posts));
      });
  };
}
export function updatePosts(posts) {
  return {
    type: UPDATE_POSTS,
    posts,
  };
}
