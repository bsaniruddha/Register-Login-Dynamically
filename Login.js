let body = document.querySelector("body");
// body___________
body.style.backgroundColor="white";
body.style.margin="0px"
body.style.padding="0px";
body.style.display="flex";
body.style.justifyContent="center";
body.style.alignItems="center";
body.style.display="flex";
body.style.justifyContent="center";
body.style.alignItems="center";
body.style.width="100%";
body.style.height="100vh";
body.style.position="fixed";

let form = document.createElement("form");
form.style.height="400px";
form.style.width="400px";
form.id="loginform";
body.prepend(form);
form.style.display="flex";
form.style.flexDirection="column";
form.style.justifyContent="center";
form.style.alignItems="center";
form.style.border="1px solid black"
form.style.boxShadow="1px 1px 10px gray";   


let heading = document.createElement("h1");
heading.innerText="Login";
form.prepend(heading);

// input for username_____
let input = document.createElement("input");
form.append(input);
input.style.backgrougcolor = "black";
input.type="text";
input.placeholder="Username";
input.style.width="300px";
input.style.height="30px";
input.style.margin="20px";
input.style.border="2px solid black";


// inout for pasword_________
let input2= document.createElement("input");
form.append(input2);
input2.style.backgroudcolor = "black ";
input2.type="password";
input2.placeholder="Password";
input2.style.width="300px";
input2.style.height="30px";
input2.style.margin="20px";
input2.style.border="2px solid black";

// submit button____________
let submitBtn = document.createElement("button");
form.append(submitBtn);
submitBtn.style.backgroudcolor = "Red";
submitBtn.innerText="Submit";
submitBtn.innerText="Click me";
submitBtn.style.margin="20px"
submitBtn.style.border="2px solid black";
submitBtn.style.padding="10px";

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const entereduser = input.value;
    const enteredpassword = input2.value;


    const users = JSON.parse(localStorage.getItem("user")) || []; 
    const user = users.find(
        (val) => val.email === entereduser && val.password === enteredpassword
    );

    if (user) {
        alert("Login Success");
        window.open("home.html")
    } else {
        alert("Invalid Username or Password");
    }
});
