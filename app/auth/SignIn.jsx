import { Link } from "expo-router";
import { Image, Text, View, Alert } from "react-native";
import Button from "../../components/shared/Button";
import Input from "../../components/shared/Input";
import { useState } from "react";
export default function SignIn() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const onSignIn = () => {
    if (!email || !password) {
      Alert.alert("Missing Feilds", "Enter all the Fields Value");
      return;
    }
  };

  return (
    <View
      style={{
        display: "flex",
        alignItems: "center",
        padding: 20,
      }}
    >
      <Image
        source={require("./../../assets/images/logo1.png")}
        style={{
          width: 100,
          height: 100,
          marginTop: 60,
        }}
      />
      <Text
        style={{
          fontSize: 25,
          fontWeight: "bold",
        }}
      >
        Welcome back
      </Text>

      <View
        style={{
          marginTop: 20,
          width: "100%",
        }}
      >
        <Input placeholder={"Email"} onChangeText={setEmail} />
        <Input
          placeholder={"Password"}
          password={true}
          onChangeText={setPassword}
        />
      </View>
      <View
        style={{
          marginTop: 15,
          width: "100%",
        }}
      >
        <Button title={"Sign In"} onPress={() => onSignIn()} />

        <Text
          style={{
            textAlign: "center",
            marginTop: 15,
            fontSize: 16,
          }}
        >
          Don't have an Account{" "}
        </Text>

        <Link href={"/auth/SignUp"}>
          <Text
            style={{
              textAlign: "center",
              marginTop: 5,
              fontSize: 16,
              fontWeight: "bold",
            }}
          >
            Create New Account
          </Text>
        </Link>
      </View>
    </View>
  );
}
