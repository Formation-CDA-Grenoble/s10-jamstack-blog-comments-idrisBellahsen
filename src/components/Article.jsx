import React, { Component } from 'react';
import { Jumbotron, Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CommentForm,CommentList } from '.';

export default class Article extends Component {
  state = {
    commentaire: [],
  }

  render = () => {
    const article = (this.props.article)
    return (
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
    <CommentList commentaires={this.state.commentaire}/>
    <CommentForm submitcom={this.submitComment}/>

  </article>
     
    );
  }

  submitComment=  (newComment) => {
    let commentairee = []
    commentairee = this.state.commentaire;
    commentairee.push(newComment)
    this.setState({ commentaire : commentairee });
    console.log(this.state.commentaire)


  }
    
}
