(function() {
    'use strict';

    app.View.NoteList = Marionette.CompositeView.extend({

        el: '#notes-wrapper',
        template: '#tmpl_note_list',

        childView: app.View.Note,
        childViewContainer: 'div',

        initialize: function() {
            var self = this;

            this.render();

            $(window).on('resize', this.updateShapeShift);

            $(document).dblclick(function() {
                self.new();
            });
        },

        onRender: function() {
            console.log('onRender');

            this.$el.find('> div').addClass('wrapper');
        },

        collectionEvents: {
            'new': 'initShapeShift',
            'remove': 'updateShapeShift',
            'fetch': 'afterFetch'
        },

        afterFetch: function() {
            var self = this;

            console.log('afterFetch');

            self.initShapeShift();
        },

        events: {
            'click .new': 'new'
        },

        initShapeShift: function() {
            var self = this;

            console.log('initShapeShift');

            window.shapeshift = $('.wrapper');
            window.shapeshift.shapeshift({
                gutterX: 10,
                gutterY: 10,
                paddingX: 0,
                paddingY: 20
            });
        },

        updateShapeShift: function() {
            if (window.shapeshift) {
                window.shapeshift.trigger('ss-rearrange');
            }
        },

        new: function() {
            this.collection.create({
                title: '',
                content: '',
                order: 9999,
                createdDate: new Date().getTime(),
                isEditing: false,
                isArchived: false
            });

            console.log('new');

            this.collection.trigger('new');
        }

    });

})();
