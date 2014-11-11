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
        },

        events: {
            'click .save': 'save',
            'click .edit': 'edit',
        },

        save: function() {
            var title = this.$('.title').val(),
                content = this.$('.content').val();

            this.model.save({
                title: title,
                content: content,
                isEditing: false
            });
        },

        edit: function() {
            this.model.set('isEditing', true);
        },

        delete: function() {
            this.model.destroy();
        }

    });

})();
