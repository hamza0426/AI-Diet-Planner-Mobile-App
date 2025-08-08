/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Text, View } from "react-native";
import Colors from "../shared/Colors";
import Button from "./shared/Button";
import { CalendarAdd01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react-native";

export default function TodaysMealPlan() {
  const [mealPlan, setMealPlan] = useState();
  return (
    <View
      style={{
        marginTop: 15,
      }}
    >
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
        }}
      >
        Todays Meal Plan
      </Text>
      {!mealPlan && (
        <View
          style={{
            display: "flex",
            alignItems: "center",
            padding: 20,
            backgroundColor: Colors.WHITE,
            marginTop: 15,
            borderRadius: 15,
          }}
        >
          <HugeiconsIcon icon={CalendarAdd01Icon} size={25} color={Colors.PRIMARY} />
          <Text
            style={{
              fontSize: 18,
              color: Colors.Gray,
              marginBottom: 20,
            }}
          >
            You Dont have any meal plan for today
          </Text>
          <Button title={"Create New Meal Plan!!"} />
        </View>
      )}
    </View>
  );
}
