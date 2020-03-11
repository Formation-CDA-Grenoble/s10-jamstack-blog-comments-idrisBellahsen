import React from 'react'
import DataContainer from '../containers/DataContainer';
import { withRouter } from 'react-router-dom';
import { ArticleList, Layout } from '../components';
import { Jumbotron } from 'react-bootstrap';

const query = `
query MyQuery {
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

const Search = ({ match, allArticles }) => {
  const { argument } = match.params;
  const filteredArticles = allArticles.filter(
    article =>
      article.content.toLowerCase().includes(argument) ||
      article.title.toLowerCase().includes(argument)
  );

  return (
    <Layout>
      <Jumbotron>
        <h1>Search</h1>
        <div>Found {filteredArticles.length} articles matching search term "{argument}"</div>
      </Jumbotron>
      <ArticleList articles={filteredArticles} />
    </Layout>
  );
}

export default () =>
  <DataContainer
    query={query}
    component={withRouter(Search)}
  />
;
