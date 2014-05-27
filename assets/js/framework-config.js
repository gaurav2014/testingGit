
define('framework-config',[], function(){
    return {
        "paths": {
            "jquery": "vendor/jquery/dist/jquery.min",
            "jquery.bootstrap": "vendor/bootstrap/dist/js/bootstrap.min",
            "underscore": "vendor/underscore/underscore",
            "vendor": "vendor",
            "libs": "libs",
            "flexslider": "libs/FlexSlider-version-2.2/jquery.flexslider"
        },

        "shim": {
            "backbone": {
                deps: ['underscore', 'jquery'],
                exports: 'Backbone'
            },
            "jquery.bootstrap": {
                deps: ['jquery']
            },
            "underscore": {
                exports: '_'
            },
            "flexslider": {
                deps: ['jquery'],
                exports: '$.flexslider'
            }
        }
    };
});
