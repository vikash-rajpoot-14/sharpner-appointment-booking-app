const User = require('./../model/user');

exports.getUser = async (req, res) => {
    try {
        const users = await User.findAll();
        res.json({
            status: "success",
            data: users
        })
    } catch (err) {
        console.log(err)
    }

}

exports.postUser = (req, res) => {
    try {
        const username = req.body.username;
        const phonenumber = req.body.phonenumber;
        const email = req.body.email;
        User.create({
            username: username,
            phonenumber: phonenumber,
            email: email
        }).then(() => {
            console.log('user created');
            res.redirect('/user')
        }).catch((err) => {
            console.log(err);
        });
    } catch (err) {
        console.log(err)
    }

}

exports.deleteUser = (req, res) => {
    try {
        User.findByPk(req.params.id).then((user) => {
            user.destroy().then(() => {
                console.log("user deleted");
                res.redirect('/')
            })
        }).catch((err) => {
            console.log(err)
        })
    } catch (err) {
        console.log(err)
    };

}