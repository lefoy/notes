(function() {
    'use strict';

    app.View.Note = Marionette.ItemView.extend({

        tagName: 'div',
        template: '#tmpl_note',

        initialize: function() {
            var self = this;
            this.on('render', function() {
                window.setTimeout(function() {
                    self.afterRender();
                }, 1);
            });
        },

        afterRender: function() {
            var self = this;
            this.$el.find('textarea').autosize({
                append: '',
                callback: this.updateLayout
            }).on('input', function() {
                waitForFinalEvent(function() {
                    self.save();
                }, 100, 'input');
            });
        },

        onRender: function() {
            this.$el.addClass('note');
        },

        events: {
            'click .delete': 'delete'
        },

        updateLayout: function() {
            if (window.masonry) {
                window.masonry.reloadItems();
                window.masonry.layout();
            }
        },

        save: function() {
            var title = this.$('.title').val() || '...',
                content = this.$('.content').val() || '...';

            this.model.save({
                title: title,
                content: content,
                isEditing: false
            });
        },

        delete: function() {
            this.model.destroy();
        }

    });

})();
