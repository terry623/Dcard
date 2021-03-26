import React from "react";
import PropTypes from "prop-types";

const Post = ({ title, excerpt }) => (
  <div>
    <div>{title}</div>
    <div>{excerpt}</div>
  </div>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired
};

export default Post;
