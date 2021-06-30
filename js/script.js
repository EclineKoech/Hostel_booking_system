//  transform the form on signup and login clicks
var login = document.querySelector(".login");
var register = document.querySelector(".register");
var reset=document.querySelector(".reset");
var btnLogin = document.getElementById("login");
var btnregister = document.getElementById("register");
var btnreset = document.getElementById("reset");


btnLogin.onclick = function(event){  
    event.preventDefault();   
     login.classList.add("active");
     reset.classList.add("inActive");
     register.classList.add("inActive");
    
}


btnregister.onclick = function(event){ 
    event.preventDefault();  
    login.classList.remove("active");
    reset.classList.add("inActive");
    register.classList.remove("inActive");
 }


btnreset.onclick = function(event){ 
    event.preventDefault();    
    login.classList.add("inactive");   
    register.classList.add("inActive"); 
    reset.classList.add("active");   
}


