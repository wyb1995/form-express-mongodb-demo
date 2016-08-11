let request = require('request');

function onClick() {
    let userName = document.getElementById('inputStuID').value;
    alert(userName);
    let userPassword = document.getElementById('inputPassword').value;

    let option = {
        url: "http://localhost:3000/login",
        method: "post",
        json: true,
        body: {'name': userName,'password': userPassword}
    };
    request(option,function (error,response,body) {
        alert(body);
    });
}
