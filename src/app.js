let LoginDB = require('./db');
let loginDB = new LoginDB();
let express = require('express');
let bodyParse = require('body-parser');
let path = require('path');


let app = express();
app.use(bodyParse.json());
app.use(bodyParse.urlencoded({extended: true}));
app.get('/', function (req, res) {
    res.sendFile(path.resolve('./login.html'));
    // console.log("login");
});
app.post('/login', function (req, res) {
    console.log('connection');
    let userName = req.body.inputStuId;
    let password = req.body.inputPassword;
    let flag = loginDB.execute(userName, password);
    // console.log(flag);
    if (flag === 'success') {
        res.redirect('http://www.baidu.com');
    } else {
        res.sendFile(path.resolve('./login.html'));
    }

});
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
