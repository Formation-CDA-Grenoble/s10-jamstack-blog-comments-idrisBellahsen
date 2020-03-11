import React from 'react';
import { Container } from 'react-bootstrap';
import { Header, Footer } from '.';

const Layout = ({ children }) =>
  <Container>
    <Header />
    <main>
      {children}
    </main>
    <Footer /> 
  </Container>
;

export default Layout;
