/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { GenerateAIRecipe } from "../services/AiModel";
import Colors from "../shared/Colors";
import Prompt from "../shared/Prompt";
import LoadingDialog from "./LoadingDialog";

export default function RecipeOptionList({ recipeOption }) {
  const [loading, setLoading] = useState(false);
  const onRecipeOptionSelect = async (recipe) => {
    setLoading(true);
    const PROMPT =
      "RecipeName: " +
      recipe?.recipeName +
      " Description: " +
      recipe?.description +
      Prompt.GENERATE_COMPLETE_RECIEPE_PROMPT;
    try {
      // console.log(PROMPT);
      const result = await GenerateAIRecipe(PROMPT);
      const extractJson = result.choices[0].message.content
        .replace("```json", "")
        .replace("```", "");
      const parsedJSONResp = JSON.parse(extractJson);
      console.log(parsedJSONResp);
      // Generate Recipe image

      //Save to Database

      //redirect to recipe details screen

      setLoading(false);
    } catch (e) {
      setLoading(false);
    }
  };
  return (
    <View
      style={{
        marginTop: 20,
      }}
    >
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
        }}
      >
        Select the Recipe
      </Text>
      <View>
        {recipeOption?.map((item, index) => (
          <TouchableOpacity
            onPress={() => onRecipeOptionSelect(item)}
            key={index}
            style={{
              padding: 15,
              borderWidth: 0.2,
              borderRadius: 15,
              marginTop: 15,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontWeight: "bold",
              }}
            >
              {item?.recipeName}
            </Text>
            <Text
              style={{
                color: Colors.Gray,
              }}
            >
              {item?.description}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <LoadingDialog loading={loading} />
    </View>
  );
}
