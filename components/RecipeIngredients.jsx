import React from 'react';
import { FlatList, Text, View } from 'react-native';
import Colors from '../shared/Colors';

export default function RecipeIngredients({recipeDetail}) {
  const ingrdients = (recipeDetail?.jsonData)?.ingredients;
  console.log(ingrdients)
    return (
      <View style={{
        marginTop:15
      }}>
        <View style={{
          display:'flex',
          flexDirection:'row',
          justifyContent:'space-between',
          marginBottom:10,
        }}>
            <Text style={{
              fontSize:15,
              fontWeight:'bold',

            }}>Ingredients</Text>
              <Text style={{
              fontSize:15,
            }}>{ingrdients?.length} items</Text>
          </View>

          <FlatList
          data={ingrdients}
          renderItem={({item,index})=>(

              <View style={{
                marginTop:7,
                display:'flex',
                flexDirection:'row',
                justifyContent:'space-between',
                alignItems:'center',
                backgroundColor:Colors.green,
                borderRadius:10,
                

              }}>
                  <View style={{
                    display:'flex',
                    flexDirection:'row',
                    alignItems:'center',
                    gap:5
                  }}>
                    <Text style={{
                      padding:4,
                      fontSize:18,
                      backgroundColor:Colors.SECONDARY,
                      borderRadius:99,
                    }}>{item?.icon}</Text>

                    <Text style={{
                      fontSize:14,
                      fontWeight:'500'
                    }}>{item?.ingredient}</Text>
                  </View>

                  <Text style={{
                    color:Colors.Gray,
                    fontSize:13,

                  }}>{item?.quantity}</Text>
              </View>
          )}/>
          
          
          
          
          
          </View>
    )
}
