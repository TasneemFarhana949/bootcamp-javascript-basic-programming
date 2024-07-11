var username = document.getElementById('username');
var password = document.getElementById('password');

function fn(e){
    e.preventDefault();
    var usernamevalue =username.value;
    var passwordvalue = password.value;
    console.log(usernamevalue,passwordvalue);
    if(usernamevalue='tasneem'&& passwordvalue=='Tasneem@1234'){
        alert('hey, it has been validated')
    }
    else{
    alert('wrong password')    
    }
}
var form = document.getElementById('form');
form.addEventListener('submit',fn);
