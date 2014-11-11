(function() {
    'use strict';

    app.Collection.Note = Backbone.Collection.extend({

        model: app.Model.Note,
        url: '/notes',

        comparator: function(task) {
            return -task.get('createdDate');
        }

    });

})();
