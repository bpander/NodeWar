define([
    'game/NodeWar',
    'game/Environment/EnvironmentArena',
    'bower_components/q/q'
], function (
    NodeWar,
    Arena,
    Q
) {
    'use strict';

    var ready = Q.defer();
    ready.promise.done(function () {
        var game = new NodeWar();
        var arena = new Arena();

        document.body.appendChild(game.element);
        game.loadLevel(arena);
        game.start();

        window.game = game;
    });


    document.readyState === 'complete' ?
        ready.resolve() :
        document.addEventListener('DOMContentLoaded', function() {
            ready.resolve();
        })
    ;

});