import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button, Alert } from "react-native";
const Login = ({ navigation }) => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const isEmailValid = (Email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(Email).toLowerCase());
  };
  const handlePress = () => {
    if (!Email) {
      Alert.alert("กรุณากรอกอีเมล!");
    } else if (!isEmailValid(Email)) {
      Alert.alert("รูปแบบอีเมลไม่ถูกต้อง!");
    } else if (!Password) {
      Alert.alert("กรุณากรอกรหัสผ่าน!");
    } else {
      fetch("http://mgt2.pnu.ac.th/6260704014/react/login.php", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: Email,
          password: Password,
        }),
      })
        .then((response) => response.json())
        .then((responseJson) => {
          if (responseJson === "success") {
            //Then open Profile activity and send user email to profile activity.
            navigation.replace("Profile", { Email: Email });
          } else {
            Alert.alert(responseJson);
          }
          // Showing response message coming from server after inserting records.
          // Alert.alert(responseJson);
          // navigation.navigate('Profile');
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  return (
    <View style={styles.MainContainer}>
      <Text style={styles.TextComponentStyle}>เข้าสู่ระบบ</Text>
      <TextInput
        // Adding hint in Text Input using Place holder.
        placeholder="อีเมล"
        onChangeText={(Email) => setEmail(Email)}
        // Making the Under line Transparent.
        underlineColorAndroid="transparent"
        style={styles.TextInputStyleClass}
      />
      <TextInput
        // Adding hint in Text Input using Place holder.
        placeholder="รหัสผ่าน"
        onChangeText={(Password) => setPassword(Password)}
        // Making the Under line Transparent.
        underlineColorAndroid="transparent"
        style={styles.TextInputStyleClass}
        secureTextEntry={true}
      />
      <Button title="ตกลง" onPress={handlePress} color="#2196F3"></Button>
    </View>
  );
};
const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: "center",
    flex: 1,
    margin: 10,
  },
  TextInputStyleClass: {
    textAlign: "center",
    marginBottom: 7,
    height: 40,
    borderWidth: 1,
    // Set border Hex Color Code Here.
    borderColor: "#2196F3",
    // Set border Radius.
    borderRadius: 15,
  },
  TextComponentStyle: {
    fontSize: 20,
    color: "#000",
    textAlign: "center",
    marginBottom: 15,
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
export default Login;
