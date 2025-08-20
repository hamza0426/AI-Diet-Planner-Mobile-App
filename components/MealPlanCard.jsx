import { Text, View,Image, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '../shared/Colors'

export default function MealPlanCard( {mealPlanInfo} ) {
    return (
      <View style={{
        padding:10,
        display:'flex',
        flexDirection:'row',
        gap:10,
        backgroundColor:Colors.WHITE,
        borderRadius:15,
        marginTop:10

      }}>
            <Image source={{uri:mealPlanInfo?.recipe?.imageUrl}}
            style={{
                width:70,
                height:70,
                borderRadius:15
            }}/>
            <View>
                <Text style={styles.mealTypeText}>{mealPlanInfo?.mealPlan?.mealType}</Text>
                <Text style={styles.recipeName}>{mealPlanInfo?.recipe?.recipeName}</Text>
                <Text> {mealPlanInfo?.recipe?.jsonData?.calories} Kcal</Text>
            </View>


          </View>
    )
}


const styles = StyleSheet.create({
    mealTypeText:{
        backgroundColor:Colors.SECONDARY,
        color:Colors.PRIMARY,
        padding:1,
        paddingHorizontal:10,
        borderRadius:99,
        flexWrap: 'wrap',
        width:90,
        textAlign:'center',

    },
    recipeName:{
        fontSize:15,
        fontWeight:'bold',
        marginBottom:5,
        marginTop:5,

    },

    calories:{
        fontSize:12,
        fontWeight:'500',
        // marginTop:7,
        color: Colors.BLUE
    }
})