function register(){

let email = document.getElementById("email").value
let password = document.getElementById("password").value

auth.createUserWithEmailAndPassword(email,password)

.then((userCredential)=>{

let uid = userCredential.user.uid

db.collection("users").doc(uid).set({

email: email,
balance: 0

})

alert("สมัครสมาชิกสำเร็จ")

})

.catch((error)=>{

alert(error.message)

})

}


function login(){

let email = document.getElementById("email").value
let password = document.getElementById("password").value

auth.signInWithEmailAndPassword(email,password)

.then(()=>{

alert("เข้าสู่ระบบสำเร็จ")

window.location.href = "index.html"

})

.catch((error)=>{

alert(error.message)

})

}