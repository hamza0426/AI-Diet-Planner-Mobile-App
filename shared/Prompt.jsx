export default {
  CALORIES_PROMPT: `Based on Weight,Height,Gender, and Goal give me calories and proteins need daily consider age as 28 in JSON format
   and follow the schema: 
  {
  calories:<>,
  proteins:<>
  }`
,


  GENERATE_RECIPE_OPTION_PROMPT: `Depends on a user instruction create 3 different variant with Recipe Name with Emoji,
  2 lines of description and main ingredient list in JSON format with field recipeName, description, ingredients (without size) only,Don't Give Text Response and only give in JSON format`,

  GENERATE_COMPLETE_RECIEPE_PROMPT: `
  - As per recipeName and description give me recipeName and description as field, Give me all list of ingredients as ingredients
  - emoji icons for each ingredient as icon, qunatity, along with details step by step recipe as steps
  - Total calories as calories (only number), Minutes to cook as cookTime and serving number as serveTo
  - relastic image Text prompt as per recipe as imagePrompt
  - Give me category as List for recipe from [Breakfast, Lunch, Dinner, Snack, Dessert,Fastfood,Drink,Cake]as category
  - Give me response in JSON format only
  - Schema format should be:
  {
  "description": "string",
  "recipeName": "string",
  "calories": "number",
  "category": ["string"],
  "cookTime": "number",
  "imagePrompt": "string",
  "ingredients": [
      {
        "icon": "string",
        "ingredient": "string",
        "quantity": "string"
      }
  ],
  "serveTo": "number",
  "steps": ["string"]

  }
  `
};
