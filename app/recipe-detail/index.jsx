import { useQuery } from "convex/react";
import { useLocalSearchParams } from "expo-router/build/hooks";
import { useRef } from "react";
import { FlatList, Platform, View } from "react-native";
import ActionSheet from "react-native-actions-sheet";
import AddToMealActionSheet from "../../components/AddToMealActionSheet";
import RecipeIngredients from "../../components/RecipeIngredients";
import RecipeIntro from "../../components/RecipeIntro";
import RecipeSteps from "../../components/RecipeSteps";
import Button from "../../components/shared/Button";
import { api } from "../../convex/_generated/api";
import Colors from "../../shared/Colors";

export default function RecipeDetail() {
  const { recipeId } = useLocalSearchParams();
  console.log(recipeId);
  const actionSheetRef = useRef(null);

  const recipeDetail = useQuery(api.Recipes.GetRecipeById, {
    id: recipeId 
    //for testing i am using hardcode
    // id: recipeId || "jd7bncwk3q1jkj22arv1pj05wd7ngwgm",
    // id:recipeId == undefined && 'jd77adg3132713bzfwwxtesf1n7nf29x'
  });
  console.log("recipeDetail", recipeDetail);

  return (
    <FlatList
      data={[]}
      renderItem={() => null}
      ListHeaderComponent={
        <View
          style={{
            padding: 20,
            paddingTop: Platform.OS == "ios" ? 40 : 30,
            backgroundColor: Colors.WHITE,
            height: "100%",
          }}
        >
          {/* Recipe Intro */}
          <RecipeIntro recipeDetail={recipeDetail} />

          {/* Recipe Ingredient */}
          <RecipeIngredients recipeDetail={recipeDetail} />

          {/* Cooking Steps */}
          <RecipeSteps recipeDetail={recipeDetail} />

          <View
            style={{
              marginTop: 15,
              marginBottom: 30,
            }}
          >
            <Button
              title={"Add to Meal Plan"}
              onPress={() => actionSheetRef.current.show()}
            />
          </View>

          <ActionSheet ref={actionSheetRef}>
            <AddToMealActionSheet recipeDetail={recipeDetail} hideActionSheet={() => actionSheetRef.current.hide()}/>
          </ActionSheet>
        </View>
      }
    ></FlatList>
  );
}
