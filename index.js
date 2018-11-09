const Crawler = require("crawler");

const SMSClient = require('@alicloud/sms-sdk');
const accessKeyId = 'LTAI8wgcTmwCK9hV';
const secretAccessKey = '7Mez2ejzeFoVBKk4VfgZQ6iu4fWW2n';
const queueName = 'Alicom-Queue-1092397003988387-';


let c = new Crawler({
    maxConnections: 2,
    // This will be called for each crawled page
    callback: function (error, res, done) {
        if (error) {
            console.log(error);
        } else {
            let reg = /(Mac\s+OS\s+X[0-9]{2}.[0-9]{1}[4-9]{1}.[0-9]+)/g;
            //TODO::判断是否已经发送了

            if(Array.isArray(res.body.match(reg))){
               //写入数据库，已经更新了，并发送文档

            }
        }
        done();
    }
});

// Queue just one URL, with default callback
c.queue('https://www.nvidia.cn/Download/API/lookupValueSearch.aspx?TypeID=4&ParentID=85');
