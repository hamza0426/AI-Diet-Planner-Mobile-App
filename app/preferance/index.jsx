import { Dumbbell01Icon, FemaleSymbolIcon, MaleSymbolIcon, PlusSignSquareIcon, WeightScaleIcon, } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react-native";
import { useMutation } from "convex/react";
import { useRouter } from "expo-router";
import { useContext, useState } from "react";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { UserContext } from "../../context/UserContext";
import { api } from "../../convex/_generated/api";
import { CalculateCaloriesAI } from "../../services/AiModel";
import Prompt from "../../shared/Prompt";
import Button from "./../../components/shared/Button";
import Input from "./../../components/shared/Input";
import Colors from "./../../shared/Colors";
import LoadingDialog from "../../components/LoadingDialog";

export default function Preferance() {
  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();
  const [gender, setGender] = useState();
  const [goal, setGoal] = useState();
  const [loading, setLoading] = useState(false);
  const UpdateUserPref = useMutation(api.Users.UpdateUserPref);
  const { user, setUser } = useContext(UserContext);
  const router = useRouter();
  
  const onContinue = async () => {
    if (!weight || !height || !gender || !goal) {
      Alert.alert("Plese enter all details to continue!!");
      return;
    }

    setLoading(true);
    try {

    const data = {
      uid: user?._id,
      weight: weight,
      height: height,
      gender: gender,
      goal: goal,
    };


    //Calculate Calories using AI
    const PROMPT = JSON.stringify(data)+Prompt.CALORIES_PROMPT
    console.log(PROMPT);
    const AIResult = await CalculateCaloriesAI(PROMPT)
    console.log(AIResult.choices[0].message.content)
    const AIResp=AIResult.choices[0].message.content
    const JSONContent= JSON.parse(AIResp.replace('```json','').replace('```','') )
    console.log(JSONContent)


    // console.log(data)
    const result = await UpdateUserPref({
      ...data,
      ...JSONContent
    });
    setUser((prev) => ({
      ...prev,
      ...data,
      calories: JSONContent.calories,
      proteins: JSONContent.proteins,
      email: prev?.email,
    }));
    console.log(result);
    router.replace("/(tabs)/Home");
   
  }
  catch (err) {
    console.log(err);
    Alert.alert("Error", "Something went wrong. Please try again.");
  } finally {
    setLoading(false); // 👈 stop loading always
  }
};
  
  
  return (
    <View
      style={{
        padding: 20,
      }}
    >
      <Text
        style={{
          textAlign: "center",
          fontSize: 30,
          fontWeight: "bold",
          marginTop: 30,
        }}
      >
        Tell us about Yourself
      </Text>
      <Text
        style={{
          fontSize: 16,
          textAlign: "center",
          color: Colors.Gray,
        }}
      >
        This will help us to create a personalized diet plan for you
      </Text>

      <View
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 10,
        }}
      >
        <View
          style={{
            flex: 1,
          }}
        >
          <Input
            placeholder={"e,g 70"}
            label="Weight (kg)"
            onChangeText={setWeight}
          />
        </View>

        <View
          style={{
            flex: 1,
          }}
        >
          <Input
            placeholder={"e,g 5.10"}
            label="Height (ft)"
            onChangeText={setHeight}
          />
        </View>
      </View>

      <View
        style={{
          marginTop: 20,
        }}
      >
        <Text
          style={{
            fontWeight: "medium",
            fontSize: 18,
            marginBottom:10
          }}
        >
          Gender
        </Text>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 10,
          }}
        >
          <TouchableOpacity
            onPress={() => setGender("Male")}
            style={{
              flex: 1,
              borderWidth: 1,
              padding: 15,
              borderColor: gender == "Male" ? Colors.PRIMARY : Colors.Gray,
              backgroundColor: gender === "Male" ? Colors.BLUE : "transparent",
              borderRadius: 10,
              alignItems: "center",
            }}
          >
            <HugeiconsIcon
              icon={MaleSymbolIcon}
              size={40}
              color={gender === "Male" ? "white" : Colors.BLUE}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setGender("Female")}
            style={{
              flex: 1,
              borderWidth: 1,
              padding: 15,
              borderColor: gender == "Female" ? Colors.PRIMARY : Colors.Gray,
              backgroundColor: gender === "Female" ? Colors.PINK : "transparent",
              borderRadius: 10,
              alignItems: "center",
            }}
          >
            <HugeiconsIcon
              icon={FemaleSymbolIcon}
              size={40}
              color={gender === "Female" ? "white" : Colors.PINK}
            />
          </TouchableOpacity>

          {/* <View
            style={{
              flex: 1,
              borderWidth: 1,
              padding: 15,
              borderColor: Colors.Gray,
              borderRadius: 10,
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 18,
                fontWeight: "medium",
                alignItems: "center",
              }}
            >
              Others
            </Text>
          </View> */}
        </View>
      </View>

      <View>
        <Text
          style={{
            fontWeight: "medium",
            fontSize: 15,
            marginTop: 25,
          }}
        >
          Whats Your Goal ?
        </Text>

        <TouchableOpacity
          onPress={() => setGoal("Weight Loss")}
          style={[
            styles.goalContainer,
            {
              borderColor: goal == "Weight Loss" ? Colors.PRIMARY : Colors.Gray,
              borderWidth: goal === "Weight Loss" ? 2 : 1,
            },
          ]}
        >
          <HugeiconsIcon icon={WeightScaleIcon} />
          <View>
            <Text style={styles.goalText}>Weight Loss</Text>
            <Text style={styles.goalSubText}>
              Reduce body fat and get leaner
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setGoal("Muscle Gain")}
          style={[
            styles.goalContainer,
            {
              borderColor: goal == "Muscle Gain" ? Colors.PRIMARY : Colors.Gray,
              borderWidth: goal === "Muscle Gain" ? 2 : 1,
            },
          ]}
        >
          <HugeiconsIcon icon={Dumbbell01Icon} />
          <View>
            <Text style={styles.goalText}>Muscle Gain</Text>
            <Text style={styles.goalSubText}>
              Build Muscle and get Stronger
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setGoal("Weight Gain")}
          style={[
            styles.goalContainer,
            {
              borderColor: goal == "Weight Gain" ? Colors.PRIMARY : Colors.Gray,
              borderWidth: goal === "Weight Gain" ? 2 : 1,
            },
          ]}
        >
          <HugeiconsIcon icon={PlusSignSquareIcon} />
          <View>
            <Text style={styles.goalText}>Weight Gain</Text>
            <Text style={styles.goalSubText}>Increase Healthy Body Mass</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View
        style={{
          marginTop: 25,
        }}
      >
        <Button title={"Continue"} onPress={onContinue}/>
        <LoadingDialog loading={loading} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  goalContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    padding: 12,
    borderWidth: 1,
    borderColor: Colors.Gray,
    borderRadius: 20,
    marginTop: 10,
  },
  goalText: {
    fontSize: 15,
    fontWeight: "bold",
  },
  goalSubText: {
    color: Colors.Gray,
  },
});
