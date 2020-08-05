import React from 'react';
import{SafeAreaView,Text,View} from 'react-native';
import {globalStyle,color} from '../../utility';
import {Logo} from '../../component';


const Login=({navigation})=>{
    return(
        <SafeAreaView style={[globalStyle.flex1, {backgroundColor:color.BLACK}]}>
        
            <View style={[globalStyle.containerCentered]}>
              <Logo />
            </View>
        
        </SafeAreaView>
    );
};

export default Login;