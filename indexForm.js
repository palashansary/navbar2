
let errorName = document.getElementById('errorName');
let errorMail = document.getElementById('errorMail')
let errorNum = document.getElementById('errorNum');
let errorPass= document.getElementById('errorPass');

let name = document.getElementById('fname');
let email = document.getElementById('fmail');
let number =document.getElementById('fnumber');
let password = document.getElementById('fpass');


let flag=1;

function  formSubmit()
{
    
    if( name.value=="")
    {
        errorName.innerHTML=" Please Enter Your Name";
        flag=0;
    }
    else if(name.value.length<6){
        errorName.innerHTML=" Username is too short";
        flag=0;
    }
    else{
        errorName.innerHTML=" "
        flag=1;
    }


    if(email.value=="")
    {
        errorMail.innerHTML="Please enter your email"
        flag=0;
    }
    else{
        errorMail.innerHTML=""
        flag=1;
    }

    if(number.value=="")
    {
        errorNum.innerHTML="Please enter you number";
        flag=0;

    }
    else if(number.value.length<10){

        errorNum.innerHTML="Number should be 10 digit ";

        flag=0;

    }
    else{
        errorNum.innerHTML="";

        flag=1;
    }


    if(password.value==""){

        errorPass.innerHTML="Please enter your password";
        flag=0;
    }
    else if(password.value.length<8)
    {
        errorPass.innerHTML="Password must be 8 digits";
        flag=0;
    }
    else{
        errorPass.innerHTML="";
        flag=1;
    }

    if(flag==1){
        return true;
    }
    else{
        return false;
    }
}

let reset = document.getElementById('reset');

  reset.addEventListener('click', fReset)

  function fReset()
  {
    errorName.innerHTML=" ";
    errorMail.innerHTML="" ;
    errorNum.innerHTML="";
    errorPass.innerHTML="";
  }