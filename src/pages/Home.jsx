import React from 'react';
import { Image, Jumbotron } from 'react-bootstrap';
import ArticleList from '../components/ArticleList';
import DataContainer from '../containers/DataContainer';
import { Layout } from '../components';

const query = `
query MyQuery {
  homepage {
    title
    introduction(markdown: true)
    banner {
      url
    }
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

const Home = ({ homepage, allArticles }) =>
  <Layout>
    <Jumbotron>
      <h1>{homepage.title}</h1>
      <Image src={homepage.banner.url} fluid rounded className="mt-4 mb-4" />
      <div dangerouslySetInnerHTML={ {__html: homepage.introduction} } />
    </Jumbotron>
    <h2>Latest articles</h2>
    <ArticleList articles={allArticles} />
  </Layout>
;

export default () =>
  <DataContainer
    query={query}
    component={Home}
  />
;
