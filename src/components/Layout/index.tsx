import React from 'react';
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router';

import Header from './Header';

export class Layout extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Container className="main mt-3" as="main">
          <Outlet />
        </Container>
      </>
    );
  }
}

export default Layout;
