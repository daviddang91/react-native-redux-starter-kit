import React, { Component } from "react";

import { Container, Header, Title,
  Content, Button, Icon, Text, Left,
  Body, Right, View } from "native-base";

import styles from "./styles";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { show } from 'redux-modal';
import ListModal from './listModal';

class ModalBox extends Component {

  handleOpen = name => () => {
    this.props.show(name, { message: `This is a ${name} modal` })
  };

  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}
            >
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Modal Box</Title>
          </Body>
          <Right />
        </Header>

        <View padder>
          <ListModal />
          <Button block style={styles.btnShowModal} onPress={this.handleOpen('basicModal')}>
            <Text>Basic Modal</Text>
          </Button>
          <Button block style={styles.btnShowModal} onPress={this.handleOpen('topModal')}>
            <Text>Position Top</Text>
          </Button>
          <Button block style={styles.btnShowModal} onPress={this.handleOpen('centerModal')}>
            <Text>Position Center</Text>
          </Button>
          <Button block style={styles.btnShowModal} onPress={this.handleOpen('bottomModal')}>
            <Text>Position Bottom</Text>
          </Button>
          <Button block style={styles.btnShowModal} onPress={this.handleOpen('scrollModal')}>
            <Text>Scroll Modal</Text>
          </Button>
        </View>
      </Container>
    );
  }
}

export default connect(null, dispatch => bindActionCreators({ show }, dispatch))(ModalBox)
