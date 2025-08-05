import {
  Dumbbell01Icon,
  FemaleSymbolIcon,
  MaleSymbolIcon,
  PlusSignSquareIcon,
  WeightScaleIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react-native";
import { useMutation } from "convex/react";
import { useRouter } from "expo-router";
import { useContext, useState } from "react";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { UserContext } from "../../context/UserContext";
import { api } from "../../convex/_generated/api";
import Button from "./../../components/shared/Button";
import Input from "./../../components/shared/Input";
import Colors from "./../../shared/Colors";

export default function Preferance() {
  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();
  const [gender, setGender] = useState();
  const [goal, setGoal] = useState();
  const UpdateUserPref = useMutation(api.Users.UpdateUserPref);
  const { user, setUser } = useContext(UserContext);
  const router = useRouter();

  const onContinue = async () => {
    if (!weight || !height || !gender || !goal) {
      Alert.alert("Plese enter all details to continue!!");
      return;
    }
    const data = {
      uid: user?._id,
      weight: weight,
      height: height,
      gender: gender,
      goal: goal,
    };
    const result = await UpdateUserPref({
      ...data,
    });
    setUser((prev) => ({
      ...prev,
      ...data,
    }));
    router.replace("/(tabs)/Home");
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
        this will help us to create a personalized diet plan for you
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
              borderRadius: 10,
              alignItems: "center",
            }}
          >
            <HugeiconsIcon
              icon={MaleSymbolIcon}
              size={40}
              color={Colors.BLUE}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setGender("Female")}
            style={{
              flex: 1,
              borderWidth: 1,
              padding: 15,
              borderColor: gender == "Female" ? Colors.PRIMARY : Colors.Gray,
              borderRadius: 10,
              alignItems: "center",
            }}
          >
            <HugeiconsIcon
              icon={FemaleSymbolIcon}
              size={40}
              color={Colors.PINK}
            />
          </TouchableOpacity>
          <View
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
          </View>
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
          Whats Your Goal?
        </Text>

        <TouchableOpacity
          onPress={() => setGoal("Weight Loss")}
          style={[
            styles.goalContainer,
            {
              borderColor: goal == "Weight Loss" ? Colors.PRIMARY : Colors.Gray,
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
        <Button title={"Continue"} onPress={onContinue} />
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
