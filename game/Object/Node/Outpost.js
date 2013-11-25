define(function (require) {
    'use strict';

    var Node = require('game/Object/Node/Node');


    function Outpost () {
        Node.call(this);

        this.element.classList.add('node_outpost');

    }
    Outpost.prototype = new Node();
    Outpost.prototype.constructor = Outpost;

    Outpost.prototype.displayName = 'Outpost';

    Outpost.prototype.cost = 10;


    return Outpost;
});