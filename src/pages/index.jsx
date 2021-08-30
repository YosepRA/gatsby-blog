import React from 'react';
import { graphql } from 'gatsby';
import { Container, Row, Col } from 'react-bootstrap';

import Layout from '../components/layout';
import * as homeStyles from '../scss/home.module.scss';
import generateBlogs from '../utils/fakeBlog';

function Index(props) {
  const {
    data: {
      site: {
        siteMetadata: { title, description },
      },
    },
  } = props;

  return (
    <Layout>
      <Container className={homeStyles.hero}>
        <h1>{title}</h1>
        <h2>{description}</h2>
      </Container>

      <section className="blog-list">
        {/* Blog #1 */}
        {/* Blog #2 */}
        {/* Blog #3 */}
      </section>
    </Layout>
  );
}

export default Index;

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;
