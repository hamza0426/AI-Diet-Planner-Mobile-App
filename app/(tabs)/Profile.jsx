import { FlatList, Image, Platform, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext } from 'react'
import { AnalyticsUpIcon, CookBookIcon, CovidInfoIcon, LoginSquare02Icon, ServingFoodIcon, WalletAdd01Icon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from "@hugeicons/react-native";
import Colors from '../../shared/Colors';
import { UserContext } from '../../context/UserContext';
import { useRouter } from 'expo-router';
import {auth} from './../../services/FirebaseConfig'
import { signOut } from 'firebase/auth';
const MenuOptions = [
  {
    title: 'My Progress',
    icon: AnalyticsUpIcon,
    path:'/(tabs)/Progress'
  },
  {
    title: 'Explore Recipes',
    icon: CookBookIcon,
    path:'/(tabs)/Meals'
  },
  {
    title: 'Ai Recipes',
    icon: ServingFoodIcon,
    path:'/generate-ai-recipe'
  },
  // {
  //   title: 'Billing',
  //   icon: WalletAdd01Icon,
  //   path:'/billing'
  // },
  {
    title: 'About Us',
    icon: CovidInfoIcon,
    path:'/About'
  },
  {
    title: 'Logout',
    icon: LoginSquare02Icon,
    path:'logout'
  },
]

export default function Profile() {
  const {user, setUser} = useContext(UserContext)
  const router = useRouter();

  const onMenuOptionClick=(menu)=>{
    if(menu.path == 'logout') {
      signOut(auth).then(()=>{
        console.log('SIGNOUT');
        setUser(null);
        router.replace('/')
      })
      return;
    }
    router.push(menu?.path)
  }
    return (
      <View style={{
              padding:20,
              paddingTop:Platform.OS == "ios" ? 40 : 25
         }}>
            <Text style={{
              fontSize:20,
              fontWeight:"bold",
            }}>Profile</Text>

            <View style={{
              display:"flex",
              alignItems:"center",
              marginTop:15
            }}>
            <Image source={require("./../../assets/images/profile.png")}
                   style={{
                     width: 40,
                     height: 40,
                     borderRadius: 99,
                     borderColor:Colors.BLUE,
                   }}
                 />

                 <Text style={{
                  fontSize:20,
                  fontWeight:'bold',  
                  marginTop:10,                
                 }}>
                  {user?.name}
                 </Text>

                 <Text style={{
                  fontSize:16,
                  color: Colors.Gray,
                  marginTop:5,
                 }}>
                  {user?.email}
                  </Text>
              </View>

              <FlatList
              data={MenuOptions}
              style={{
                marginTop: 20
              }}
              renderItem={({item,index})=>(

                <TouchableOpacity 
                onPress={()=>onMenuOptionClick(item)}
                style={{
                  display:'flex',
                  flexDirection:'row',
                  gap:6,
                  alignItems:'center',
                  padding:15,
                  borderWidth:0.2,
                  marginTop:5,
                  borderRadius:15,
                  backgroundColor:Colors.WHITE,
                  elevation:1,
                }}>
                  <HugeiconsIcon icon={item.icon} size={30} color={Colors.PRIMARY}/>
                  <Text style={{
                    fontSize:20,
                    fontWeight: '300'
                  }}>{item.title}</Text>
                </TouchableOpacity>
    )}/>
          </View>
    )
}
