var router = require('express').Router(),
    xml = require('xml'),
    xmlBodyParser = require('express-xml-bodyparser');

router.route('/')
    .post(xmlBodyParser( {
        explicitArray: false
    }), function(req, res, next) {
        var data = req.body.xml;//将xml解析成object(data)
        var content = data.content;
        //  TODO:  xxxx
        res.append('Content-Type', 'test/xml');
        res.send(xml({
            xml: [
                {ToUserName: {_cdata: data.fromusername}},
                {FromUserName: {_cdata: data.tousername}},
                {CreateTime: +new Date()},
                {MsgType: {_cdata: 'text'}},
                {Content: {_cdata: '返回的消息内容,can you see it?!'}}
            ]
        }))
    })

    .get(function(req, res, next) {
        //wechat验证字符串echostr
        //console.log("ha");
        var str = req.query.echostr;
        res.send(str);
    });



module.exports = router
