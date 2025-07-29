import { Link } from "expo-router";
import { Image, Text, View, Alert } from "react-native";
import Button from "../../components/shared/Button";
import Input from "../../components/shared/Input";
import { useContext, useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../services/FirebaseConfig";
import { useMutation } from "convex/react";
import {api} from '../../convex/_generated/api'
import {UserContext} from '../../context/UserContext'

export default function SignUp() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const createNewUser=useMutation(api.Users.CreateNewUser)
  const { user ,setUser}=useContext(UserContext);

  const onSignUp = () => {
    if (!name || !email || !password) {
      Alert.alert("Missing Feilds", "Enter all the Fields Value");
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then(async(userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log( user);
        if(user)
        {
            const result =await createNewUser({
                name:name,
                email:email
            });
            console.log(result);
            setUser(result);
            //navigation to home page
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage)
      });
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
        Create New Account
      </Text>

      <View
        style={{
          marginTop: 20,
          width: "100%",
        }}
      >
        <Input placeholder={"Full Name"} onChangeText={setName} />
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
        <Button title={"Create Account"} onPress={() => onSignUp()} />

        <Text
          style={{
            textAlign: "center",
            marginTop: 15,
            fontSize: 16,
          }}
        >
          Already have an Account{" "}
        </Text>

        <Link href={"/auth/SignIn"}>
          <Text
            style={{
              textAlign: "center",
              marginTop: 5,
              fontSize: 16,
              fontWeight: "bold",
            }}
          >
            Sign In Here
          </Text>
        </Link>
      </View>
    </View>
  );
}
