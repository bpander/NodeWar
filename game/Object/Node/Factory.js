define(function (require) {
    'use strict';

    var Node = require('game/Object/Node/Node');


    function Factory () {
        Node.call(this);

        this.element.classList.add('node_factory');

    }
    Factory.prototype = new Node();
    Factory.prototype.constructor = Factory;

    Factory.prototype.displayName = 'Factory';

    Factory.prototype.cost = 20;


    return Factory;
});