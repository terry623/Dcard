import styled from "styled-components";

const Container = styled.article`
  box-sizing: border-box;
  height: 175px;
  padding: 24px;
  border-bottom: solid 1px rgba(0, 0, 0, 0.15);
`;

const Title = styled.h3`
  color: black;
  margin: 0;
`;

const Excerpt = styled.p`
  color: rgba(0, 0, 0, 0.75);
`;

export { Container, Title, Excerpt };
