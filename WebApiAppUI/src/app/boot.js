(function (angular) {
    'use strict';
    document.addEventListener('DOMContentLoaded', initApp, false);
    function initApp() {
        var app = angular.module('myapp');
        app.constant('appInfo', 'version: 1.0.0');

        app.value('localization', {
            lang: 'eng',
            region: 'uk'
        });

        angular.bootstrap(document, ['myapp']);
    }

})(window.angular);