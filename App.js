import React, { Component } from "react";
import { View, Text, Button } from "react-native";
import { WebView } from "react-native-webview";
import Form from "./src/Form";

const App = () => {
  const runFirst = `
      document.body.style.backgroundColor = '#4aad77';
      //setTimeout(function() { window.alert('Welcome to Commonkey') }, 2000);
      true; // note: this is required, or you'll sometimes get silent failures
    `;

  return (
    <View style={{ flex: 1 }}>
      <WebView
        source={{
          uri: "www.commonkey.com",
        }}
        onMessage={(event) => {}}
        injectedJavaScript={runFirst}
      />
      <Form />
    </View>
  );
};

export default App;
