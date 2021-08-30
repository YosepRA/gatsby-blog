import React from 'react';
import { Container } from 'react-bootstrap';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';
import Seo from '../components/seo';

function createBlogItems(blogs) {
  return blogs.map(({ node: { id, title, createdAt } }) => (
    <article key={id} className="blog-item">
      <p className="blog-date">{createdAt}</p>
      <h2 className="blog-title">
        <Link to={`/blog/${id}`}>{title}</Link>
      </h2>
    </article>
  ));
}

function Blog(props) {
  const {
    data: {
      allContentfulBlogPost: { edges },
    },
  } = props;

  const blogItems = createBlogItems(edges);

  return (
    <Layout>
      <Seo title="Blog" />

      <Container>
        <h1 className="blog-header">Journal Entries</h1>

        <section className="blog-items">{blogItems}</section>
      </Container>
    </Layout>
  );
}

export const query = graphql`
  query {
    allContentfulBlogPost {
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

export default Blog;
