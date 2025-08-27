/* eslint-disable eqeqeq */
import { useQuery } from "convex/react";
import { FlatList, Platform, Text, View } from "react-native";
import GenerateRecipeCard from "../../components/GenerateRecipeCard";
import RecipeCard from "../../components/RecipeCard";
import { api } from "../../convex/_generated/api";

export default function Meals() {
  const recipeList = useQuery(api.Recipes.GetAllRecipes);
  console.log(recipeList);
  return (
    <FlatList
      data={[]}
      renderItem={() => null}
      ListHeaderComponent={
        <View
          style={{
            padding: 20,
            paddingTop: Platform.OS == "ios" ? 40 : 30,
          }}
        >
          <Text
            style={{
              fontSize: 25,
              fontWeight: "bold",
            }}
          >
            Discover Recipes!!
          </Text>
          <GenerateRecipeCard />

          <View style={{ marginTop: 20 }}>
            <FlatList
              data={recipeList}
              numColumns={2}
              renderItem={({ item }) => <RecipeCard recipe={item} />}
            />
          </View>
        </View>
      }
    />
  );
}
