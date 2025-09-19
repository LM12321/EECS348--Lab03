function pswdChecker(){
    const pswd1 = document.getElementById("pswd1").value;
    const pswd2 = document.getElementById("pswd2").value;
    const pswd_area = document.getElementById("password_result");

    if (pswd1 == pswd2){
        if (pswd1.length < 8){
            pswd_area.textContent = "Too short of a password!";
        }else{
            pswd_area.textContent = "They match!!";
        }
    }else{
        pswd_area.textContent = "They don't match...";
    }

}
