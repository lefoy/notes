$.ajaxPrefilter(function(options, originalOptions, jqXHR) {
    options.url = 'http://notes.job.lefoy.ca:3000' + options.url;
});

var app = app || {
    Router: {},
    View: {},
    Model: {},
    Collection: {}
};
