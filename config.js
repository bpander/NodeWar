(function () {

    require.config({

        paths: {

            'Handlebars': 'bower_components/handlebars/handlebars.min'

        },

        shim: {

            'Handlebars': {
                exports: 'Handlebars'
            }

        }

    });

    require(['main']);

}());
