define(function (require) {
    'use strict';

    var Base = require('game/Object/Node/Base');
    var Factory = require('game/Object/Node/Factory');
    var Mine = require('game/Object/Node/Mine');
    var Stronghold = require('game/Object/Node/Stronghold');
    var Outpost = require('game/Object/Node/Outpost');


    function NodeFactory () {

    }


    NodeFactory.prototype.TYPE = {
        BASE:       Base,
        FACTORY:    Factory,
        MINE:       Mine,
        STRONGHOLD: Stronghold,
        OUTPOST:    Outpost
    };


    NodeFactory.prototype.create = function (Type) {
        return new Type();
    };

    return new NodeFactory();
});