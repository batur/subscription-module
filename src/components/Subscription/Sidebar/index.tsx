import React, { Component } from 'react';
import { Card, Button, Container } from 'react-bootstrap';

import { Gift, PauseCircle, XCircle } from 'react-feather';

import { Modal } from 'components';

enum DIALOG_STATUS {
  CANCEL = 'CANCEL',
  PAUSE = 'PAUSE',
}

interface IState {
  isPauseModalOpen: boolean;
  isCancelModalOpen: boolean;
}
export default class Sidebar extends Component<{}, IState> {
  constructor(props: any) {
    super(props);
    this.handleCancelModal = this.handleCancelModal.bind(this);
    this.handlePauseModal = this.handlePauseModal.bind(this);
    this.state = {
      isPauseModalOpen: false,
      isCancelModalOpen: false,
    };
  }

  handlePauseModal = () => {
    this.setState({ isPauseModalOpen: !this.state.isPauseModalOpen });
  };

  handleCancelModal = () => {
    this.setState({ isCancelModalOpen: !this.state.isCancelModalOpen });
  };

  render() {
    return (
      <>
        <Card className="shadow rounded-4">
          <Card.Body className="ms-1 d-grid gap-3">
            <Button
              variant="outline-light"
              className="border-0 text-success bg-transparent d-flex align-items-center"
            >
              <Gift size={26} />
              <span className="ms-2 h5 mb-0 fw-lighter">Edit Subscription</span>
            </Button>
            <Button
              variant="outline-light"
              className="border-0 opacity-75 text-sun bg-transparent d-flex align-items-center"
              onClick={this.handlePauseModal}
            >
              <PauseCircle size={26} />
              <span className="ms-2 h5 mb-0">Pause Subscription</span>
            </Button>
            <Button
              variant="outline-light"
              className="border-0 opacity-75 text-sun bg-transparent d-flex align-items-center"
              onClick={this.handleCancelModal}
            >
              <XCircle size={26} />
              <span className="ms-2 h5 mb-0">Cancel Subscription</span>
            </Button>
          </Card.Body>
        </Card>
        <Modal
          show={this.state.isPauseModalOpen}
          onHide={this.handlePauseModal}
          label={'Pause subscription'}
          dialogStatus={DIALOG_STATUS.PAUSE}
        >
          <Container>
            <h2 className="h4"> Are sure pause your subscription?</h2>
          </Container>
        </Modal>
        <Modal
          show={this.state.isCancelModalOpen}
          onHide={this.handleCancelModal}
          label={'Cancel subscription'}
          dialogStatus={DIALOG_STATUS.CANCEL}
        >
          <Container>
            <h2 className="h4"> Are sure cancel your subscription?</h2>
          </Container>
        </Modal>
      </>
    );
  }
}
