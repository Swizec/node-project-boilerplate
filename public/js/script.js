$(function(){
    now.ready(function(){
        now.initiate(function (clientId) {
            console.log("I am client "+clientId);
        });
    });
});
