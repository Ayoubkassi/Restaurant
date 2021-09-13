import * as firebase from 'firebase';

export const loginRequest = (email , password) => {
    firebase.auth().signInWithEmailAndPassword(email,password);
}



// const [isAuthenticated , setIsAuthenticated] = useState(false);
//
// useEffect(()=>{
//   setTimeout(() => {
//   firebase.auth().signInWithEmailAndPassword("email","password")
//     .then((user) => {
//         setIsAuthenticated(true);
//     }).catch((err) => {
//       console.log(err);
//     })
//   }, 2000
//   );
// },[]);
