import React from 'react';
import { ArticleList, Layout } from '../components';
import DataContainer from '../containers/DataContainer';
import { withRouter, Link } from 'react-router-dom';
import { Jumbotron, Button } from 'react-bootstrap';

const makeQuery = (slug) => `
query MyQuery {
  category(filter: {slug: {eq: ${slug}}}) {
    name
    description(markdown: true)
  }
  allArticles {
    id
    title
    content
    createdAt
    slug
    cover {
      url
    }
    category {
      id
      slug
      name
    }
  }
}
`;

const Category = ({ category, allArticles, match }) => {
  const { slug } = match.params;
  const filteredArticles = allArticles.filter(
    article => article.category.slug === slug
  );

  return (
    <Layout>
      <Jumbotron>
        <h1>Category: {category.name}</h1>
        <div dangerouslySetInnerHTML={{ __html: category.description }} />
        <Link to="/category">
          <Button variant="secondary">All Categories</Button>
        </Link>
      </Jumbotron>
      <h2>Articles listed under {category.name}</h2>
      <ArticleList articles={filteredArticles} />
    </Layout>
  );
}

export default ({ match }) => {
  const { slug } = match.params;
  return (
    <DataContainer
      query={makeQuery(slug)}
      component={withRouter(Category)}
    />
  );
}
