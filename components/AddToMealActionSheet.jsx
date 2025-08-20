// eslint-disable eqeqeq ;
// eslint-disable no-unused-expressions ;
import {  Coffee02Icon,  Moon02Icon,  Sun03Icon} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react-native";
import moment from "moment";
import { useContext, useEffect, useState } from "react";
import { Alert, FlatList, Text, TouchableOpacity, View } from "react-native";
import Colors from "../shared/Colors";
import Button from "./shared/Button";
import { useMutation } from "convex/react";
import { api } from "../convex/_generated/api";
import { UserContext } from './../context/UserContext'

export default function AddToMealActionSheet({ recipeDetail , hideActionSheet }) {
  const [dateList, setDateList] = useState([]);
  const [selectedDate, setSelectedDate] = useState();
  const [selectedMeal, setSelectedMeal] = useState();
  const { user } = useContext (UserContext)
  const CreateMealPlan = useMutation(api.MealPlan.CreateMealPlan)

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
  }, []);
  const GenerateDates = () => {
    const result = [];
    for (let i = 0; i < 4; i++) {
      const nextDate = moment().add(i, "days").format("DD/MM/YYYY");
      result.push(nextDate);
    }
    console.log(result);
    setDateList(result);
  };

  const AddToMealPlan =async () => {
    if (!selectedDate && !selectedMeal) {
      Alert.alert('Error', 'Please Select All Details ')
    }
    const result = await CreateMealPlan ({
      date:selectedDate,
      mealType:selectedMeal,
      recipeId:recipeDetail?._id,
      uid:user?._id
    })

    console.log(result)
    Alert.alert('Added!', 'Added! to Meal Plan 🎉 ')
    hideActionSheet()
  }





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
          marginBottom: 10,
        }}
      >
        Select Date
      </Text>
      <FlatList
        data={dateList}
        numColumns={4}
        renderItem={({ item, index }) => (
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
          </TouchableOpacity>
        )}
      />



      <Text
        style={{
          fontSize: 18,
          fontWeight: "bold",
          marginTop: 15,
          marginBottom: 10,
        }}>Select  Meal</Text>

        <FlatList
          data={mealOptions}
          numColumns={4}
          renderItem={({ item, index }) => (
            <TouchableOpacity
            onPress={() => setSelectedMeal(item?.title)}
              style={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                padding: 7,
                borderWidth: 1,
                borderRadius: 10,
                margin: 5,
                backgroundColor:
                selectedMeal == item.title ? Colors.SECONDARY : Colors.WHITE,
              borderColor: selectedMeal == item.title ? Colors.PRIMARY : Colors.Gray,
              }}
            >
              <HugeiconsIcon icon={item.icon}/>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "bold",
                  marginTop: 5,
                }}
              >
                {item.title}
              </Text>
            </TouchableOpacity>
          )} />



          <View style={{
            marginTop: 20,
            // display: "flex",
            
          }}>
            <Button title={' + Add to Meal plan '} onPress={AddToMealPlan} />
            <TouchableOpacity 
            onPress={() => hideActionSheet()}
            style={{
              padding:15,
            }}>
              <Text
                style={{
                  fontSize: 20,
                  color: Colors.PRIMARY,
                  marginTop: 10,
                  fontWeight: "400",
                  textAlign: "center",
                }}
              >
                Cancel
              </Text>
            </TouchableOpacity>
          </View>
    </View>
  );
}
