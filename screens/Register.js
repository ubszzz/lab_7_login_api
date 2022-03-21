import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button, Alert } from "react-native";
const Register = ({ navigation }) => {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Address, setAddress] = useState("");
  const [Password, setPassword] = useState("");
  const isEmailValid = (Email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(Email).toLowerCase());
  };
  const handlePress = () => {
    if (!Name) {
      Alert.alert("กรุณากรอกชื่อ-สกุล!");
    } else if (Name.length < 6) {
      Alert.alert("กรุณากรอกชื่อ-นามสกุลจริง!");
    } else if (!Email) {
      Alert.alert("กรุณากรอกอีเมล!");
    } else if (!isEmailValid(Email)) {
      Alert.alert("รูปแบบอีเมลไม่ถูกต้อง!");
    } else if (!Password) {
      Alert.alert("กรุณากรอกรหัสผ่าน!");
    } else if (Password.length < 6) {
      Alert.alert("กรุณากรอกรหัสผ่าน 6ตัวขึ้นไป!");
    } else if (!Address) {
      Alert.alert("กรุณากรอกที่อยู่!");
    } else {
      fetch("http://mgt2.pnu.ac.th/6260704014/react/register.php", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: Name,
          email: Email,
          address: Address,
          password: Password,
        }),
      })
        .then((response) => response.json())
        .then((responseJson) => {
          // Showing response message coming from server after inserting records.
          Alert.alert(responseJson);
          navigation.navigate("Login");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  return (
    <View style={styles.MainContainer}>
      <Text
        style={{
          fontSize: 20,
          color: "#000",
          textAlign: "center",
          marginBottom: 15,
        }}
      >
        สมัครสมาชิก
      </Text>
      <TextInput
        // Adding hint in Text Input using Place holder.
        placeholder="ชื่อ-สกุล"
        onChangeText={(Name) => setName(Name)}
        // Making the Under line Transparent.
        underlineColorAndroid="transparent"
        style={styles.TextInputStyleClass}
      />
      <TextInput
        // Adding hint in Text Input using Place holder.
        placeholder="อีเมล"
        onChangeText={(Email) => setEmail(Email)}
        autoCompleteType="email"
        keyboardType="email-address"
        textContentType="emailAddress"
        // Making the Under line Transparent.
        underlineColorAndroid="transparent"
        style={styles.TextInputStyleClass}
      />
      <TextInput
        // Adding hint in Text Input using Place holder.
        placeholder="ที่อยู่"
        onChangeText={(Address) => setAddress(Address)}
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
      <Button title="ตกลง" onPress={handlePress} color="#2196F3" />
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
    borderRadius: 5,
    // Set border Radius.
    //borderRadius: 10 ,
  },
});
export default Register;
