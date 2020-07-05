import React from "react";
import { Dimensions,StatusBar,View,Text,StyleSheet,SafeAreaView, Image,TouchableOpacity} from "react-native"
import {Card} from "react-native-elements"
import Carousel from "react-native-snap-carousel"
import LottieView  from "lottie-react-native"
import Icon from "react-native-vector-icons/Ionicons"


export default class HomeScreen extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            carouselItems:[
                {
                    title:"Translate",
                    color:"#e85d04",
                    uri:require("../Animations/SettingInside.json"),
                    thing:"Translate"
                    
                },
                {
                    title:"Devoloper",
                    color:"#e85d04",
                    uri:require("../Animations/about_profile.json"),
                    thing:"About"
                }
            ],
            
        }
    }

    onPress_translate_page_navigation_button=()=>{
        this.props.navigation.navigate("Translate")
    }


    _renderItem = ({ item, index }) =>{

        this.OnPresstesy=()=>{
            this.props.navigation.navigate(item.thing)
        }
        return(
            <TouchableOpacity onPress={this.OnPresstesy}>
            <Card containerStyle={{height:"90%",width:"100%",backgroundColor:"#FFF",borderRadius:30}}>
                <View style={{height:"80%",width:"100%"}}>
                    <LottieView 
                        source={item.uri}
                        autoPlay={true}
                        loop={true}
                    />
                </View>
                <Text style={{color:`${item.color}`,fontWeight:"bold",fontSize:18,marginLeft:"5%",width:"100%"}}>
                    {item.title}
                </Text>
            </Card>
            </TouchableOpacity>
        )
    }
      
    render(){
        return(
            <SafeAreaView style={styles.container}>               
               <StatusBar barStyle="dark-content" backgroundColor="white"/>
                <View style={{height:"30%",width:"100%",alignItems:"center"}}>
                    <LottieView 
                        source={require("../Animations/orange_logo.json")}
                        autoPlay={true}
                        loop={false}   
                    />
                </View>
                <View style={{height:"10%",width:"100%",alignItems:"flex-start"}}>
                    <Text style={styles.Welcome_Text1}>Text Convertion</Text>
                    <Text style={styles.Welcome_Text2}>Made Simple.</Text>
                </View>
                <View style={{height:"30%",width:"100%",alignItems:"flex-start",marginTop:"5%"}}>
                    <Carousel
                        data={this.state.carouselItems}
                        sliderWidth={500}
                        itemWidth={250}
                        renderItem={this._renderItem} 
                        alwaysBounceHorizontal={true}
                        alwaysBounceVertical={true}
                        
                        />
                </View>
                    <TouchableOpacity style={styles.translate_page_navigation_button} onPress={this.onPress_translate_page_navigation_button}>
                        <Text style={{color:"#FFF",fontSize:18,fontWeight:"bold",marginLeft:"12%",height:"35%",width:"50%"}}>Text To Speech Converter </Text>
                        <Icon name="ios-arrow-forward" size={24} color="#FFF" style={{marginLeft:"20%"}}/>
                    </TouchableOpacity>
                
            </SafeAreaView>
        )
    }
}

const styles= StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#FFF",
        alignItems:"center"
    },
    Welcome_Text1:{
        fontSize:26,
        color:"#4A4C58",
        fontWeight:"bold",
        marginLeft:"10%"
    },
    Welcome_Text2:{
        fontSize:23,
        fontWeight:"bold",
        color:"#4A4C58",
        marginLeft:"10%"
    },
    translate_page_navigation_button:{
        borderRadius:20,
        backgroundColor:"orange",
        width:"90%",
        height:"10%",
        justifyContent:"flex-start",
        flexDirection:'row',
        alignItems:"center",
        marginTop:"18%"
    },
})