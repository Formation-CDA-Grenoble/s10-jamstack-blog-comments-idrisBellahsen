import React from 'react';
import ArticlePreview from './ArticlePreview';

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

const ArticleList = ({ articles }) =>
  <ul style={Styles.ul}>
    {articles.map( (article, index) =>
      <li key={index} style={Styles.li}>
        <ArticlePreview {...article} />
      </li>
    )}
  </ul>
;

export default ArticleList;
