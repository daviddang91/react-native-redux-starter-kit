const React = require("react-native");

const { StyleSheet } = React;

export default {
  container: {
    flex: 1,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentModal: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DCDCDC',
  },
  modalBasic: {
    flex: 1,
  },
  modalTop: {
    height: 230,
  },
  modalCenter: {
    height: 300,
    width: 300,
  },
  modalBottom: {
    height: 300,
  },
  text: {
    color: 'black',
    fontSize: 22,
    alignSelf: 'center',
  },
  btnClose: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
  btnShowModal: {
    marginTop: 10
  },
  txtMessage: {
    color: '#000',
  },
};
