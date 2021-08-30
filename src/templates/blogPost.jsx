import React from 'react';
import { graphql } from 'gatsby';
import { Container } from 'react-bootstrap';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import Layout from '../components/layout';
import Seo from '../components/seo';

function BlogPost(props) {
  const {
    data: {
      contentfulBlogPost: {
        title,
        createdAt,
        body: { raw },
      },
    },
  } = props;

  const jsonBody = JSON.parse(raw);
  const bodyComponent = documentToReactComponents(jsonBody);

  return (
    <Layout>
      <Seo title={title} />

      <Container>
        <h1>{title}</h1>
        <p>{createdAt}</p>
        <div className="body">{bodyComponent}</div>
      </Container>
    </Layout>
  );
}

export const query = graphql`
  query blogPost($id: String!) {
    contentfulBlogPost(id: { eq: $id }) {
      title
      createdAt(formatString: "dddd, MMMM D, YYYY")
      body {
        raw
      }
    }
  }
`;

export default BlogPost;
