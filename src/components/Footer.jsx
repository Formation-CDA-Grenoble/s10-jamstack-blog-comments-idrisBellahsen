import React from 'react';

const Styles = {
  footer: {
    minHeight: '10em',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
};

const Footer = () =>
  <footer style={Styles.footer}>
    <small>
    Copyright &copy;{' '}
    <a href="https://github.com/Formation-CDA-Grenoble">CDA Grenoble</a>
    {' '}2020
    </small>
  </footer>
;

export default Footer;
