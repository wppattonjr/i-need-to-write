import React, { Component } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import { Link, withRouter } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

class MyNavbar extends Component {
  state = {
    isOpen: false,
  }

  logMeOut = (e) => {
    e.preventDefault();
    this.props.history.push('/');
    firebase.auth().signOut();
  };

  toggle = () => this.setState({
    isOpen: !this.state.isOpen,
  })

  render() {
    const { user } = this.props;
    const { isOpen } = this.state;

    return (
      <div>
        <Navbar className='color-nav' dark expand='md'>
          <Link className='navbar-brand' to='/journals'>
            Journals
          </Link>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className='mr-auto' navbar>
              <NavItem>
                <Link className='nav-link' to='/journal-entries'>
                </Link>
              </NavItem>
            </Nav>
            {
              user
              && <>
                <img
                  className='userInfo rounded-circle'
                  src={user?.photoURL}
                  alt={user?.displayName}
                />
                <UncontrolledDropdown>
                  <DropdownToggle nav caret></DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>{user?.displayName}</DropdownItem>
                    <DropdownItem>
                      <div
                        className='nav-link btn btn-danger'
                        onClick={(e) => this.logMeOut(e)}
                      >
                        Logout
                      </div>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </>
            }
            </Collapse>
          </Navbar>
        </div>
    );
  }
}

export default withRouter(MyNavbar);
