import React, { Component } from "react";
import Result from "../../components/Result";
import { connect } from "react-redux";

class ResultContainer extends Component {
  render() {
    return (
      <Result
        data={this.props.data}
        error={this.props.error}
        navigation={this.props.navigation}/>
    );
  }
}

const mapStateToProps = state => ({
  data: state.scanner.data,
  error: state.scanner.error,
});

export default connect(
  mapStateToProps,
  null
)(ResultContainer);
