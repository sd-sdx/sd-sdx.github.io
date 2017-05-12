require([
    'js/jquery.js',
    'js/handlebars.js',
    'text!session.handlebars',
    'text!sessions.json'
], function (_, handlebars,  sessionTemplate, data) {
    var template = handlebars.compile(sessionTemplate);

    $("#manager-sessions")
        .append(template( {session: JSON.parse(data)}));

    console.log("helllo");
});