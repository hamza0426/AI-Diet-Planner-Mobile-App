import { Fire02Icon, PlusSignCircleIcon,Dumbbell01Icon, TimeQuarter02Icon, ServingFoodIcon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from "@hugeicons/react-native";
import React from 'react';
import { ActivityIndicator, Image, Platform, Text, View,StyleSheet } from 'react-native';
import Colors from '../shared/Colors';

export default function RecipeIntro( {recipeDetail}) {
const RecipeJson = recipeDetail?.jsonData;



//loader for image 
if (!recipeDetail) {
    return (
        <View style={{ padding: 20, alignItems: 'center', justifyContent: 'center' }}>
            <ActivityIndicator size="large" />
            <Text>Loading recipe...</Text>
        </View>
    );
}
   
    return (
      <View >
           <Image source={{ uri: recipeDetail?.imageUrl}}
           style={{
                width: '100%',
                height: 200,
                borderRadius:15,
           }}/>
            
            <View style={{
                marginTop: 15,
                display:'flex',
                flexDirection: 'row',
                justifyContent: 'space-between'
            }}>
                <Text style={{ 
                     fontSize:15,
                     fontWeight:'bold',

                }}>{recipeDetail.recipeName }</Text>
                <HugeiconsIcon icon={PlusSignCircleIcon} size={25} color={Colors.PRIMARY} />
            </View>

            <Text style={{
                fontSize:14,
                marginTop:6,
                color:Colors.Gray,
                lineHeight:25,

            }}>{RecipeJson?.description}</Text>

            <View style={{
                marginTop: 15,
                display:"flex",
                flexDirection:'row',
                justifyContent:'space-between',
                gap:10
            }}>

                <View style={styles.propertiesContanier}>
                <HugeiconsIcon icon={Fire02Icon} color={Colors.PRIMARY} 
                size={22}/>
                <Text style={styles.subText}>Calories</Text>
                <Text style={styles.counts}>{RecipeJson?.calories}</Text>
                </View> 

                {/* <View style={styles.propertiesContanier}>
                <HugeiconsIcon icon={Dumbbell01Icon} color={Colors.PRIMARY} 
                size={22}/>
                <Text style={styles.subText}>Calories</Text>
                <Text style={styles.counts}>{RecipeJson?.category}</Text>
                </View>  */}

                <View style={styles.propertiesContanier}>
                <HugeiconsIcon icon={TimeQuarter02Icon} color={Colors.PRIMARY} 
                size={22}/>
                <Text style={styles.subText}>Time</Text>
                <Text style={styles.counts}>{RecipeJson?.cookTime}</Text>
                </View> 

                <View style={styles.propertiesContanier}>
                <HugeiconsIcon icon={ServingFoodIcon} color={Colors.PRIMARY} 
                size={22}/>
                <Text style={styles.subText}>Serve</Text>
                <Text style={styles.counts}>{RecipeJson?.serveTo}</Text>
                </View>


            </View> 



          </View>
    )
}

const styles = StyleSheet.create({
    iconBg:{
        padding:6
    },
    propertiesContanier:{
        display:'flex',
        alignItems:'center',
        backgroundColor:'#fbf5ff',
        padding:6,
        borderRadius:10,
        flex:1,
    },
    subText:{
        fontSize:15,
        // fontFamily:'Trebuchet MS', 
    },
    counts:{
        fontSize:17,
        color:Colors.PRIMARY,
        fontWeight:'bold'
    }
})


















// deepseek Sol
// import React from 'react';
// import { Image, Platform, Text, View, ActivityIndicator } from 'react-native';

// export default function RecipeIntro({ recipeDetail }) {
//     // Ensure proper URL formatting
//     const imageUrl = recipeDetail?.imageUrl?.replace('http://', 'https://');
    
//     console.log('Current image URL:', imageUrl); // Debugging

//     if (!recipeDetail) {
//         return (
//             <View style={{ padding: 20, alignItems: 'center', justifyContent: 'center' }}>
//                 <ActivityIndicator size="large" />
//                 <Text>Loading recipe...</Text>
//             </View>
//         );
//     }

//     return (
//         <View style={{
//             padding: 20,
//             paddingTop: Platform.OS == 'ios' ? 40 : 30
//         }}>
//             {imageUrl ? (
//                 <Image  
//                     source={{ uri: imageUrl }}
//                     style={{
//                         width: '100%',
//                         height: 200,
//                         borderRadius: 15,
//                     }}
//                     resizeMode="cover"
//                     onError={(e) => console.log('Image loading error:', e.nativeEvent.error)}
//                     onLoad={() => console.log('Image loaded successfully')}
//                 />
//             ) : (
//                 <View style={{
//                     width: '100%',
//                     height: 200,
//                     borderRadius: 15,
//                     backgroundColor: '#f0f0f0',
//                     justifyContent: 'center',
//                     alignItems: 'center'
//                 }}>
//                     <Text>No image available</Text>
//                 </View>
//             )}
            
//             <Text style={{ marginTop: 10 }}>{recipeDetail.recipeName || 'Recipe'}</Text>
//         </View>
//     );
// }