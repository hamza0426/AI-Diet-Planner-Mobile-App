import moment from "moment";
import React, { useContext, useEffect, useState } from "react";
import { Text, View } from "react-native";
import { UserContext } from "../context/UserContext";
import Colors from "../shared/Colors";
import { useConvex, useQuery} from "convex/react";
import { api } from "../convex/_generated/api";
import { RefreshDataContext } from "../context/RefreshDataContext";

export default function TodayProgress() {
  const { user } = useContext(UserContext);
  const convex = useConvex();
  const [totalCaloriesConsumed, setTotalCaloriesConsumed] = useState(0);
  const {refreshData, setRefreshData} = useContext(RefreshDataContext);


  useEffect(() => {
    if (user && user._id && user.calories) {
      GetTotalCaloriesConsumed();
    }
  }, [user?._id, user?.calories, refreshData]);

  
  // useEffect(()=>{
  //   user && GetTotalCaloriesConsumed();
  // },[user,refreshData])
  
  const GetTotalCaloriesConsumed= async()=>{
    const result = await convex.query(api.MealPlan.GetTotalCaloriesConsumed,{
      date:moment().format('DD/MM/YYYY'),
      uid:user?._id
    })
    // console.log(result)
    setTotalCaloriesConsumed(result)
  }


  
const progress = (totalCaloriesConsumed / user?.calories) * 100;

  return (
    <View
      style={{
        marginTop: 15,
        padding: 15,
        backgroundColor: Colors.WHITE,
        borderRadius: 10,
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          Todays Goal
        </Text>
        <Text
          style={{
            fontSize: 18,
          }}
        >
          {moment().format("MMM DD, YYYY")}
        </Text>
      </View>
      <Text
        style={{
          fontSize: 30,
          fontWeight: "bold",
          textAlign: "center",
          marginTop: 10,
          color: Colors.PRIMARY,
        }}
      >
        {totalCaloriesConsumed}/{user?.calories} kcal
      </Text>
      {/* <Text
        style={{
          textAlign: "center",
          marginTop: 2,
          fontSize: 16,
        }}
      >
        You are doing great bro!!
      </Text> */}


      <Text
        style={{
          textAlign: "center",
          marginTop: 2,
          fontSize: 16,
        }}
      >
        {progress < 34
          ? "Just getting started 💪"
          : progress < 67
          ? "You are doing great !! 🔥"
          : progress < 100
          ? "Amazing! Goal almost done 🎯"
          : "Goal Completed 🎉"}
      </Text>  

      <View
        style={{
          backgroundColor: Colors.Gray,
          height: 10,
          borderRadius: 99,
          marginTop: 15,
          opacity: 0.7,
        }}
      >
        <View
          style={{
            backgroundColor: Colors.PRIMARY,
            width: `${Math.min((totalCaloriesConsumed / user?.calories) * 100, 100)}%`,
            height: 10,
            borderRadius: 99,
          }}
        ></View>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 5,
        }}
      >
        <Text>Calories Consumes</Text>
        <Text>Keep it Up!!</Text>
      </View>
    </View>
  );
}
