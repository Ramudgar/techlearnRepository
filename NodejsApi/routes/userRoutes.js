const express = require('express');
const router = express.Router();
const User= require('../models/usermodel');

// api to save user data
router.post('/users/savedata', (req, res) => {
    const data=req.body;
    if (!data) {
        res.status(400).json({ msg: 'Data not found' });
        return;
    }
    const user = new User({
        name: data.name,
        email: data.email,
        address: data.address,
        phone: data.phone,
        age: data.age,

    });

    user.save().then(( data) => {
        res.json({ msg: 'Data inserted', success: true ,data});
    }
    ).catch((error) => {
        res.status(500).json({ msg: error, success: false });
    }
    );
});



// get all user data
router.get('/user/getdata', (req, res) => {
    User.find().then((data) => {
        res.json({ msg: 'Data fetched', success: true, data });
    }).catch((e) => {
        res.status(500).json({ msg: e, success: false });

    });
});

// update user data
router.put('/user/updatedata/:id', (req, res) => {
    const id = req.params.id;
    const data = req.body;

});



 


module.exports = router;
