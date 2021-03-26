import React from "react";
import PropTypes from "prop-types";

import { Container } from "./style";

const PostsContainer = ({ children }) => {
  return <Container>{children}</Container>;
};

PostsContainer.propTypes = {
  children: PropTypes.node.isRequired
};

export default PostsContainer;
