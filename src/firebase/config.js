import Firebase  from 'firebase';


const firebaseConfig={
    apiKey:'AIzaSyB25cZWjZLZMWBizsr7LpgOS9IL4Ueq8g0 ',
    databaseURL:'https://chatapp-1e2f0.firebaseio.com/',
    projectId:'chatapp-1e2f0',
    appId:'1:656113712478:android:38852061aa7b26096ba3cf',
};
//console.log("Firebase.apps.length"+Firebase.apps.length);
export default !Firebase.apps.length ? Firebase.initializeApp(firebaseConfig) : Firebase.app();
//console.log("Firebase.apps.length2"+Firebase.apps.length);
// export default Firebase.initializeApp(firebaseConfig);