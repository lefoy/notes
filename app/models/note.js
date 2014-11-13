(function() {
    'use strict';

    app.Model.Note = Backbone.Model.extend({

        urlRoot: '/notes',

        defaults: {
            title: '',
            content: '',
            createdDate: '',
            order: 0,
            isEditing: false,
            isArchived: false
        }

    });

})();
