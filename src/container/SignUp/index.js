import React from 'react';
import{View,Text} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { color } from "../../utility";


const SignUp=({navigation})=>{
    return(
        <SafeAreaView>
            <Text onPress={() => navigation.navigate('Dashboard')}>SignUp</Text>
        </SafeAreaView>
    );
};

export default SignUp;