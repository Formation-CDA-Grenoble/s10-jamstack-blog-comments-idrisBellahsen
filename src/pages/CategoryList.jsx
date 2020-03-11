import React from 'react';
import { Layout } from '../components';
import { Link } from 'react-router-dom';
import DataContainer from '../containers/DataContainer';
import { Jumbotron } from 'react-bootstrap';

const Styles = {
  ul: {
    paddingInlineStart: 0,
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '1em',
  },
  li: {
    listStyleType: 'none',
  },
};

const query = `
query MyQuery {
  allCategories {
    slug
    name
  }
  allArticles {
    category {
      slug
    }
  }
}
`;

const CategoryList = ({ allCategories, allArticles }) => {
  const articleCategories = allArticles.map( article => article.category.slug );

  return (
    <Layout>
      <Jumbotron>
        <h1>Categories</h1>
        <p>Here are all the categories you can find on our blog!</p>
      </Jumbotron>
      <ul style={Styles.ul}>
      {allCategories.map( (category, index) =>
        <li key={index} style={Styles.li}>
          <Link to={`/category/${category.slug}`}>
            {category.name} ({
              articleCategories.reduce( (total, slug) =>
                total + (slug === category.slug ? 1 : 0),
                0
              )
            })
          </Link>
        </li>
      )}
      </ul>
    </Layout>
  );
}

export default () =>
  <DataContainer
    query={query}
    component={CategoryList}
  />
;
