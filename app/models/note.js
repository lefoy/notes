(function() {
    'use strict';

    app.Model.Note = Backbone.Model.extend({

        defaults: {
            title: '',
            content: '',
            createdDate: '',
            isEditing: false,
            isArchived: false
        },

        toggle: function() {
            this.save({
                isArchived: !this.get('isArchived')
            });
        }

    });

})();

