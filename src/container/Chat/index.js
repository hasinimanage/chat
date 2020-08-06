import React, {useLayoutEffect} from 'react';
import {View,Text,SafeAreaView,FlatList} from 'react-native';
import { color, globalStyle,appStyle } from '../../utility';
import styles from './styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import{InputField} from '../../component'

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
           inverted
           data={[1,2,3]}
           keyExtractor ={(_, index)=> index.toString()}
           renderItem={(item)=>(
               <Text style={{color:color.WHITE}}>{name}</Text>
           )}
         />

         {/* Send Message*/}
          <View style={styles.sendMessageContainer}>
            <InputField
              placeholder="Type Here"
              numberOfLines={10}
              inputStyle={styles.input}
            />
            <View style={styles.sendBtnContainer}>
             <MaterialCommunityIcons
               name="camera"
               color={color.WHITE}
               size={40}

             />
             <MaterialCommunityIcons
               name="send-circle"
               color={color.WHITE}
               size={40}

             />
            </View>

          </View>
        </SafeAreaView>
    );
};


export default Chat;