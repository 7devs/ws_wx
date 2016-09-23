var router = require('express').Router(),
    xml = require('xml'),
    xmlBodyParser = require('express-xml-bodyparser');

router.route('/')
    .get(function(req, res, next) {
        //wechat验证字符串echostr
        //console.log("ha");
        var str = req.query.echostr;
        res.send(str);
    });



module.exports = router
