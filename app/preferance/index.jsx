import { Dumbbell01Icon, FemaleSymbolIcon, MaleSymbolIcon, PlusSignSquareIcon, WeightScaleIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react-native";
import React from "react";
import { Text, View ,StyleSheet} from "react-native";
import Input from "./../../components/shared/Input";
import Colors from "./../../shared/Colors";
import Button from './../../components/shared/Button'
export default function Preferance() {
  return (
    <View
      style={{
        padding: 20,
      }}
    >
      <Text
        style={{
          textAlign: "center",
          fontSize: 30,
          fontWeight: "bold",
          marginTop: 30,
        }}
      >
        Tell use about Yourself
      </Text>
      <Text
        style={{
          fontSize: 16,
          textAlign: "center",
          color: Colors.Gray,
        }}
      >
        this will help us to create a personalized diet plan for you
      </Text>

      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: 10,
        }}
      >
        <View style={{
            flex: 1,
          }}
        ><Input placeholder={"e,g 70"} label="Weight (kg)" />
        </View>

        <View style={{
            flex: 1,
          }}>
          <Input placeholder={"e,g 5.10"} label="Height (ft)" />
        </View>
      </View>

      <View style={{
        marginTop:20
      }}>
        <Text style={{
            fontWeight:'medium',
            fontSize:18
        }}>Gender</Text>

        <View style={{
            display:'flex',
            flexDirection:'row',
            gap:10
        }}>
            <View style={{
                flex:1,
                borderWidth:1,
                padding:15,
                borderColor:Colors.Gray,
                borderRadius:10,
                alignItems:'center'
            }}>
            <HugeiconsIcon icon={MaleSymbolIcon} size={40}
            color={Colors.BLUE}/>
            </View>
            <View style={{
                flex:1,
                borderWidth:1,
                padding:15,
                borderColor:Colors.Gray,
                borderRadius:10,
                alignItems:'center'
            }}>
            <HugeiconsIcon icon={FemaleSymbolIcon} size={40} color={Colors.PINK} />
            </View>
            <View style={{
                flex:1,
                borderWidth:1,
                padding:15,
                borderColor:Colors.Gray,
                borderRadius:10,
                alignItems:'center'
            }}>
            <Text style={{
                fontSize:18,
                fontWeight:'medium',
                alignItems:'center'
            }}>Others</Text>
            </View>
        </View>
        
        





      </View>

      <View>
        <Text style={{
          fontWeight:'medium',
          fontSize:15,
          marginTop:25
        }}>Whats Your Goal?</Text>

            <View style={styles.goalContainer}>
              <HugeiconsIcon icon={WeightScaleIcon} />
                <View>
                    <Text style={styles.goalText}>Weight Loss</Text>
                    <Text style={styles.goalSubText}>Reduce body fat and get leaner</Text>
                </View>
            </View>


            <View style={styles.goalContainer}>
              <HugeiconsIcon icon={Dumbbell01Icon} />
                <View>
                    <Text style={styles.goalText}>Muscle Gain</Text>
                    <Text style={styles.goalSubText}>Build Muscle and get Stronger</Text>
                </View>
            </View>


            <View style={styles.goalContainer}>
              <HugeiconsIcon icon={PlusSignSquareIcon} />
                <View>
                    <Text style={styles.goalText}>Weight Gain</Text>
                    <Text style={styles.goalSubText}>Increase Healthy Body Mass</Text>
                </View>
            </View>


          </View>
          <View style={{
            marginTop:25
          }}>
          <Button title={'Continue'}/>
          </View>
    </View>
  );
}

const styles = StyleSheet.create({
  goalContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    padding: 12,
    borderWidth: 1,
    borderColor: Colors.Gray,
    borderRadius:20,
    marginTop: 10,
  },
  goalText:{
    fontSize:15,
    fontWeight:'bold'
  },
  goalSubText:{
    color: Colors.Gray
  }

})
