define(function (require) {
    'use strict';

    var Node = require('game/Object/Node/Node');


    function Mine () {
        Node.call(this);

        this.element.classList.add('node_mine');

    }
    Mine.prototype = new Node();
    Mine.prototype.constructor = Mine;

    Mine.prototype.displayName = 'Mine';

    Mine.prototype.cost = 10;


    return Mine;
});