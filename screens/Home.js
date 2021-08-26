import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Accelerometer } from "expo-sensors";
import { JOYSTICK_SENSITIVITY, STEP_SENSITIVITY } from "../utils/AppConstant";
import AxisPad from "react-native-axis-pad";
import { FloatingMenu } from "react-native-floating-action-menu";
import { MaterialIcons } from "@expo/vector-icons";
import { Dialog, Portal, Button } from "react-native-paper";

class Home extends React.Component {
  state = {
    x: 0,
    y: 0,
    z: 0,
    step: 0,
    visible: false,
  };

  componentDidMount() {
    this.subscription = Accelerometer.addListener((accelerometerData) => {
      Accelerometer.setUpdateInterval(100);
      let { x, y, z } = accelerometerData;
      this.setState({
        x,
        y,
        z,
      });
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.x != this.state.x ||
      prevState.y != this.state.y ||
      prevState.z != this.state.z
    ) {
      let { x, y, z, step } = this.state;

      let val = Math.sqrt(x * x + y * y + z * z);
      val = Math.abs(val);

      if (val >= STEP_SENSITIVITY) {
        this.setState({
          step: step + 1,
        });
      }
    }
  }

  componentWillUnmount() {
    this.subscription && this.subscription.remove();
    this.subscription = null;
  }

  handleJoystick = ({ x, y }) => {
    if (x >= JOYSTICK_SENSITIVITY) {
      console.log("up");
    } else if (x <= JOYSTICK_SENSITIVITY * -1) {
      console.log("down");
    } else if (x < JOYSTICK_SENSITIVITY && x > JOYSTICK_SENSITIVITY * -1) {
      console.log("reset");
    }
  };
  handleButtonA = () => {
    console.log("A");
  };

  handleButtonB = () => {
    console.log("B");
  };
  handleButtonMenu = () => {
    this.setState({ visible: true });
    console.log("Menu");
  };

  handledialog = (state) => () => {
    this.setState({ visible: state });
  };

  handlereset = () => {
    this.setState({ step: 0 });
  };

  render() {
    const { step, visible } = this.state;

    return (
      <View style={styles.container}>
        <Portal>
          <Dialog
            style={{ transform: [{ rotate: "90deg" }] }}
            visible={visible}
            onDismiss={this.handledialog(false)}
          >
            <Dialog.Title>Options</Dialog.Title>
            <Dialog.Content>
              <Button onPress={this.handlereset}>Reset Step</Button>
              <Button onPress={this.handledialog(false)}>Back</Button>
            </Dialog.Content>
          </Dialog>
        </Portal>
        <View style={styles.JoystickContainer}>
          <AxisPad
            resetOnRelease={true}
            autoCenter={true}
            size={200}
            handlerSize={90}
            lockY={true}
            onValue={this.handleJoystick}
          ></AxisPad>
        </View>
        <View style={styles.menufold}>
          <View style={styles.menuchild}>
            <Text style={{ fontSize: 20 }}>Steps: {step}</Text>
            <TouchableOpacity onPress={this.handleButtonMenu}>
              <MaterialIcons name="menu" size={100} color="black" />
            </TouchableOpacity>
          </View>
          {/* <FlatButton text="menu" onPress={this.props.handleMenu}></FlatButton> */}
        </View>

        <View style={styles.buttonfield}>
          <View
            style={{ width: "50%", height: "50%", backgroundColor: "blue" }}
          >
            <TouchableOpacity onPress={this.handleButtonA}>
              <View
                style={{
                  width: "100%",
                  height: "100%",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text style={styles.Buttons}>A</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{ width: "50%", height: "50%", backgroundColor: "white" }}
          ></View>
          <View
            style={{ width: "50%", height: "50%", backgroundColor: "white" }}
          ></View>
          <View
            style={{ width: "50%", height: "50%", backgroundColor: "purple" }}
          >
            <TouchableOpacity onPress={this.handleButtonB}>
              <View
                style={{
                  width: "100%",
                  height: "100%",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text style={styles.Buttons}>B</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    alignItems: "center",
  },
  JoystickContainer: {
    flex: 4,
    alignItems: "center",
  },
  menufold: {
    flex: 2,
    alignItems: "center",
  },
  menuchild: {
    transform: [{ rotate: "90deg" }],
    alignItems: "center",
  },
  text: {
    fontSize: 40,
  },
  buttonfield: {
    flex: 4,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  Buttons: {
    fontSize: 30,
    color: "white",
    transform: [{ rotate: "90deg" }],
  },
});

export default Home;
