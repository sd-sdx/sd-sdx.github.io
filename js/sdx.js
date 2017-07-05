require([
    'js/jquery.js',
    'js/handlebars.js',
    'text!schedule.handlebars',
    'text!schedule.json',
    'text!companies.handlebars',
    'text!companies.json'
], function (_, handlebars,  scheduleTemplate, scheduleData, companyTemplate, companyData) {
    var template = handlebars.compile(scheduleTemplate);
    var companyHandlebar= handlebars.compile(companyTemplate);

    var content = JSON.parse(scheduleData);
    var company = JSON.parse(companyData);

    $("#9-10").append(template( {schedule: content["9-10"]}));
    $("#10-11").append(template( {schedule: content["10-11"]}));
    $("#11-12").append(template( {schedule: content["11-12"]}));
    $("#2-3").append(template( {schedule: content["2-3"]}));
    $("#3-4").append(template( {schedule: content["3-4"]}));
    $("#4-5").append(template( {schedule: content["4-5"]}));

    var ceil = Math.ceil;
    Object.defineProperty(Array.prototype, 'chunk', {value: function(n) {
        return Array(ceil(this.length/n)).fill().map((_,i) => this.slice(i*n,i*n+n));
    }});

    $("#company-list")
        .append(companyHandlebar( {list: company.chunk(4)}));

    $("div.tab-menu>div.list-group>a").click(function(e) {
        e.preventDefault();
        $(this).siblings('a.active').removeClass("active");
        $(this).addClass("active");
        var index = $(this).index();
        $("div.tab>div.tab-content").removeClass("active");
        $("div.tab>div.tab-content").eq(index).addClass("active");
    });

});