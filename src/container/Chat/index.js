import React, {useLayoutEffect} from 'react';
import {View,Text,SafeAreaView,FlatList} from 'react-native';
import { color, globalStyle } from '../../utility';

const Chat = ({route,navigation}) => {
    const{params}=route;
    const {name,img,imgText,guessUserId,currentUserId}=params;
    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle:<Text>{name}</Text>,
            
        });
    },[navigation]);
    return(
        <SafeAreaView style={[globalStyle.flex1,{backgroundColor:color.BLACK}]}> 
         <FlatList
           data={[1,2,3]}
           keyExtractor ={(_, index)=> index.toString()}
           renderItem={(item)=>(
               <Text style={{color:color.WHITE}}>{name}</Text>
           )}
         />
        </SafeAreaView>
    );
};


export default Chat;