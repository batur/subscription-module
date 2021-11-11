import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Gift, PauseCircle, XCircle } from 'react-feather';
import { Link } from 'react-router-dom';

export default class Sidebar extends Component {
  render() {
    return (
      <Card className="shadow pe-5">
        <Card.Body className="ms-1">
          <Link to="#" className="text-dark text-decoration-none p-2 mb-2">
            <div className="d-flex align-items-center">
              <Gift size={28} />
              <span className="mb-0 ms-3 h5">Edit Delivery</span>
            </div>
          </Link>
          <Link to="#" className="text-dark text-decoration-none p-2 mb-2">
            <div className="d-flex align-items-center">
              <PauseCircle size={28} />
              <span className="mb-0 ms-3 h5">Pause Subscription</span>
            </div>
          </Link>
          <Link to="#" className="text-dark text-decoration-none p-2 mb-2">
            <div className="d-flex align-items-center">
              <XCircle size={28} />
              <span className="mb-0 ms-3 h5">Cancel Subscription</span>
            </div>
          </Link>
        </Card.Body>
      </Card>
    );
  }
}
