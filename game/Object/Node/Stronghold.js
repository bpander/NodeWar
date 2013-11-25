define(function (require) {
    'use strict';

    var Node = require('game/Object/Node/Node');


    function Stronghold () {
        Node.call(this);

        this.element.classList.add('node_stronghold');

    }
    Stronghold.prototype = new Node();
    Stronghold.prototype.constructor = Stronghold;

    Stronghold.prototype.displayName = 'Stronghold';

    Stronghold.prototype.cost = 10;


    return Stronghold;
});