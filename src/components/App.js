import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
import PropTypes from "prop-types";
import { fetchPosts } from "../actions/posts";
import { Home, Navbar, Page404,Login ,Signup} from "./";
import "../index.scss";

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchPosts());
  }

  render() {
    const { posts } = this.props;
    return (
      <Router>
        <div>
          <Navbar />
          <Switch>
            {/* //Switch render the very first component which matches the url it will not check further */}
            <Route
              exact
              path="/"
              render={(props) => {
                return <Home {...props} posts={posts} />;
              }}
            />
            {/* {/* //if path is this show home component.. * and exact means /signup only signup will show not home/ */}
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route component={Page404} />
          </Switch>
        </div>
      </Router>
    );
  }
}
function mapStateToProps(state) {
  return {
    posts: state.posts,
  };
}

App.propTypes = {
  posts: PropTypes.array.isRequired,
};
export default connect(mapStateToProps)(App);
