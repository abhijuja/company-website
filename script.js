window.onload=function(){

console.log("Website loaded")

}


// dark mode
function toggleDarkMode(){

document.body.classList.toggle("dark-mode")

}


// scroll to contact
function scrollContact(){

document.querySelector("#contact").scrollIntoView({
behavior:"smooth"
})

}


// form validation
function validateForm(){

let name=document.getElementById("name").value
let email=document.getElementById("email").value
let message=document.getElementById("message").value

if(name==="" || email==="" || message===""){

alert("Please fill all fields")

return false

}

alert("Message sent successfully!")

return true

}


// smooth nav scrolling
document.querySelectorAll("nav a").forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault()

document.querySelector(this.getAttribute("href")).scrollIntoView({

behavior:"smooth"

})

})

})