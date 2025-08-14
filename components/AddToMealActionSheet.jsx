/* eslint-disable eqeqeq */
/* eslint-disable no-unused-expressions */
import {
  Coffee02Icon,
  Moon02Icon,
  Sun03Icon,
} from "@hugeicons/core-free-icons";
import moment from "moment";
import { useEffect, useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import Colors from "../shared/Colors";

export default function AddToMealActionSheet({ recipeDetail }) {
  const [dateList, setDateList] = useState([]);
  const [selectedDate, setSelectedDate] = useState();
  const mealOptions = [
    {
      title: "Breakfast",
      icon: Coffee02Icon,
    },
    {
      title: "Lunch",
      icon: Sun03Icon,
    },
    {
      title: "Dinner",
      icon: Moon02Icon,
    },
  ];
  useEffect(() => {
    GenerateDates();
  });
  const GenerateDates = () => {
    const result = [];
    for (let i = 0; i < 4; i++) {
      const nextDate = moment().add(i, "days").format("DD/MM/YYYY");
      result.push(nextDate);
    }
    console.log(result);
    setDateList(result);
  };
  return (
    <View
      style={{
        padding: 20,
      }}
    >
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        Add to Meal!!
      </Text>
      <Text
        style={{
          fontSize: 18,
          fontWeight: "bold",
          marginTop: 15,
        }}
      >
        Select Date
      </Text>
      <FlatList
        data={dateList}
        numColumns={4}
        renderItem={({ item, index }) => {
          <TouchableOpacity
            onPress={() => setSelectedDate(item)}
            style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              padding: 7,
              borderWidth: 1,
              borderRadius: 10,
              margin: 5,
              backgroundColor:
                selectedDate == item ? Colors.SECONDARY : Colors.WHITE,
              borderColor: selectedDate == item ? Colors.PRIMARY : Colors.Gray,
            }}
          >
            <Text
              style={{
                fontSize: 18,
                fontWeight: 500,
              }}
            >
              {moment(item, "DD/MM/YYYY").format("ddd")}
            </Text>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
              }}
            >
              {moment(item, "DD/MM/YYYY").format("DD")}
            </Text>
            <Text
              style={{
                fontSize: 16,
              }}
            >
              {moment(item, "DD/MM/YYYY").format("MMM")}
            </Text>
          </TouchableOpacity>;
        }}
      />
    </View>
  );
}
