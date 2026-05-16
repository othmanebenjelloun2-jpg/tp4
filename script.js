const inputname = document.getElementById("name");
const inputemail = document.getElementById("email");
const inputpassword = document.getElementById("password");
const inputage = document.getElementById("age");
const submitbtn = document.getElementById("submitbtn");



console.log(inputname);
console.log(inputemail);
console.log(inputpassword);
console.log(inputage);
console.log(submitbtn);

submitbtn.addEventListener("click", function(event){
    event.preventDefault();
    console.log("Button clicked");
    console.log("Name: " + inputname.value);
    console.log("Email: " + inputemail.value);
    console.log("Password: " + inputpassword.value);
    console.log("Age: " + inputage.value);


    alert("Name: " + inputname.value + "\nEmail: " + inputemail.value + "\nPassword: " + inputpassword.value + "\nAge: " + inputage.value); 
});