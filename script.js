function showPassword(){


    let password =
    document.getElementById("password");



    if(password.type==="password"){


        password.type="text";


    }


    else{


        password.type="password";


    }



}






function loginUser(){



    let email =
    document.getElementById("email").value;



    let password =
    document.getElementById("password").value;





    if(email==="" || password===""){



        alert("Please enter email and password");



    }



    else{



        alert("Login Successful");



    }



}