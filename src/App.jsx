import React, { Component } from "react";
import Employees from "./Views/EmployeeViews/Employees";
import { connect } from "react-redux";
import "./App.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { background: '' };
  }

  render() {
    return (
      <div className="container" style={{ backgroundColor: this.props.background }}>
        <Employees />
      </div>
    );
  }
}

const mapStateToProps = state => ({ background: state.uiStyles.background });

export default connect(mapStateToProps)(App);
