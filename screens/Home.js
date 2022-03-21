import React from "react";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";
const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={{ justifyContent: "center" }}>
        <Text
          style={{
            fontSize: 30,
            padding: 10,
            textAlign: "center",
            color: "red",
          }}
        >
          Home
        </Text>
        <View>
          <TouchableHighlight
            style={styles.submit}
            onPress={() => navigation.navigate("Login")}
            underlayColor="#fff"
          >
            <Text style={styles.submitText}>เข้าสู่ระบบ</Text>
          </TouchableHighlight>
        </View>
        <Text></Text>
        <View>
          <TouchableHighlight
            style={styles.submit}
            onPress={() => navigation.navigate("Register")}
            underlayColor="#fff"
          >
            <Text style={styles.submitText}>สมัครสมาชิก</Text>
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: "#fff",
    justifyContent: "center",
    marginHorizontal: 20,
  },
  submit: {
    marginRight: 30,
    marginLeft: 30,
    marginTop: 10,
  },
  submitText: {
    paddingTop: 15,
    paddingBottom: 15,
    color: "#fff",
    textAlign: "center",
    backgroundColor: "#2196F3",
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "#fff",
  },
});
export default Home;
