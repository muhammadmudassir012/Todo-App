import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";
import {addDoc, getFirestore, collection, setDoc, onSnapshot, doc, deleteDoc, updateDoc } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyCOwargVcGjrO5KpN2XvNEdexhV2zK1Sm8",
    authDomain: "smit-authentication.firebaseapp.com",
    projectId: "smit-authentication",
    storageBucket: "smit-authentication.appspot.com",
    messagingSenderId: "900446899941",
    appId: "1:900446899941:web:241ecf4c2b7c0fc1fa0e0c",
    measurementId: "G-FH3FJNKHCG"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();

const semail = document.getElementById('semail'); 
const spass = document.getElementById('spass');
const sbtn = document.getElementById('btn');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const errorpara = document.getElementById('errorpara')



sbtn.addEventListener('click', ()=>{
  createUserWithEmailAndPassword(auth, semail.value, spass.value)
  .then(async(userCredential) => {
    
    const user = userCredential.user;
    
    console.log(user.uid)
    
    try {
      const docRef = await setDoc(doc(db, "users",user.uid), {
        Email: semail.value,
        Password: spass.value,
        first : fname.value,
        last : lname.value,
        userUID : user.uid
      });
      console.log("Document written with ID: ", user.uid  );
      window.location = 'signin.html'
    } catch (e) {
      console.log(e);
      // errorpara.innerText = "Error adding document: ", e;
      // setTimeout(() => {
        //     errorpara.innerHTML = "";
        // }, 3000);
      }
      
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = errorCode.slice(5).toUpperCase();
      const errMessage = errorMessage.replace(/-/g, " ")
      errorpara.innerText = errMessage;
      setTimeout(() => {
        errorpara.innerHTML = "";
      }, 3000);
    });    
  })
  
  const eye = document.getElementById('eye');
  if(eye){
    eye.addEventListener('click',()=>{
      if(spass.type == 'password'){
        spass.type = 'text'
        // eye.textContent = <i class="fa-regular fa-eye"></i>
        eye.innerHTML = '<i class="fa-regular fa-eye"></i>';

        
      }
      else{
        spass.type = 'password'
        // eye.textContent = <i id="eye" style="font-size: .8em;" class="fa-solid fa-eye-slash"></i>
        eye.innerHTML = '<i style="font-size: .8em;" class="fa-solid fa-eye-slash"></i>';
      }
  })
}    