$(function() {

    Backbone.history.start();

    app.notes = new app.Collection.Note();
    app.noteList = new app.View.NoteList({
        collection: app.notes
    });

    app.notes.fetch({
        success: function(collection, response, options) {
            //window.setTimeout(function() {
                collection.trigger('fetch');
            //}, 1);
        }
    });

});
