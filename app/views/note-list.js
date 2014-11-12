(function() {
    'use strict';

    app.View.NoteList = Marionette.CompositeView.extend({

        el: '#notes-wrapper',
        template: '#tmpl_note_list',

        childView: app.View.Note,
        childViewContainer: 'div',

        initialize: function() {
            this.render();
        },

        onRender: function() {
            this.$el.find('> div').addClass('masonry-wrapper');
        },

        collectionEvents: {
            'add': 'updateLayout',
            'remove': 'updateLayout',
            'fetch': 'afterFetch'
        },

        afterFetch: function() {
            $('.masonry-wrapper').masonry({
                columnWidth: 0,
                itemSelector: '.note'
            });

            window.masonry = $('.masonry-wrapper').data('masonry');
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
