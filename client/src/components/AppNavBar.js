import React, { Component } from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container,
    DropdownItem,
    DropdownToggle,
    Dropdown,
    DropdownMenu,
} from "reactstrap";

class AppNavBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
            dropdownOpen: false,
        };
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen,
        });
    };

    toggleDropdown = () => {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen,
        });
    };

    render() {
        return (
            <div>
                <Navbar color="dark" dark expand="sm" className="mb-5">
                    <Container>
                        <NavbarBrand href="/">Company Portal</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>Signed in as: TEST</NavItem>
                                <NavItem>
                                    <NavLink href="/employeelist">Employee's/Departments</NavLink>
                                </NavItem>
                                <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggleDropdown}>
                                    <DropdownToggle caret>Hiring</DropdownToggle>
                                    <DropdownMenu right>
                                        <DropdownItem href="/interviews">Interviews Calender</DropdownItem>
                                        <DropdownItem href="/candidate/feedback">Candidate Feedback</DropdownItem>
                                        <DropdownItem href="/candidates">Candidates</DropdownItem>
                                        <DropdownItem href="/cvs">CV's</DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                                <NavItem>
                                    <NavLink href="/personaldevelopment">Personal Development</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/holidays">Holidays</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/benefits">Benefits</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/resources">Staff Resources</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/libraries">Libraries</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/discussions">Discussions</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }
}

export default AppNavBar;
