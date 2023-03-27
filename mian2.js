function formValid(){


var name=document.getElementById("name").value;
var password=document.getElementById("password").value;
var error=document.getElementById("error")
var text='';

if (name.length<5){

    text="البريد الالكتروني غير صحيح";
    error.innerHTML=text;
    return false;

}
else if(password.length<10){
    text="كلمه السر غير صحيحه";
    error.innerHTML=text;
    return false
}
}











































