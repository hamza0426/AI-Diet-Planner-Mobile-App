// /* eslint-disable no-unused-vars */
import { CalendarAdd01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react-native";
import { useConvex } from "convex/react";
import moment from "moment";
import { useContext, useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import { UserContext } from "../context/UserContext";
import { api } from "../convex/_generated/api";
import Colors from "../shared/Colors";
import MealPlanCard from "./MealPlanCard";
import Button from "./shared/Button";
import { RefreshDataContext } from "../context/RefreshDataContext";

export default function TodaysMealPlan() {
  const [mealPlan, setMealPlan] = useState();
  const { user } = useContext(UserContext)
  const convex = useConvex();
  const {refreshData, setRefreshData} = useContext(RefreshDataContext);

  useEffect(() => {
    user && GetTodaysMealPlan();
  },[user, refreshData])


  const GetTodaysMealPlan = async () => {
    const result = await convex.query(api.MealPlan.GetTodaysMealPlan,{
      date:moment().format('DD/MM/YYYY'),
      uid:user?._id
    });
    console.log("-->",result);
    setMealPlan(result);
  }

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
        Todays Meal Plan</Text>

      {!mealPlan ? 
        <View style={{
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
        :
        <View>
          <FlatList 
          data={mealPlan}
          renderItem={({item}) => (
            <MealPlanCard mealPlanInfo={item}/>
          )}
           />
          </View>
      }
    </View>
  );
}
