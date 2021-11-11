import { Component } from 'react';
import { Link } from 'react-router-dom';

import { Container, Navbar, Offcanvas, Button } from 'react-bootstrap';
import { ChevronLeft, Menu, ShoppingCart, X } from 'react-feather';

class MobileMenu extends Component {
  state: { isOpen: boolean } = {
    isOpen: false,
  };

  toggleDrawer = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  closeDrawer = () => {
    this.setState({
      isOpen: false,
    });
  };

  render() {
    return (
      <div className="d-flex justify-content-between align-items-center w-100">
        <Button variant="outline-light" className="text-dark bg-transparent">
          <ChevronLeft size={28} />
        </Button>
        <h1 className="mb-0 h3">Create Delivery Date</h1>
        <Button
          variant="outline-light"
          className="text-dark bg-transparent"
          onClick={this.toggleDrawer}
        >
          <Menu size={28} />
        </Button>
        <Offcanvas className="" placement="end" show={this.state.isOpen}>
          <Offcanvas.Header className="d-flex justify-content-end">
            <Button onClick={this.closeDrawer} variant="link text-dark bg-transparent">
              <X size={28} />
            </Button>
          </Offcanvas.Header>
          <Offcanvas.Body className="d-flex justify-content-center align-items-center text-center">
            <div>
              <Link to="/" className="text-success text-decoration-none" onClick={this.closeDrawer}>
                <h3 className="mb-3 ">Home</h3>
              </Link>
              <Link
                to="/about-1"
                className="text-brown text-decoration-none"
                onClick={this.closeDrawer}
              >
                <h3 className="mb-3">How does it work</h3>
              </Link>
              <Link
                to="/about-2"
                className="text-brown text-decoration-none"
                onClick={this.closeDrawer}
              >
                <h3 className="mb-3">Why Beijeped?</h3>
              </Link>
              <Link
                to="cart"
                className="text-brown text-decoration-none"
                onClick={this.closeDrawer}
              >
                <h3 className="mb-3">Cart</h3>
              </Link>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    );
  }
}

class DesktopMenu extends Component {
  render() {
    return (
      <div className="d-flex justify-content-between w-100">
        <div className="flex-grow-1">
          <Link to="/">
            <img src="logo.png" width={100} height={56} alt="Beije" />
          </Link>
        </div>
        <div className="d-flex align-items-center">
          <Link to="/">
            <Button variant="light" className="bg-transparent me-2">
              <span className="text-success">Subscriptions</span>
            </Button>
          </Link>
          <Link to="/edit">
            <Button variant="outline-light" className="bg-transparent text-dark me-2">
              <span>Edit Account</span>
            </Button>
          </Link>
          <Link to="/help">
            <Button variant="outline-light" className="bg-transparent text-dark me-2">
              <span>Help</span>
            </Button>
          </Link>
          <Link to="/cart">
            <Button variant="outline-light" className="bg-transparent text-dark me-2">
              <ShoppingCart size={16} />
            </Button>
          </Link>
          <Link to="/new">
            <Button variant="outline-secondary" className="rounded-pill ">
              <span>Add subscription</span>
            </Button>
          </Link>
        </div>
      </div>
    );
  }
}

class Header extends Component {
  render() {
    return (
      <Navbar expand="lg" className="shadow">
        <Container fluid>{window.innerWidth < 992 ? <MobileMenu /> : <DesktopMenu />}</Container>
      </Navbar>
    );
  }
}

export default Header;
