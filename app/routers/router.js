(function() {
    'use strict';

    var AppRouter = Backbone.Router.extend({

        routes: {
            '': 'home',
            'note/:id': 'note'
        },

        home: function() {
            //console.log('load home view');
        },

        note: function(id) {
            //console.log('single note ' + id + ' view');
        }

    });

    app.Router = new AppRouter();
})();
