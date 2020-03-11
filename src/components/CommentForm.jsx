import React, { Component } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

class CommentForm extends Component {
  state = {
    argument: '',
  }

  handleChange = (event) => {
    const argument = event.target.value;
    this.setState({ argument });
  }

  handleSubmit = (event) => {
    // const { slug } = this.props;
    // const { history } = this.props;
    const { argument } = this.state;
    event.preventDefault();
    // history.push(`/article/${slug}`);
    this.props.submitcom(argument)
  }

  render = () => {
    const { argument } = this.state;


    return (
       
      <Form inline onSubmit={this.handleSubmit}>
        <FormControl
          type="text"
          placeholder="Commentaire"
          className="mr-sm-2"
          value={argument}
          onChange={this.handleChange}
        />
     
        <Button variant="outline-success" type="submit" disabled={argument === ''}>
          Comment
        </Button>
      </Form>
    );
  }
}

export default withRouter(CommentForm);
