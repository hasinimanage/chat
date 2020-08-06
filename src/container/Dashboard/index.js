import React, { useLayoutEffect,useContext, useState ,useEffect} from 'react';
import{ Alert,SafeAreaView,FlatList} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons';
import { color } from "../../utility";
import LogOutUser from '../../network/logout';
import { clearAsyncStorage } from '../../asyncStorage';
import { LOADING_START, LOADING_STOP } from '../../context/actions/type';
import firebase from '../../firebase/config';
import {uuid} from '../../utility/constants';
import {Profile,ShowUsers} from '../../component';
import {Store} from '../../context/store';






const Dashboard=({navigation})=>{
const globalState = useContext(Store);
const {dispatchLoaderAction} = globalState;

const [userDetail,setUserDetail] = useState ({
    id:'',
    name:'',
    ProfileImg:''
});

const [allUsers,setAllUsers] = useState([]);
const { profileImg, name } = userDetail;
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

    useEffect(() => {
        dispatchLoaderAction({
          type: LOADING_START,
        });
        try {
          firebase
            .database()
            .ref("users")
            .on("value", (dataSnapshot) => {
              let users = [];
              let currentUser = {
                id: "",
                name: "",
                profileImg: "",
              };
              dataSnapshot.forEach((child) => {
                if (uuid === child.val().uuid) {
                  currentUser.id = uuid;
                  currentUser.name = child.val().name;
                  currentUser.profileImg = child.val().profileImg;
                } else {
                  users.push({
                    id: child.val().uuid,
                    name: child.val().name,
                    profileImg: child.val().profileImg,
                  });
                }
              });
              setUserDetail(currentUser);
              setAllUsers(users);
              dispatchLoaderAction({
                type: LOADING_STOP,
              });
            });
        } catch (error) {
          alert(error);
          dispatchLoaderAction({
            type: LOADING_STOP,
          });
        }
      }, []);
     
      const selectPhotoTapped= ()=>{
          const options ={
              storageOptions:{
                  skipBackup:true
              }
          };

          ImagePicker.showImagePicker(options, (response) => {
            //console.log("Response = ", response);
      
            if (response.didCancel) {
              console.log("User cancel image picker");
            } else if (response.error) {
              console.log("Image Picker Error: ", response.error);
            // } else if (response.customButton) {
            //   console.log("User tapped custom button: ", response.customButton);
            // }
            } else {
              // Base 64 image:
              let source = "data:image/jpeg;base64," + response.data;
              dispatchLoaderAction({
                type: LOADING_START,
              });
              UpdateUser(uuid, source)
                .then(() => {
                  setUserDetail({
                    ...userDetail,
                    profileImg: source,
                  });
                  dispatchLoaderAction({
                    type: LOADING_STOP,
                  });
                })
                // .catch(() => {
                //   alert(err);
                //   dispatchLoaderAction({
                //     type: LOADING_STOP,
                //   });
                // });
            }
          });
        };

      

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
        <SafeAreaView style={[globalState.flex1,{backgroundColor:color.BLACK}]}>
            <FlatList
            alwaysBounceVertical={false}
            data={allUsers}
            keyExtractor={(_,index)=>index.toString()}
            ListHeaderComponent={<Profile img={profileImg} name={name}
            onEditImgTap={()=>selectPhotoTapped()}
            />}
            renderItem ={({item})=>(
                <ShowUsers name={item.name} img={item.profileImg}/>
            )}
    
            />
            
        </SafeAreaView>
    );
};

export default Dashboard;
