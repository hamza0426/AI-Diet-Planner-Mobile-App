/* eslint-disable eqeqeq */
import { Platform, StyleSheet, Text, TextInput, View } from "react-native";
import Button from "../../components/shared/Button";
import Colors from "../../shared/Colors";

export default function GenerateAiRecipe() {
  const GenerateRecipeOptions = () => {};
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
          marginTop: 5,
          color: Colors.Gray,
          fontSize: 16,
        }}
      >
        Generate Personalized Recipes using AI
      </Text>
      <TextInput
        style={styles.textArea}
        placeholder="Enter Your Ingredients or Recipe name"
      />
      <View
        style={{
          marginTop: 25,
        }}
      >
        <Button title={"Generate Recipe"} onPress={GenerateRecipeOptions} />
      </View>
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
