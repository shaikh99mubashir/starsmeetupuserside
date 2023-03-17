import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {View, Image, Modal, TouchableOpacity} from 'react-native';

const PictureModal = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleImagePress = () => {
    setIsModalVisible(true);
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
  };

  return (
    <View>
      <TouchableOpacity onPress={handleImagePress}>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1678985690958-7501a47dad7f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
          }}
        />
      </TouchableOpacity>
      <Modal visible={isModalVisible} onRequestClose={handleModalClose}>
        <TouchableOpacity onPress={handleModalClose}>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1678985690958-7501a47dad7f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
            }}
            style={{flex: 1}}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

export default PictureModal;

const styles = StyleSheet.create({});
