import React from 'react';
import { Jumbotron, Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Article = ({ article }) =>
  <article>
    <Jumbotron>
      <h1>{article.title}</h1>
      <small>Published on {new Date(article.createdAt).toLocaleString('en-EN')}</small>
      <Image fluid src={article.cover.url} />
    </Jumbotron>
    <div dangerouslySetInnerHTML={{ __html: article.content }} />
    <Link to="/">
      <Button variant="secondary">Back to Home</Button>
    </Link>
  </article>
;

export default Article;
