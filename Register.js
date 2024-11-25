let body = document.querySelector('body');
body.style.display="flex";
body.style.justifyContent="center";
body.style.alignItems="center";
body.style.width="100%";
body.style.height="100vh";
body.style.position="fixed";

// creation of input tags     
let form = document.createElement('form');
let ename = document.createElement('input');
let email = document.createElement('input');
let phone = document.createElement('input');
let password = document.createElement('input');
let compassword = document.createElement('input');
let submit = document.createElement('button');
let heading = document.createElement('h1');


// setting attributes for input tags
body.append(form);
form.append(ename);
form.append(email);
form.append(phone);
form.append(password);
form.append(compassword);
form.append(submit);
form.prepend(heading);

// styling part  
form.style.height="500px";
form.style.width="500px";
form.style.border="1px solid black";
form.style.display="flex";
form.style.flexDirection="column";
form.style.justifyContent="center";
form.style.alignItems="center";
form.style.boxShadow="1px 1px 10px gray";
form.action="registration";
form.method="get";

ename.type="text";
ename.placeholder="Name";
ename.style.margin="10px";
ename.style.width="300px"
ename.style.height="30px";

email.type="email";
email.placeholder="Email";
email.style.margin="10px";
email.style.width="300px"
email.style.height="30px";

phone.type="tel";
phone.placeholder="Phone number";
phone.style.margin="10px";
phone.style.width="300px"
phone.style.height="30px";

password.type="password";
password.placeholder="Password";
password.style.margin="10px";
password.style.width="300px"
password.style.height="30px";

compassword.type="password";
compassword.placeholder="Confirm Password";
compassword.style.margin="10px";
compassword.style.width="300px"
compassword.style.height="30px";

submit.textContent="register";
submit.style.margin="10px"; 
submit.style.width="100px"
submit.style.height="30px";

heading.textContent="Register";

submit.addEventListener("click", (e)=>{
    e.preventDefault();
    let user = {
        ename:ename.value,
        email:email.value,
        password:password.value,
        compassword:compassword.value
    }

    let getitems = JSON.parse(localStorage.getItem("user"))|| []
    let check = getitems.find((val)=>{
        return user.email===val.email
    })

    if(check)
    {
        alert("Account already exists")
        alert("You can Login to your Account")
    } else {
        getitems.push(user)
        localStorage.setItem("user",JSON.stringify(getitems))
        alert("Account created success");
        window.open("dom.html");
    }
})