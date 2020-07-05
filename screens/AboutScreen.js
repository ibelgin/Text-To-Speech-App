import React from "react";
import { Linking,View,Text,StyleSheet,SafeAreaView ,TouchableOpacity} from "react-native"
import LottieView from "lottie-react-native";

export default class AboutScreen extends React.Component{

    onPressInstagram=()=>{
        Linking.openURL("https://www.instagram.com/belgin_android")
    }

    onPressGithub=()=>{
        Linking.openURL("https://github.com/Belgin-Android")
    }
    render(){
        return(
            <SafeAreaView style={styles.container}>
                <View style={{height:"40%",width:"100%"}}>
                    <LottieView
                        source={require("../Animations/About_Screen_Devoloper.json")}
                        autoPlay={true}
                        loop={true}
                    />
                </View>
               <View style={{height:"20%",width:"100%",flexDirection:"row"}}>
                    <View style={{height:"100%",width:"30%"}}>
                        <LottieView
                            source={require("../Animations/react.json")}
                            autoPlay={true}
                            loop={false}
                        />         
                    </View>
                        <View style={{height:"100%",width:"70%"}}>
                            <Text style={{color:"#4A4C58",fontWeight:"bold",fontSize:18,marginTop:"10%"}}>Coded By Belgin</Text>
                            <Text style={{color:"#4A4C58",fontSize:18,fontWeight:"bold"}}>17 Years Old</Text>
                            <Text style={{color:"#4A4C58",fontSize:18,fontWeight:"bold"}}>Study Project</Text>
                        </View>               
                    
               </View>
               <View style={{alignItems:"center",marginLeft:"10%",height:"18%",width:"90%",flexDirection:"row"}}>
                    <TouchableOpacity style={{height:"100%",width:"30%"}} onPress={this.onPressGithub}>
                    <LottieView
                        source={require("../Animations/github.json")}
                        autoPlay={true}
                        loop={true}
                    />
                    </TouchableOpacity>
                    <TouchableOpacity style={{height:"50%",width:"30%"}} onPress={this.onPressInstagram}>
                    <LottieView
                        source={require("../Animations/instgram.json")}
                        autoPlay={true}
                        loop={false}
                    />
                    </TouchableOpacity>
               </View>

            </SafeAreaView>
        )
    }
}

const styles= StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#FFF"
    },
    Description:{
        fontSize:24,
        fontWeight:"bold",
        color:"#4A4C58",
        marginLeft:"10%",
        fontStyle:'italic'
    }
})