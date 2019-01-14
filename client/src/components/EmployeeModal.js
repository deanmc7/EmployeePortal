import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from "reactstrap";
import { connect } from "react-redux";
import { newEmployee } from "../actions/employeeActions";

class EmployeeModal extends Component {
    state = {
        modal: false,
        firstName: "",
        lastName: "",
        email: "",
    };

    toggle = () => {
        this.setState({
            modal: !this.state.modal,
        });
    };

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault();

        if (this.state.firstName && this.state.lastName) {
            const email = this.state.firstName + "." + this.state.lastName + "@company.com";

            const newEmployee = {
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                email: email,
            };

            this.props.newEmployee(newEmployee);

            this.toggle();

            this.setState({
                firstName: "",
                lastName: "",
                email: "",
            });
        }
    };

    render() {
        return (
            <div>
                <Button color="dark" style={{ marginBottom: "2rem" }} onClick={this.toggle}>
                    Add Employee
                </Button>

                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Add New Employee</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="employee">Employee Details</Label>
                                <Input
                                    type="text"
                                    name="firstName"
                                    id="first"
                                    placeholder="Add First Name"
                                    onChange={this.onChange}
                                />
                                <Input
                                    type="text"
                                    name="lastName"
                                    id="last"
                                    placeholder="Add Last Name"
                                    onChange={this.onChange}
                                    style={{ marginTop: "0.5rem" }}
                                />
                                <Button color="dark" style={{ marginTop: "2rem" }} block>
                                    Add Employee
                                </Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    employee: state.employee,
});

export default connect(
    mapStateToProps,
    { newEmployee }
)(EmployeeModal);
