import React, { Component } from "react";
import { connect } from "react-redux";
import { updateEmployeeDepartment, updateEmployeeSalary } from "../../actions/employees";

 class EmployeeListItem extends Component {
   

  handleChange = event => {
    this.props.updateEmployeeDepartment(this.props.index, event.target.value)
  };

  handleRaise = () => {
    this.props.updateEmployeeSalary(this.props.index)
  };

  render() {
    return (
      <li className="employees" key={this.props.index}>
        {`Name: ${this.props.item.name} Department: ${this.props.item.department} Salary: ${this.props.item.salary} Id:${this.props.item.id}`}

        <select
          id={this.props.item.department}
          onChange={this.handleChange}
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

const mapDispatchToProps = dispatch => ({
  updateEmployeeDepartment: (index, department) => {
    dispatch(updateEmployeeDepartment(index, department));
  },
  updateEmployeeSalary: (index) => {
    dispatch(updateEmployeeSalary(index))
  }})
const mapStateToProps = state => ({
  employees: state.employees,
});

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeListItem);

