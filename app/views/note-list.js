(function() {
    'use strict';

    app.View.NoteList = Marionette.CompositeView.extend({

        el: '#notes-wrapper',
        template: '#tmpl_note_list',

        childView: app.View.Note,
        childViewContainer: 'div',

        onRender: function() {
            this.$el.find('> div').addClass('masonry-wrapper');

            window.setTimeout(function() {
                $('.masonry-wrapper').masonry({
                    columnWidth: 0,
                    itemSelector: '.note'
                });

                window.masonry = $('.masonry-wrapper').data('masonry');
            }, 2);
        },

        collectionEvents: {
            'sort': 'updateLayout',
            'sync': 'render'
        },

        events: {
            'click .new': 'new'
        },

        updateLayout: function() {
            if (window.masonry) {
                window.masonry.reloadItems();
                window.masonry.layout();
            }
        },

        new: function() {
            this.collection.add({
                title: '',
                content: '',
                createdDate: new Date().getTime(),
                isEditing: false,
                isArchived: false
            });
        }

    });

})();
