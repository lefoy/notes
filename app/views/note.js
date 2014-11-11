(function() {
    'use strict';

    app.View.Note = Marionette.ItemView.extend({

        tagName: 'div',
        template: '#tmpl_note',

        onRender: function() {
            $(this.el).addClass('note');
        },

        modelEvents: {
            'change': 'render'
        }

    });

})();
