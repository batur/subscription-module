import { Component } from 'react';
import { Col, Row } from 'react-bootstrap';

import { Subscription } from 'components';
export class Home extends Component {
  render() {
    return (
      <Row>
        <Col lg="12" className="d-none d-lg-block mb-3">
          <h1>Edit Subscription</h1>
        </Col>
        <Col lg="auto" className="d-none d-lg-block">
          <Subscription.Sidebar />
        </Col>
        <Col lg="8">
          <Subscription.DatePicker />
        </Col>
      </Row>
    );
  }
}

export default Home;
