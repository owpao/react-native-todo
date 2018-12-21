import React, { Component } from "react";
import { Platform, Text, View } from "react-native";
import { STATUS_BAR_HEIGHT } from "../../../constants";
import { Ionicons } from "@expo/vector-icons";

class TodoContainer extends Component {
  static navigationOptions = () => ({
    title: "TODO",
    headerStyle: {
      height: Platform.OS == "android" ? 20 + STATUS_BAR_HEIGHT : 45,
      backgroundColor: "#2196F3"
    },
    headerTitleStyle: {
      //   marginTop: Platform.OS == "android" ? STATUS_BAR_HEIGHT : 0,
      color: "white"
    },
    headerLeft: <Ionicons name="md-arrow-back" size={32} color="white" />
  });
  render() {
    return (
      <View>
        <Text>HELLOW</Text>
      </View>
    );
  }
}

export default TodoContainer;
