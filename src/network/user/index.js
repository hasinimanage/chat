import firebase from '../../firebase/config';

//  export const AddUser =async(name,email,uid,profileImg) => {
//     try {
//         //const userName = email.toString().substring(0,email.indexOf('@'));
//         return await firebase
//         .database()
//         .ref('users/'+uid)
//         .set({
//             name: name,
//             email: email,
//             uuid: uid,
//             profileImg:profileImg,
//         }).then(()=>{
//             console.log("user added to the database");
//          });
//     } catch (error) {
//         return (error).then(()=>{
//             console.log("hariyannko redda");
//     });
// }
//  };

export const AddUser = async (name, email, uid, profileImg) => {
    try {
      return await firebase
        .database()
        .ref("users/" + uid)
        .set({
          name: name,
          email: email,
          uuid: uid,
          profileImg: profileImg,
        });
        //console.log("fffffffff");

        
    } catch (error) {
        
            console.log("mona magulkda oii");
     
      return error;
      
    }
      
      
    };


export const UpdateUser = async (uuid,imgSource) => {
    try{
        return await firebase
        .database()
        .ref('users/'+uuid)
        .update({
            profileImg:imgSource,
        });
    } catch(error){
        return error;
    }
};

