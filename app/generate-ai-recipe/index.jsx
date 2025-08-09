/* eslint-disable eqeqeq */
import { useState } from "react";
import { Platform, StyleSheet, Text, TextInput, View } from "react-native";
import RecipeOptionList from "../../components/RecipeOptionList";
import Button from "../../components/shared/Button";
import { GenerateAIRecipe } from "../../services/AiModel";
import Colors from "../../shared/Colors";
import Prompt from "../../shared/Prompt";

export default function GenerateAiRecipe() {
  const [input, setInput] = useState();
  const [loading, setLoading] = useState(false);
  const [recipeOption, setRecipeOption] = useState([]);
  const GenerateRecipeOptions = async () => {
    setLoading(true);
    // make  a ai model to generate recipe based on user input
    try {
      const PROMPT = input + Prompt.GENERATE_RECIPE_OPTION_PROMPT;
      const result = await GenerateAIRecipe(PROMPT);
      console.log(result.choices[0].message);
      const extractJson = result.choices[0].message.content
        .replace("```json", "")
        .replace("```", "");
      const parsedJSONResp = JSON.parse(extractJson);
      console.log(parsedJSONResp);
      setRecipeOption(parsedJSONResp);
      setLoading(false);
    } catch (e) {
      setLoading(false);
      console.log(e);
    }
  };
  return (
    <View
      style={{
        paddingTop: Platform.OS == "ios" ? 40 : 30,
        padding: 20,
        backgroundColor: Colors.WHITE,
        height: "100%",
      }}
    >
      <Text
        style={{
          fontSize: 25,
          fontWeight: "bold",
        }}
      >
        AI Recipe Generator
      </Text>
      <Text
        style={{
          marginTop: 25,
          color: Colors.Gray,
          fontSize: 16,
        }}
      >
        Generate Personalized Recipes using AI
      </Text>
      <TextInput
        style={styles.textArea}
        onChangeText={(value) => setInput(value)}
        placeholder="Enter Your Ingredients or Recipe name"
      />
      <View
        style={{
          marginTop: 25,
        }}
      >
        <Button
          title={"Generate Recipe"}
          onPress={GenerateRecipeOptions}
          loading={loading}
        />
      </View>

      {recipeOption?.length > 0 && (
        <RecipeOptionList recipeOption={recipeOption} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  textArea: {
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    fontSize: 20,
    marginTop: 15,
    height: 150,
    textAlign: "top",
    backgroundColor: Colors.WHITE,
  },
});
