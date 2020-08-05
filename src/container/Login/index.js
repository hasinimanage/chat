import React from 'react';
import{SafeAreaView,Text,View} from 'react-native';
import {globalStyle,color} from '../../utility';
import {Logo,InputField,RoundCornerButton} from '../../component';


const Login=({navigation})=>{
    return(
        <SafeAreaView style={[globalStyle.flex1, {backgroundColor:color.BLACK}]}>
        
            <View style={[globalStyle.containerCentered]}>
              <Logo />
            </View>

            <View style={[globalStyle.flex2, globalStyle.sectionCentered]}>
                 <InputField placeholder="Enter email"/>
                 <InputField placeholder="Enter password" secureTextEntry={true}/>
                 <RoundCornerButton title="Login" />
                 <Text
                  style={{
                      fontSize:20,
                      fontWeight:'bold',
                      color:color.LIGHT_GREEN,
                  }}>
                   Sign Up
                  </Text>



              
            </View>
        
        </SafeAreaView>
    );
};

export default Login;