require([
    'js/jquery.js',
    'js/handlebars.js',
    'text!schedule.handlebars',
    'text!schedule.json',
    'text!schedule_room.handlebars',
    'text!schedule_room.json',
    'text!companies.handlebars',
    'text!companies.json'
], function (_, handlebars,  scheduleTemplate, scheduleData, scheduleRoomTemplate, scheduleRoomData, companyTemplate, companyData) {
    var template = handlebars.compile(scheduleTemplate);
    var roomTemplate = handlebars.compile(scheduleRoomTemplate);
    var companyHandlebar= handlebars.compile(companyTemplate);

    var content = JSON.parse(scheduleData);
    var roomSchedule = JSON.parse(scheduleRoomData);
    var company = JSON.parse(companyData);

    $("#9-10").append(template( {schedule: content["9-10"]}));
    $("#10-11").append(template( {schedule: content["10-11"]}));
    $("#11-12").append(template( {schedule: content["11-12"]}));
    $("#2-3").append(template( {schedule: content["2-3"]}));
    $("#3-4").append(template( {schedule: content["3-4"]}));
    $("#4-5").append(template( {schedule: content["4-5"]}));

    $("#room355").append(roomTemplate( {schedule: roomSchedule["room355"]}));
    $("#room294").append(roomTemplate( {schedule: roomSchedule["room294"]}));
    $("#room296").append(roomTemplate( {schedule: roomSchedule["room296"]}));
    $("#room298").append(roomTemplate( {schedule: roomSchedule["room298"]}));
    $("#room323").append(roomTemplate( {schedule: roomSchedule["room323"]}));
    $("#room327").append(roomTemplate( {schedule: roomSchedule["room327"]}));
    $("#room328").append(roomTemplate( {schedule: roomSchedule["room328"]}));
    $("#room329").append(roomTemplate( {schedule: roomSchedule["room329"]}));
    
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