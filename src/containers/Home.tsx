import { Component } from 'react';
import { Col, Row } from 'react-bootstrap';

import { Subscription } from 'components';
import { store } from 'context';
export class Home extends Component {
  render() {
    return (
      <Row className="mt-5">
        <Col lg="12" className="d-none d-lg-block mb-3">
          <h1>Edit Subscription</h1>
        </Col>
        <Col
          className="mb-4 mb-sm-0 mb-md-4"
          xs="12"
          md={{ span: 12, order: 0 }}
          lg={{ span: 4, order: 1 }}
          xl="auto"
        >
          <Subscription.Sidebar />
        </Col>
        <Col md={{ span: 12, order: 1 }} lg="8" xl="8">
          <Subscription.DatePicker
            value={store.getState().date}
            onSaveButtonClick={(day) => store.dispatch({ type: 'SET_DATE', payload: day })}
          />
        </Col>
      </Row>
    );
  }
}

export default Home;
