import React, { Component } from "react";

export default class EmployeeListItem extends Component {
  constructor(props) {
    super(props);
  }
  

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
          id={this.props.item.department}
        >
          <option value="development">Development</option>
          <option value="marketing">Marketing</option>
          <option value="sales">Sales</option>
        </select>

        <button type="button" onClick={this.handleRaise}>
          Increase salary
      </button>
      </li>
    )
  }

}
