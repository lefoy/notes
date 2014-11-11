(function() {
    'use strict';

    app.View.Note = Marionette.ItemView.extend({

        tagName: 'div',
        template: '#tmpl_note',

        onRender: function() {
            this.$el.addClass('note');

            this.$el.find('textarea').each(function() {
                expandTextarea(this);
            }).on('input', function() {
                expandTextarea(this);
            });
        },

        modelEvents: {
            'change': 'render'
        },

        events: {
            'click .save': 'save',
            'click .edit': 'edit',
            'click .delete': 'delete'
        },

        save: function() {
            var title = this.$('.title').val(),
                content = this.$('.content').val();

            if (title === '' || content === '') {
                this.throwError();
                return false;
            }

            this.model.save({
                title: title,
                content: content,
                isEditing: false
            });
        },

        delete: function() {
            this.model.destroy();

            if (window.masonry) {
                window.masonry.reloadItems();
                window.masonry.layout();
            }
        },

        throwError: function() {
            this.$el.css('outline', '1px solid red');
            return false;
        }

    });

})();
