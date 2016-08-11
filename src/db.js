let mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/login');
let DB = mongoose.connection;
class LoginDB {

    execute(userName, password) {
        console.log(userName);

        DB.on('error', console.error.bind(console, 'connection error'));
        DB.once('open', function () {
            console.log('11111111');
            let User = mongoose.Schema({
                name: String,
                password: String
            });
            let Users = mongoose.model('Users', User);

            let flu = new Users();
            flu.save(function (err) {
                console.log('save status:', err ? 'failed' : 'success');
                return 'success';
            })
            flu.insert = function (f) {
                Users.findOne(f, function (err, users) {
                    console.log(users);
                    if (users === null) {
                        let Flu = new Users(f);
                        Flu.save(function (err) {
                            console.log('save status:', err ? 'failed' : 'success');
                            return 'success';
                        })
                    } else {
                        console.log('该数据已经存在！');
                        return 'failed';
                    }
                });
            };
            flu.insert({name: userName, password: password});
        });
        console.log("3333333");
    }
}



module.exports = LoginDB;
