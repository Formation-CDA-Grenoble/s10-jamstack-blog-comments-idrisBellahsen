import React, { Component } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

class SearchForm extends Component {
  state = {
    argument: '',
  }

  handleChange = (event) => {
    const argument = event.target.value;
    this.setState({ argument });
  }

  handleSubmit = (event) => {
    const { history } = this.props;
    const { argument } = this.state;
    event.preventDefault();
    history.push(`/search/${argument}`);
  }

  render = () => {
    const { argument } = this.state;

    return (
      <Form inline onSubmit={this.handleSubmit}>
        <FormControl
          type="text"
          placeholder="Search"
          className="mr-sm-2"
          value={argument}
          onChange={this.handleChange}
        />
        <Button variant="outline-success" type="submit" disabled={argument === ''}>
          Search
        </Button>
      </Form>
    );
  }
}

export default withRouter(SearchForm);
