import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { addDoc, getFirestore, collection, setDoc, onSnapshot, doc, deleteDoc, updateDoc } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";

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

const todoinp = document.getElementById('todo')
const getul = document.getElementById('getul')
const ids = [];
const userid = localStorage.getItem('userUID') || null;

// Make sure userid is available before accessing Firestore
if (!userid) {
  console.error("No userID found in localStorage");
}

// Function to add new todo
window.gettodo = async function () {
  if (!userid) {
    console.error("User is not authenticated. Cannot add todos.");
    return;
  }

  try {
    const docRef = await addDoc(collection(db, `users/${userid}/todos`), {
      Todos: todoinp.value,
      Time: new Date().toLocaleString(),
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }

  todoinp.value = '';
}

// Function to get todos in real-time
function getData() {
  if (!userid) {
    console.error("User is not authenticated. Cannot fetch todos.");
    return;
  }

  onSnapshot(collection(db, `users/${userid}/todos`), (data) => {
    data.docChanges().forEach((newData) => {
      ids.push(newData.doc.id);
      
      if (newData.type == 'removed') {
        let del = document.getElementById(newData.doc.id);
        if (del) {
          del.remove();
        }
      } else if (newData.type == 'added') {
        console.log(newData.doc.data());
        getul.innerHTML += `<li id=${newData.doc.id}>${newData.doc.data().Todos} <br>(${newData.doc.data().Time})<button id="delete-btn" onclick="deltodo('${newData.doc.id}')">Delete</button><button id="edit-btn" onclick="edittodo(this,'${newData.doc.id}')">Edit</button></li>`;
      }
    });
  });
}

getData();

window.getData = getData;

// Function to delete a todo
window.deltodo = async function (id) {
  if (!userid) {
    console.error("User is not authenticated. Cannot delete todos.");
    return;
  }

  await deleteDoc(doc(db, `users/${userid}/todos`, id));
}

// Function to edit a todo
window.edittodo = async function (e, id) {
  const editval = prompt('Enter Edit Value');
  // const editval = swal({
  //   title: "Edit Todo",
  //   text: "Enter the new value for this todo:",
  //   content: "input",  // SweetAlert input
  //   buttons: true,
  // })
  if (editval) {
    e.parentNode.firstChild.nodeValue = editval;
    await updateDoc(doc(db, `users/${userid}/todos`, id), {
      Todos: editval,
      Time: new Date().toLocaleString(),
    });
  }
}

// Function to delete all todos
window.deletetodo = async function () {
  getul.innerHTML = '';
  console.log(ids);
  let array = [];

  for (var i = 0; i < ids.length; i++) {
    array.push(await deleteDoc(doc(db, `users/${userid}/todos`, ids[i])));
  }

  Promise.all(array)
    .then(() => console.log('Data Deleted'))
    .catch((err) => console.log(err));
}

window.gettodo = gettodo;
