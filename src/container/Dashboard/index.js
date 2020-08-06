import React, { useLayoutEffect } from 'react';
import{View,Text, Alert} from 'react-native';
import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons';
import { color } from "../../utility";
import LogOutUser from '../../network/logout';
import { clearAsyncStorage } from '../../asyncStorage';



const Dashboard=({navigation})=>{
    useLayoutEffect(() =>{
        navigation.setOptions({
            headerRight: () => (
                <SimpleLineIcon 
                   name="logout"
                   size={26}
                   color={{right:10}}
                   onPress={() =>
                    Alert.alert(
                        'Logout',
                        'Are you sure to log out',
                        [
                            {

                                text:'Yes',
                                onPress:() => logout(),


                            },
                            {
                                text: 'No'
                            }

                        ],{
                            cancelable:false
                        }
                    )
                }
                  
                ></SimpleLineIcon>

            ),
        });
    }, [navigation]);

    // *logout
    const logout= () =>{
        LogOutUser()
        .then(()=>{
            clearAsyncStorage()
            .then(()=>{
                navigation.replace('Login');
            })
            .catch((err)=>alert(err));
        })
        .catch((err)=>alert(err));
    }



    return(
        <View>
            <Text>Dashboard</Text>
        </View>
    );
};

export default Dashboard;
