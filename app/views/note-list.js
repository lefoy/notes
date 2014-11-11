(function() {
    'use strict';

    app.View.NoteList = Marionette.CompositeView.extend({

        el: '#notes-wrapper',
        template: '#tmpl_note_list',

        childView: app.View.Note,
        childViewContainer: 'div',

        collectionEvents: {
            'sync': 'render'
        }

    });

})();
