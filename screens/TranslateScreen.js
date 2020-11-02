import React from "react";
import {Slider,Dimensions,KeyboardAvoidingView,View,Text,StyleSheet,SafeAreaView, TouchableOpacity,TextInput } from "react-native"
import Tts from "react-native-tts";
import {Card} from "react-native-elements"
import Carousel from "react-native-snap-carousel"

const heighttest = Dimensions.get('window').height
const widthtest = Dimensions.get("window").width

export default class TranslateScreen extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            carouselItems:[
               {lang:"en-US",display:"English (US)"},
               {lang:"ta-IN",display:"Tamil"},
               {lang:"ja-JP",display:"Japanese"},
               {lang:"hi-IN",display:"Hindi"},
               {lang:"es-ES_tradnl",display:"Spanish"},
               {lang:"de-DE",display:"German"},
            ],  
                speechRate : 0.5,
                speechPitch : 1 ,
                text: ""   
        }

        Tts.addEventListener("tts-start", event =>
          this.setState({ ttsStatus: "started" })
        );

        Tts.addEventListener("tts-finish", event =>
          this.setState({ ttsStatus: "finished" })
        );

        Tts.addEventListener("tts-cancel", event =>
          this.setState({ ttsStatus: "cancelled" })
        );
    
        Tts.setDefaultRate(this.state.speechRate);
        Tts.setDefaultPitch(this.state.speechPitch);

        Tts.getInitStatus().then(() => {
              this.initTts;
        }, (err) => {
            if (err.code === 'no_engine') {
                Tts.requestInstallEngine();
           }
         });
      }

      
    readText = async () => {
        Tts.stop();
        Tts.speak(this.state.text);
    };

    setSpeechRate = async rate => {
        await Tts.setDefaultRate(rate);
        this.setState({ speechRate: rate });
    };

    setSpeechPitch = async rate => {
        await Tts.setDefaultPitch(rate);
        this.setState({ speechPitch: rate });
    };

    

    _renderItem = ({ item, index }) =>{
        return(
          <TouchableOpacity onPress={()=>{Tts.setDefaultLanguage(item.lang);}} >
            <Card containerStyle={{borderWidth:StyleSheet.hairlineWidth,borderColor:"#161f3d",alignItems:"center",justifyContent:"center",height:"70%",width:"100%",backgroundColor:"#FFF",borderRadius:15}}>
                <Text style={{color:"#161f3d",fontWeight:"bold",fontSize:18,marginLeft:"5%",width:"100%"}}>
                    {item.display}
                </Text>
            </Card>
          </TouchableOpacity>
        )
    }

    
    render(){
        return(
                <KeyboardAvoidingView style={styles.container}>
                    <View style={{marginTop:"5%",height:"40%",width:"100%",alignItems:"center",backgroundColor:"#161f3d"}}>
                        <TextInput 
                        clearButtonMode="always" 
                        placeholder="Enter Text To Convert" 
                        placeholderTextColor="#FFF"
                        spellCheck={true} 
                        multiline={true} 
                        textAlignVertical="top"
                        selectionColor="#4A4C58"
                        onChangeText={text => this.setState({ text })}
                        value={this.state.text}
                        style={{color:"#FFF",backgroundColor:"#161f3d",borderRadius:10,height:"98%",width:"95%"}}/>

                    </View>
                    

                    <View style={{width:"100%",height:"50%",backgroundColor:"#FFF",borderTopLeftRadius:45,borderTopRightRadius:45}}>
                       
                    <View style={{width:"90%",alignItems:"center",height:"13%",marginTop:"8%",flexDirection:"row"}} >
                        <Text style={{marginLeft:"8%",color:"#4A4C58",fontSize:20,fontWeight:"bold",width:"18%",height:"50%"}}>Language</Text>
                        <TouchableOpacity onPress={this.readText} style={{marginLeft:"35%",justifyContent:"center",alignItems:"center",borderRadius:15,height:"80%",backgroundColor:"#161F3D",width:"30%"}}>
                            <Text style={{color:"#FFF",fontSize:15}}>Read It</Text>
                        </TouchableOpacity>
                    </View>
                       
                        <View style={{height:"23%",width:"100%",alignItems:"center",marginTop:"0%"}}>
                            <Carousel
                                data={this.state.carouselItems}
                                sliderWidth={500}
                                itemWidth={200}       
                                renderItem={this._renderItem} 
        
                                />
                        </View>
                        
                        <View >
                            <Text style={{marginLeft:"8%",color:"#161f3d",fontSize:20,fontWeight:"bold"}}>Speed Rate </Text>
                            <Slider
                                style={{
                                    height:"9%",
                                    width:"80%",
                                    marginTop:"3%",   
                                    marginLeft:"8%",     
                                }}
                                minimumValue={0.01}
                                maximumValue={0.99}
                                value={this.state.speechRate}
                                onSlidingComplete={this.setSpeechRate}
                                minimumTrackTintColor="#161f3d"
                                thumbTintColor="#161F3D"

                            />
                        </View>
                        <View>
                            <Text style={{marginLeft:"8%",color:"#161f3d",fontSize:20,fontWeight:"bold"}}>Pitch</Text>
                            <Slider
                                style={{
                                    height:"9%",
                                    width:"80%",
                                    marginTop:"3%",   
                                    marginLeft:"8%",     
                                }}
                                minimumValue={0.5}
                                maximumValue={2}
                                value={this.state.speechPitch}
                                onSlidingComplete={this.setSpeechPitch}
                                minimumTrackTintColor="#161f3d"
                                thumbTintColor="#161F3D"
                            />
                        </View>
                    </View>  
                   
                </KeyboardAvoidingView>
    
        )
    }
}

const styles= StyleSheet.create({
    container:{
        backgroundColor:"#161F3D",
        height:heighttest,
        width:widthtest,
    }
})

