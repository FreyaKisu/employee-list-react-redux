import React, { Component } from "react";
import { fetchEmployees } from "../../actions/employees";
import EmployeeListItem from "./EmployeeListItem";
import { connect } from "react-redux";
import { updateBackgound } from "../../actions/uiStyles";

class EmployeeList extends Component {
  constructor(props) {
    super(props);
    this.state = { employeeList: [], randomColor: null };
  }

  componentDidMount() {
    
    this.props.employeesFetch();
   
  }

  getRandomColor = () => {
    return (
      "rgb(" +
      Math.floor(Math.random() * 256) +
      "," +
      Math.floor(Math.random() * 256) +
      "," +
      Math.floor(Math.random() * 256) +
      ")"
    );
  };

  generateRandomColor = () => {
 
    this.props.backgroundUpdate(this.getRandomColor())
   
  };

  render() {
    return (
      <div className="employee-list" style={{ backgroundColor: this.state.randomColor }}>
        <h2>Employees</h2>
        <button onClick={this.generateRandomColor}>Change color</button>
        <ul className="wrapper">
          {Object.values(this.props.employees.employeeList).map((item, index) => (
            <EmployeeListItem key={item.id} item={item} index={index} />
          ))}
        </ul>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  employeesFetch: () => {
    dispatch(fetchEmployees());
  },
  backgroundUpdate: color => {
    dispatch(updateBackgound(color));
  }
});

const mapStateToProps = state => ({
  employees: state.employees,
  uiStyles: state.uiStyles
});

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeList);
