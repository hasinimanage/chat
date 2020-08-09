// import React, { useEffect } from 'react';
// import {View,Text} from 'react-native';
// import {Logo} from '../../component';
// import {globalStyle,color} from '../../utility';
// import { getAsyncStorage, keys } from '../../asyncStorage';
// import { setUniqueValue } from '../../utility/constants';

// const Splash = ({navigation}) => {
//     useEffect(() => {
//         const redirect = setTimeout (() =>{
//             getAsyncStorage(keys.uuid)
//              .then((uuid) => {
//                  if(uuid){
//                      setUniqueValue(uuid);
//                      navigation.replace('Dashboard');
//                  }
//                  else{
//                      navigation.replace('Login');
//                  }

//              })
//              .catch((err) => {
//                  console.log(err);
//                  navigation.replace('Login');
//              });
//         }, 3000);
//         return()=>clearTimeout(redirect);
//     }, [navigation]);

//     return(
//         <View
//            style={[globalStyle.containerCentered,{backgroundColor:color.BLACK}]
//         }>
//          <Logo />
//          <Text>Index-17001765</Text>
//          <Text>M.M.H. Tharushika</Text>
//         </View>
//     );
// };

// export default Splash;
import React, {useEffect} from 'react';
import {View,Text} from 'react-native';
import {globalStyle, appStyle, color} from '../../utility';
import {getAsyncStorage, keys} from '../../asyncStorage';
import {setUniqueValue} from '../../utility/constants';
import {Logo} from '../../component';

export default ({navigation}) => {
  useEffect(() => {
    const redirect = setTimeout(() => {
      getAsyncStorage(keys.uuid)
        .then((uuid) => {
          if (uuid) {
            setUniqueValue(uuid);
            navigation.replace('Dashboard');
          } else {
            navigation.replace('Login');
          }
        })
        .catch((err) => {
          console.log(err);
          navigation.replace('Login');
        });
    }, 5000);
    return () => clearTimeout(redirect);
  }, [navigation]);
  return (
    <View
      style={[globalStyle.containerCentered, {backgroundColor: color.BLACK}]}>
     
      <Logo />
      <Text></Text>
      <Text style=
      {{
          fontSize:30,
          padding:30,
          fontWeight:"bold",
          color:color.WHITE,

      }}
      >M.M.H. Tharushika</Text>
      <Text style={{
          fontSize:30,
          padding:30,

          fontWeight:"bold",
          color:color.WHITE,

      }}>17001765</Text>

    </View>
  );
};
