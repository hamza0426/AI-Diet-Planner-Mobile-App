import { Text, View,Image, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import React, { useContext } from 'react'
import Colors from '../shared/Colors'
import { CheckmarkSquare01Icon, SquareIcon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from "@hugeicons/react-native";
import { useMutation } from 'convex/react';
import { api } from '../convex/_generated/api';
import { RefreshDataContext } from './../context/RefreshDataContext';

export default function MealPlanCard( {mealPlanInfo } ) {

    const updateStatus = useMutation(api.MealPlan.updateStatus)
    const {refreshData, setRefreshData} = useContext(RefreshDataContext);
    const onCheck=async(status)=>{
        const result = await updateStatus({
            id:mealPlanInfo?.mealPlan?._id,
            status:status,
            calories:mealPlanInfo?.recipe?.jsonData?.calories
        })

        Alert.alert('Great!','Status Updated Successfully');
        setRefreshData(Date.now());
    }



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


            <View style={{
                display:'flex',
                flexDirection:'row',
                justifyContent:'space-between',
                alignItems:'center',
                gap:10,
                flex:1
            }}>
                <View>
                    <Text style={styles.mealTypeText}>{mealPlanInfo?.mealPlan?.mealType}</Text>
                    <Text style={styles.recipeName}>{mealPlanInfo?.recipe?.recipeName}</Text>
                    <Text style={styles.calories}> {mealPlanInfo?.recipe?.jsonData?.calories} Kcal</Text>
                </View>
                
                <View>
                    {mealPlanInfo?.mealPlan?.status!=true ?
                    <TouchableOpacity onPress={()=>onCheck(true)} color={Colors.Gray} >
                    <HugeiconsIcon icon={SquareIcon} />
                    </TouchableOpacity>
                    :
                    <TouchableOpacity onPress={()=>onCheck(false)} >
                    <HugeiconsIcon icon={CheckmarkSquare01Icon} color={Colors.Green} />
                    </TouchableOpacity>
                }
                </View> 
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
        color: Colors.Green
    }
})