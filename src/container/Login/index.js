import React from 'react';
import{SafeAreaView,Text} from 'react-native';
//import { color } from "../../utility";
import {globalStyle,color} from '../../utility';


const Login=({navigation})=>{
    return(
        <SafeAreaView style={[globalStyle.flex1,{backgroundColor:color.BLACK}]}>
            <Text onPress={() => navigation.navigate('SignUp')}>Login</Text>
        </SafeAreaView>
    );
};

export default Login;