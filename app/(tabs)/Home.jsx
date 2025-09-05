// import { useRouter } from "expo-router";
// import { useContext, useEffect } from "react";
// import { FlatList, Platform, View } from "react-native";
// import GenerateRecipeCard from "../../components/GenerateRecipeCard";
// import HomeHeader from "../../components/HomeHeader";
// import TodayProgress from "../../components/TodayProgress";
// import TodaysMealPlan from "../../components/TodaysMealPlan";
// import { UserContext } from "./../../context/UserContext";

// export default function Home() {
//   const { user } = useContext(UserContext);
//   const router = useRouter();

//   // useEffect(() => {
//   //   if (!user?.weight) {
//   //     // router.replace('/recipe-detail');
//   //     router.replace("/preferance");
//   //   }
//   // }, [user]);


//   useEffect(() => {
//     if (user === undefined || user === null) return; // wait until user is fetched
//     if (!user.weight) {
//       router.replace("/preferance");
//     }
//   }, [user]);
  

//   return (
//     <FlatList
//       data={[]} 
//       renderItem={()=>null}
//       ListHeaderComponent={
//         <View style={{ 
//           paddingTop: Platform.OS == "ios" ? 40 : 30,
//           padding: 20
//            }}>
//           <HomeHeader />
//           <TodayProgress />
//           <GenerateRecipeCard />
//           <TodaysMealPlan />
//         </View>
//       }
//     />
//   );
// }
/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from "expo-router";
import { useContext, useEffect, useState } from "react";
import { FlatList, Platform, View, RefreshControl } from "react-native";
import GenerateRecipeCard from "../../components/GenerateRecipeCard";
import HomeHeader from "../../components/HomeHeader";
import TodayProgress from "../../components/TodayProgress";
import TodaysMealPlan from "../../components/TodaysMealPlan";
import { UserContext } from "./../../context/UserContext";
import { RefreshDataContext } from "../../context/RefreshDataContext"; // 👈 use refresh context

export default function Home() {
  const { user } = useContext(UserContext);
  const { refreshData, setRefreshData } = useContext(RefreshDataContext); // 👈
  const router = useRouter();
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    if (user === undefined || user === null) return; // wait until user is fetched
    if (!user.weight) {
      router.replace("/preferance");
    }
  }, [user]);

  const onRefresh = () => {
    setRefreshing(true);
    // trigger refresh across app
    setRefreshData(Date.now());
    setTimeout(() => {
      setRefreshing(false);
    }, 800); // small delay for UX
  };

  return (
    <FlatList
      data={[]} 
      renderItem={() => null}
      refreshControl={      // 👈 pull to refresh
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      ListHeaderComponent={
        <View
          style={{
            paddingTop: Platform.OS == "ios" ? 40 : 30,
            padding: 20,
          }}
        >
          <HomeHeader />
          <TodayProgress />
          <GenerateRecipeCard />
          <TodaysMealPlan />
        </View>
      }
    />
  );
}
