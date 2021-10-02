import React, { Component } from "react";
import PropTypes  from "prop-types";

class PostLists extends Component {
  render() {
    // console.log("props+++++++",this.props.posts[0]);
    const { posts } = this.props;
    console.log(posts);
    return (
      <div className="posts-list">
        {posts.map((post) => (
        
          <div className="post-wrapper" key={post.id}>
            <div className="post-header">
              <div className="post-avatar">
                <img
                  src={"http://13.233.236.31"+post.user.avatar}
                  alt="user-pic"
                />
                <div>
                  <span className="post-author">{post.user.name}</span>
                  <span className="post-time">a minute ago</span>
                </div>
              </div>
              <div className="post-content">{post.content}</div>
              <div className="post-image">
                <img src={"http://13.233.236.31"+post.postImage} alt=""/>
              </div>
              <div className="post-actions">
                <div
                  className="post-like"
                  img
                  src="https://www.flaticon.com/free-icon/like_126473?term=like&page=1&position=13&page=1&position=13&related_id=126473&origin=search"
                  alt="likes-icon"
                />
                {/* <span>{post.like.length}</span> */}

                <div
                  className="post-comments-icon"
                  img
                  src="https://www.flaticon.com/free-icon/chat_134783?term=comment&page=1&position=25&page=1&position=25&related_id=134783&origin=search"
                  alt="comments-icon"
                />
                {/* <span>{post.comments.length}</span> */}
              </div>
              <div className="post-comment-box">
                <input placeholder="Start typing a comment" />
              </div>

              <div className="post-comments-list">
                <div className="post-comments-item">
                  <div className="post-comment-header">
                    <span className="post-comment-author">Inshita Bamba</span>
                    <span className="post-comment-time">a minute ago</span>

                    <span className="post-comment-likes">21</span>
                  </div>
                </div>
                <div className="post-comment-content">Heyaaaa!!</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
PostLists.propTypes={
 posts:PropTypes.array.isRequired, 
};
export default PostLists;
