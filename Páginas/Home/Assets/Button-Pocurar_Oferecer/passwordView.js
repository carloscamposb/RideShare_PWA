
function showing(){
    var inputPass=document.getElementById("senha");
    var btnShowPass = document.getElementById("btnSenha");

    if(inputPass.type === "password"){
        inputPass.setAttribute("type" , "text");
        btnShowPass.classList.replace ("fa-eye" , "fa-eye-slash")
    }else{
        inputPass.setAttribute("type" , "password");
        btnShowPass.classList.replace ("fa-eye-slash","fa-eye")
    }

}




// Olhos icone senha confirm
function showingConfirm(){
    var inputPassConfirm=document.getElementById("confirmaSenha");
    var btnShowPassConfirm = document.getElementById("btnSenha2");

    if(inputPassConfirm.type === "password"){
        inputPassConfirm.setAttribute("type" , "text");
        btnShowPassConfirm.classList.replace ("fa-eye" , "fa-eye-slash")
    }else{
        inputPassConfirm.setAttribute("type" , "password");
        btnShowPassConfirm.classList.replace ("fa-eye-slash","fa-eye")
    }

}





