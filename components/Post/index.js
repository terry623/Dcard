import React from "react";
import PropTypes from "prop-types";

import { Container, Title, Excerpt } from "./style";

const Post = ({ title, excerpt }) => (
  <Container>
    <Title>{title}</Title>
    <Excerpt>{excerpt}</Excerpt>
  </Container>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired
};

export default Post;
