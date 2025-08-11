import { useQuery } from 'convex/react';
import { useLocalSearchParams } from 'expo-router/build/hooks';
import React from 'react';
import { Platform, View } from 'react-native';
import RecipeIntro from '../../components/RecipeIntro';
import { api } from '../../convex/_generated/api';
import Colors from '../../shared/Colors';
import RecipeIngredients from '../../components/RecipeIngredients';

export default function RecipeDetail() {

    const {recipeId} = useLocalSearchParams();
    console.log(recipeId);

    const recipeDetail = useQuery (api.Recipes.GetRecipeById,{
        id:recipeId || 'jd77adg3132713bzfwwxtesf1n7nf29x'
        // id:recipeId == undefined && 'jd77adg3132713bzfwwxtesf1n7nf29x'
    })
    console.log("recipeDetail" , recipeDetail)


    return (

        
      <View style={{
              padding:20,
              paddingTop: Platform.OS == 'ios' ? 40 : 30,
              backgroundColor:Colors.WHITE,
              height: '100%'
            }}>
             {/* Recipe Intro */}

                <RecipeIntro recipeDetail={recipeDetail}/>
             {/* Recipe Ingredient */}
                <RecipeIngredients recipeDetail={recipeDetail}/>
             {/* Cooking Steps */}
          </View>
    )
}
