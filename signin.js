import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getAuth,signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";


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
const auth = getAuth(app);

let lbtn = document.getElementById('btn-1');
let lemail = document.getElementById("lemail");
let lpass = document.getElementById("lpass");
let errorpara = document.getElementById('errorpara')


lbtn.addEventListener('click',()=>{
  signInWithEmailAndPassword(auth, lemail.value, lpass.value)
.then((userCredential) => {
const user = userCredential.user;
localStorage.setItem('userUID', user.uid)
location.href = '../todos.html'
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


if(eye){
  eye.addEventListener('click',()=>{
    if(lpass.type == 'password'){
      lpass.type = 'text'
    }
    else{
      lpass.type = 'password'
    }
  })
}
