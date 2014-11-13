(function() {
    'use strict';

    app.View.Note = Marionette.ItemView.extend({

        tagName: 'div',
        template: '#tmpl_note',

        initialize: function() {
            var self = this;

            //this.on('render', function() {
            window.setTimeout(function() {
                self.afterRender();
            }, 1);
            //});
        },

        afterRender: function() {
            var self = this;

            this.$el.find('textarea').autosize({
                append: '',
                callback: this.updateLayout
            });

            this.$el.on('input', function() {
                waitForFinalEvent(function() {
                    self.save();
                }, 300, 'input');
            });

            window.shapeshift.on('ss-rearranged', function() {
                console.log('save');
                self.save();
                waitForFinalEvent(function() {
                    console.log('save:updateLayout');
                    self.updateLayout();
                }, 300, 'ss-rearranged');
            });
        },

        onRender: function() {
            this.$el.addClass('note');
        },

        events: {
            'click .delete': 'delete'
        },

        updateLayout: function() {
            if (window.shapeshift) {
                window.shapeshift.trigger('ss-rearrange');
            }
        },

        save: function() {
            var title = this.$('.title').val() || '...',
                content = this.$('.content').val() || '...',
                order = this.$el.index();

            this.model.save({
                title: title,
                content: content,
                order: order,
                isEditing: false
            });
        },

        delete: function() {
            this.model.destroy();
        }

    });

})();
