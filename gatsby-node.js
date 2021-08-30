const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve('./src/templates/blogPost.jsx');

  const {
    data: {
      allContentfulBlogPost: { edges },
    },
  } = await graphql(`
    query {
      allContentfulBlogPost {
        edges {
          node {
            id
          }
        }
      }
    }
  `);

  edges.forEach(({ node: { id } }) => {
    createPage({
      path: `/blog/${id}`,
      component: blogPostTemplate,
      context: {
        id,
      },
    });
  });
};
