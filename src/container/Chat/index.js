import React, {useLayoutEffect,useState} from 'react';
import {View,Text,SafeAreaView,FlatList} from 'react-native';
import { color, globalStyle,appStyle } from '../../utility';
import styles from './styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import{InputField,ChatBox} from '../../component'

const Chat = ({route,navigation}) => {
    const{params}=route;
    const {name,img,imgText,guessUserId,currentUserId}=params;
    const [msgValue, setMsgValue] = useState('');
    const [messeges, setMesseges] = useState([]);
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
            <ChatBox
            msg={item.msg}
            userId={item.sendBy}
            img={item.img}
            onImgTap={() => imgTap(item.img)}
          />
           )}
         />

         {/* Send Message*/}
          <View style={styles.sendMessageContainer}>
            <InputField
              placeholder="Type Here"
              numberOfLines={10}
              inputStyle={styles.input}
              onChangeText={(text) => handleOnChange(text)}
            />
            <View style={styles.sendBtnContainer}>
             <MaterialCommunityIcons
               name="camera"
               color={color.WHITE}
               size={appStyle.fieldHeight}
               onPress={() => handleCamera()}

             />
             <MaterialCommunityIcons
               name="send-circle"
               color={color.WHITE}
               size={appStyle.fieldHeight}
               onPress={() => handleSend()}


             />
            </View>

          </View>
        </SafeAreaView>
    );
};


export default Chat;