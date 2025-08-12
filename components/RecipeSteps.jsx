import { FlatList, Text, View } from 'react-native'
import React from 'react'
import Colors from '../shared/Colors';

export default function RecipeSteps({ recipeDetail }) {
    const steps = (recipeDetail?.jsonData)?.steps;
    return (
      <View style={{
        marginTop:30,
      }}>
            <Text style={{
              fontSize:16,
              fontWeight:'bold',

            }}>Directions:</Text>

            <FlatList 
            data={steps}
            renderItem={({item,index}) =>(
                <View style={{
                    display:'flex',
                    flexDirection:'row',
                    gap:10,
                    marginTop:10,
                    padding:10,
                    flex:1,
                    alignItems:'flex-start',
                    borderWidth:0.4,
                    borderRadius:15,
                    backgroundColor:Colors.SECONDARY,
                }}>
                    <Text style={{
                        fontSize:13,
                        backgroundColor:Colors.PRIMARY,
                        padding:10,
                        borderRadius:99,
                        paddingHorizontal:15,
                        color:Colors.WHITE,
                        fontWeight:'600'
                    }}>{index + 1}</Text>

                    <Text style={{
                        fontSize:13,
                        flex:1,
                        flexShrink:1,
                    }}>{item}</Text>
                </View>
                )}
            />


      </View>
    )
}
