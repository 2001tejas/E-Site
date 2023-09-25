function savedata(){
    var name = document.getElementById('nameinput').value;    
    var email = document.getElementById('emailinput').value;    
    var password = document.getElementById('passwordinput').value;    

    if(typeof Storage !== "undefined")
    {
        localStorage.setItem('Password',password);
        localStorage.setItem('Email',email);
        localStorage.setItem('Name',name);
    }
    else
    {
        alert("Local Storage is not supported in your brower");
    }

}