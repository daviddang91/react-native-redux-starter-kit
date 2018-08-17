import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { show } from "redux-modal";
import Modal from "../../components/Modal";

class ModalContainer extends Component {

  handleOpen(modal) {
    this.props.show(modal, { message: `This is a ${modal} modal` });
  }

  render() {
    return (
      <Modal
        handleOpen={(modal) => this.handleOpen(modal)}
        navigation={this.props.navigation}/>
    );
  }
}

export default connect(
  null,
  dispatch => bindActionCreators({ show }, dispatch))
(ModalContainer);
