import React, { Component } from 'react';

import { Modal as BootstrapModal, Button } from 'react-bootstrap';
import { Check, XCircle, X } from 'react-feather';

import { store } from 'context';

enum DIALOG_STATUS {
  CANCEL = 'CANCEL',
  PAUSE = 'PAUSE',
}

interface IModalProps {
  show: boolean;
  onHide: () => void;
  children: React.ReactNode;
  label: string;
  dialogStatus: DIALOG_STATUS.PAUSE | DIALOG_STATUS.CANCEL;
}

class Modal extends Component<IModalProps> {
  constructor(props: IModalProps) {
    super(props);
  }

  render() {
    return (
      <BootstrapModal show={this.props.show} onHide={this.props.onHide} centered>
        <BootstrapModal.Header>
          <BootstrapModal.Title>{this.props.label}</BootstrapModal.Title>
          <XCircle size={28} className="text-danger opacity-75" onClick={this.props.onHide} />
        </BootstrapModal.Header>
        <BootstrapModal.Body>{this.props.children}</BootstrapModal.Body>
        <BootstrapModal.Footer className="gap-3">
          <Button
            variant={this.props.dialogStatus === DIALOG_STATUS.PAUSE ? 'warning' : 'danger'}
            onClick={this.props.onHide}
          >
            <Check />
          </Button>
          <Button variant="secondary" onClick={this.props.onHide}>
            <X />
          </Button>
        </BootstrapModal.Footer>
      </BootstrapModal>
    );
  }
}

export default Modal;
