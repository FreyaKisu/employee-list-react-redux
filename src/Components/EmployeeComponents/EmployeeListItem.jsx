import React, { Component } from "react";

export default class EmployeeListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employeeObject: [
        {
          name: "",
          department: "",
          salary: 0,
          id: 0
        }
      ]
    };
  }
  componentDidMount = () => {
    this.setState({
      employeeObject: {
        name: this.props.employee.name,
        department: this.props.employee.department,
        salary: this.props.employee.salary,
        id: this.props.employee._id
      }
    });
  };

  handleChange = event => {
    this.setState({
      employeeObject: {
        ...this.state.employeeObject,
        [event.target.id]: event.target.value
      }
    });
  };

  handleRaise = event => {
    this.setState({
      employeeObject: {
        ...this.state.employeeObject,
        [this.state.employeeObject.salary]: +100
      }
    });
  };

  render() {
    return (
      <li key={this.props.index}>
        {`Name: ${this.props.item.name} Department: ${this.props.item.department} Salary: ${this.props.item.salary} Id:${this.props.item.id}`}

        <select
          id={this.state.employeeObject.department}
          onChange={this.props.handleChange}
        >
          <option value="development">Development</option>
          <option value="marketing">Marketing</option>
          <option value="sales">Sales</option>
        </select>

        <button type="button" onClick={this.handleRaise}>
          Increase salary
        </button>
      </li>
    );
  }
}
