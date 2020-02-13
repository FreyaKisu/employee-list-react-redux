import EmployeeList from "../../Components/EmployeeComponents/EmployeeList";
import React, { Component } from "react";

export default class Employees extends Component {
  render() {
    return (
      <div className="employees">
        <EmployeeList />
      </div>
    );
  }
}
