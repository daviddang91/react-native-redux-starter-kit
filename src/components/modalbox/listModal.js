import React, {Component} from 'react';
import { View } from 'native-base';
import styles from './styles';

import BasicModal from './basicModal';
import TopModal from './topModal';
import CenterModal from './centerModal';
import BottomModal from './bottomModal';
import ScrollModal from './scrollModal';


class ListModal extends Component {

  render() {
    return (
      <View style={styles.container}>
        <BasicModal />
        <TopModal />
        <CenterModal />
        <BottomModal />
        <ScrollModal />
      </View>
    );
  }
}

export default ListModal;
