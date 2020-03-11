import React from 'react';
import { Card, Button, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { cropText } from '../utils';

const ArticlePreview = ({ title, content, createdAt, cover, slug, category }) =>
  <Card>
    <Card.Img variant="top" src={cover.url} />
    <Card.Header as="h3">
      {title}
    </Card.Header>
    <Card.Body>
      <Card.Text>{cropText(content)}&hellip;</Card.Text>
      <Link to={`/article/${slug}`}>
        <Button variant="primary">Read more&hellip;</Button>
      </Link>
    </Card.Body>
    <Card.Footer>
      <Link to={`/category/${category.slug}`}>
        <Badge variant="secondary">{category.name}</Badge>
      </Link>
      {' '}
      <small className="text-muted">
        Published on {new Date(createdAt).toLocaleString('en-EN')}
      </small>
    </Card.Footer>
  </Card>
;

export default ArticlePreview;
