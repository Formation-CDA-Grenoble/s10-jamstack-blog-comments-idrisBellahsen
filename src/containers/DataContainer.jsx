import React, { Component } from 'react';
import Axios from 'axios';
import { Spinner, Container } from 'react-bootstrap';

export default class DataContainer extends Component {
  state = {
    data: null,
  }

  componentDidMount = () => {
    const { query } = this.props;
    
    Axios.post(
      // GraphQL endpoint
      'https://graphql.datocms.com/',
      // Requête GraphQL
      { query },
      // Options pour authentifier notre requête
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_DATOCMS_API_KEY}`,
        } 
      },
    )
    .then(response => {
      if (response.data.hasOwnProperty('errors')) {
        for (let error of response.data.errors) {
          console.error('Error while querying GraphQL API:', error.message);
        }
      } else {
        const { data } = response.data;
        this.setState({ data });
      }
    })
    .catch(error => console.error(error));
  }

  render = () => {
    const { data } = this.state;
    const ComponentName = this.props.component;

    if (data === null) {
      return (
        <Container className="d-flex justify-content-center">
          <Spinner animation="grow" variant="secondary" />
        </Container>
      );
    }

    return (
      <ComponentName {...data} />
    );
  }
}
