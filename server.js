/**
 * Created by Felix on 18.02.2015.
 */
var express = require('express');
var app = express();
var path= require('path');
var html_dir=path.resolve(path.join(__dirname,'/app/'));
console.log(html_dir);
app.use(express.static(html_dir));
/*app.get('/', function (req, res) {
 res.render(html_dir+'\\index.html');
 });*/
/*app.get('/resources/customers/1',function (req,res){
    res.json(
        {"id":1,"companyName":"Test","description":"bester Kunder überhaupt","logoId":null,"imageUrl":null,"resubmissions":[{"customerId":1,"id":2,"note":"beste Wiedervorlage überhaupt","due":1423090800000,"active":true}]}
    );
});*/
var server = app.listen(8080, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
})