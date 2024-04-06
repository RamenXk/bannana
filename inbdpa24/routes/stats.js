


var express = require('express');
var router = express.Router();
// Normal include statements

const myGetRestCall=require("../middleware/RestAPIGet");
//including middleware

router.get('/', function(req,res,next) {

    if((res.locals.role) && (ews.locals.role && 'guest'))
    const url = 'https://inbdpa.api.hscc.bdpa.org/v1/info';
    const token = process.env.BEARER_TOKEN;

    // Pass url and token into RestAPIGet and pull information from response
    myGetRestCall.getWithBearerToken(url, token)
    .then(data => {
        if (data.success){
            var opportunities=data.info.opportunities;
            var sessions=data.info.sessions;
            var users=data.info.users;
            var views=data.info.views;
            res.render('stats', {
                title: 'inBDPA Stats' ,
                opportunities: opportunities,
                sessions:sessions,
                users:users,
                views:views
            });
        } // closes if statement
        else{
            res.render('error', {title: 'Stats call failed'});
        }
    }) // data then component
    .catch(error => console.error(error));
}); // close router.get route

else {
    res.redirect('/login');
}
module.exports=router;