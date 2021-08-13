import React from "react";
import { StyleSheet, Text, View } from "react-native";

class Home extends React.Component {
  state = {
    step: 0,
  };

  componentDidMount() {}

  componentDidUpdate(prevProps, prevState) {}

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.numba}>{this.state.step}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
  numba: {
    marginTop: 350,
    marginLeft: 170,
    fontSize: 100,
    color: "darkred",
  },
});

export default Home;
