import firebase from '../../firebase/config';

const signUpRequest =async(email,password) => {
    console.log("firebase auth in signup"+firebase.auth())
    try {
        return await firebase.auth().createUserWithEmailAndPassword(email,password)
        .then(()=>{
            console.log("user added successfully");

        })
        .catch((error)=>{
            console.log(error);

        });
    } catch (error) {
        return error;
    }
};

export default signUpRequest;