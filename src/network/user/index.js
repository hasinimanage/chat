import firebase from '../../firebase/config';

 export const AddUser =async(name,email,uid,profileImg) => {
    try {
        //const userName = email.toString().substring(0,email.indexOf('@'));
        return await firebase
        .database()
        .ref('users/'+uid)
        .set({
            name: name,
            email: email,
            uuid: uid,
            profileImg:profileImg,
        }).then(()=>{
            console.log("user added to the database");
        });
    } catch (error) {
        return error;
    }
};
