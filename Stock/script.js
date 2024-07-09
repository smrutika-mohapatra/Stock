// Supported stocks
const supportedStocks = ['GOOG', 'TSLA', 'AMZN', 'META', 'NVDA'];

// User data
let userData = {};

// Login functionality
document.getElementById('login-btn').addEventListener('click', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    if (email) {
        userData.email = email;
        document.getElementById('login').hidden = false;
        document.getElementById('dashboard').hidden = false;
        renderStockList();
    }
});

let inputs=document.querySelectorAll("input")
function fetchData() {
    console.log("hello");
    event.preventDefault()
    let email=inputs[0].value
    let password=inputs[1].value
    if(email==""||password==""||email!="smrutika@gmail.com"||password!="smruti"){
        inputs[0].style.border = "1px solid red"
        inputs[0].style.boxShadow = "0px 0px 10px red"
        inputs[1].style.border = "1px solid red"
        inputs[1].style.boxShadow = "0px 0px 10px red"

    }
    else{
        if(email=="smrutika@gmail.com"||password=="smruti")
        {
         window.location.assign("./dashboard.html")
        } 
        
        
    }
   
   


}
