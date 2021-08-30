import React from 'react';
import { graphql, Link } from 'gatsby';
import { Container, Row, Col } from 'react-bootstrap';

import Layout from '../components/layout';
import Seo from '../components/seo';
import * as homeStyles from '../scss/home.module.scss';

function createBlogItems(blogs) {
  return blogs.map(({ node: { id, title, createdAt } }) => (
    <article key={id} className="blog-item">
      <p className="blog-date">{createdAt}</p>
      <h3 className="blog-title">
        <Link to={`/blog/${id}`}>{title}</Link>
      </h3>
    </article>
  ));
}

function Index(props) {
  const {
    data: {
      site: {
        siteMetadata: { title, description },
      },
      allContentfulBlogPost: { edges },
    },
  } = props;
  const blogItems = createBlogItems(edges);

  return (
    <Layout>
      <Seo title="Home" />

      <Container className={homeStyles.hero}>
        <Row>
          <Col>
            <h1>{title}</h1>
            <h2>{description}</h2>
          </Col>
        </Row>
      </Container>

      <section className="blog-list">
        <Container>
          <Row>
            <Col>
              <h2 className="blog-list__header">Recent Posts</h2>

              <div className="blog-list__items">{blogItems}</div>
            </Col>
          </Row>
        </Container>
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

    allContentfulBlogPost(limit: 3) {
      edges {
        node {
          id
          title
          createdAt(formatString: "dddd, MMMM Do, YYYY HH:mm a")
        }
      }
    }
  }
`;
