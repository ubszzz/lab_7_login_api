import React, { useState, useEffect } from "react";
import { Text, View, Button } from "react-native";
const Profile=({ route, navigation })=> {
const [user, setUser] = useState("");
useEffect(() => {
fetch(
"http://mgt2.pnu.ac.th/6260704014/react/profile.php?email=" +
route.params.Email
)
.then((response) => response.json())
.then((json) => setUser(json))
.catch((error) => console.error(error));
}, []);
console.log(user);
return (
<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
<Text style={{ fontSize: 30 }}>โปรไฟล์</Text>
<Text style={{ fontSize: 20 }}>ID: {user.id}</Text>
<Text style={{ fontSize: 20 }}>ชื่อ: {user.name}</Text>
<Text style={{ fontSize: 20 }}>ที่อยู่: {user.address}</Text>
<Text style={{ fontSize: 20 }}>อีเมล: {route.params.Email}</Text>
<Text style={{ fontSize: 20 }}>วันที่สมัคร: {user.date}</Text>
<Button title="ออกจากระบบ" onPress={() => navigation.goBack()} />
</View>
);
}
export default Profile;