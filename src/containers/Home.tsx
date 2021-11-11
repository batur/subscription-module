import { Component } from 'react';
import { Col, Row } from 'react-bootstrap';

import { Subscription } from 'components';
export class Home extends Component {
  render() {
    return (
      <Row>
        <Col lg="12" className="mb-3">
          <h1>Edit Subscription</h1>
        </Col>
        <Col lg="3">
          <Subscription.Sidebar />
        </Col>
        <Col lg={{ span: 8, offset: 1 }}>
          <Subscription.DatePicker />
        </Col>
      </Row>
    );
  }
}

export default Home;
