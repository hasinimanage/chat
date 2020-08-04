import React from 'react';
import{SafeAreaView,Text} from 'react-native';
import { color } from "../../utility";


const Login=({navigation})=>{
    return(
        <SafeAreaView>
            <Text onPress={() => navigation.navigate('SignUp')}>Login</Text>
        </SafeAreaView>
    );
};

export default Login;