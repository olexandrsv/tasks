function onClick(){
    let nameEl = document.getElementById("name");
    let surnameEl = document.getElementById("surname");
    let loginEl = document.getElementById("login");
    let passwordEl = document.getElementById("password");

    console.log("Name:", nameEl.value);
    console.log("Surname:", surnameEl.value);
    console.log("Login:", loginEl.value);
    console.log("Password:", passwordEl.value);

    nameEl.value = "";
    surnameEl.value = "";
    loginEl.value = "";
    passwordEl.value = "";
}