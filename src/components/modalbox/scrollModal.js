import React, {Component} from 'react';
import Modal from 'react-native-modalbox';
import { ScrollView, Dimensions } from 'react-native';
import { View, Text, Button, Icon } from 'native-base';
import { connectModal } from 'redux-modal';
import styles from './styles';

const screen = Dimensions.get('window');


class ScrollModal extends Component {
  constructor() {
    super();
    this.state = {

    };
  }

  renderList = () => {
    let list = [];
    for (let i=0;i<50;i++) {
      list.push(<Text style={styles.text} key={i}>Elem {i}</Text>);
    }
    return list;
  }

  render() {
    const { show, handleHide, message } = this.props
    return (
      <View style={styles.container}>
        <Modal
          style={[styles.modal, styles.modalBottom]}
          coverScreen={true}
          swipeArea={20}
          position={'bottom'}
          isOpen={show}
          onClosed={handleHide}
        >
          <View style={[styles.contentModal, styles.modalBasic]}>
            <Button transparent style={styles.btnClose} onPress={handleHide} >
              <Icon name="close" style={styles.txtMessage} />
            </Button>
            <ScrollView style={{marginTop: 40}}>
              <View style={{width: screen.width}}>
                {this.renderList()}
              </View>
            </ScrollView>
          </View>
        </Modal>
      </View>
    );
  }
}

export default connectModal({ name: 'scrollModal', destroyOnHide: true })(ScrollModal)
