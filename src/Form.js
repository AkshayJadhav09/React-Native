import React, { Component } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Button,
  View,
  SafeAreaView,
  TextInput,
} from "react-native";

const UselessTextInput = () => {
  const [email, onChangeEmail] = React.useState(null);
  const [number, onChangeNumber] = React.useState(null);
  const [message, onChangeMessage] = React.useState(null);

  const displayRecord = () => {
    let userRecord = {
      Email: email,
      Number: number,
      Message: message,
    };
    alert(JSON.stringify(userRecord));
  };

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeEmail}
        value={email}
        placeholder=" Email"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder=" Phone No"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeMessage}
        value={message}
        placeholder=" Messahe"
      />
      <Button
        style={styles.submitButton}
        onPress={() => displayRecord()}
        title="Submit"
      />
    </SafeAreaView>
  );
};

class Form extends Component {
  state = {
    modalVisible: false,
  };

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  };

  render() {
    const { modalVisible } = this.state;
    return (
      <View>
        <Modal animationType="slide" transparent={true} visible={modalVisible}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <UselessTextInput />
              <Button
                style={styles.textStyle}
                onPress={() => this.setModalVisible(!modalVisible)}
                title="Close"
              />
            </View>
          </View>
        </Modal>
        <Button
          style={styles.textStyle}
          onPress={() => this.setModalVisible(true)}
          title="Get in touch"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 150,
    margin: 12,
    borderWidth: 1,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  submitButton: {
    backgroundColor: "red",
    marginBottom: "5px",
  },
});

export default Form;
