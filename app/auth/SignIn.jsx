import { Image, Pressable, Text, View } from 'react-native'
import Input from '../../components/shared/Input'
import Button from '../../components/shared/Button'
export default function SignIn() {

    const onSignIn = () => {

    }



    return (
        <View style={{
            display: 'flex',
            alignItems: 'center',
            padding: 20,
        }}>
          <Image source={require('./../../assets/images/logo1.png')} 
                style={{
                  width: 100,
                  height:100,
                  marginTop:60,
                }}
                />
            <Text style={{
                fontSize: 25,
                fontWeight: 'bold',
            }}>Welcome back</Text>

            <View style={{
                 marginTop: 20,
                width: '100%',
            }}>     
                <Input placeholder={"Email"} />
                <Input placeholder={"Password"} password={true}/>
                
            </View>
           <View style={{
            marginTop: 15,
            width: '100%',
           }}>
           <Button title={'Sign In'} onPress={()=>onSignIn()}/>

            <Text style={{
                textAlign: 'center',
                marginTop: 15,
                fontSize: 16,
            }}>Don't have an Account </Text>
            
            <Pressable><Text style={{
                textAlign: 'center',
                marginTop: 5,
                fontSize: 16,
                fontWeight: 'bold'
            }}>Create New Account</Text></Pressable>
           </View>
        </View>
    )
}