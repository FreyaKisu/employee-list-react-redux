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
    //this.setState({ employees: fetchTestEmployees() });
    this.props.employeesFetch();
   // this.props.backgroundUpdate('#000')
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
  //  this.setState({ randomColor: this.getRandomColor() });
    this.props.backgroundUpdate(this.getRandomColor())
   // this.backgroundUpdate(this.state.randomColor);
  };

  render() {
    return (
      <div style={{ backgroundColor: this.state.randomColor }}>
        <h2>Employees</h2>
        <button onClick={this.generateRandomColor}>Change color</button>
        <ol>
          {Object.values(this.props.employees.employeeList).map((item, index) => (
            <EmployeeListItem key={item.id} item={item} index={index} />
          ))}
        </ol>
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
