require([
    'js/jquery.js',
    'js/handlebars.js',
    'text!session.handlebars',
    'text!sessions.json',
    'text!companies.handlebars',
    'text!companies.json'
], function (_, handlebars,  sessionTemplate, sessionData, companyTemplate, companyData) {
    var template = handlebars.compile(sessionTemplate);
    var companyHandlebar= handlebars.compile(companyTemplate);

    var content = JSON.parse(sessionData);
    var company = JSON.parse(companyData);

    $("#customer-support-skills")
        .append(template( {session: content["Customers Support Skills"]}));
    $("#manager-skills")
        .append(template( {session: content["Manager Skills"]}));
    $("#technical-skills")
        .append(template( {session: content["Technical Skills"]}));
    $("#self-skills")
        .append(template( {session: content["Customers Support Skills"]}));
    var ceil = Math.ceil;

    Object.defineProperty(Array.prototype, 'chunk', {value: function(n) {
        return Array(ceil(this.length/n)).fill().map((_,i) => this.slice(i*n,i*n+n));
    }});

    $("#company-list")
        .append(companyHandlebar( {list: company.chunk(4)}));

});