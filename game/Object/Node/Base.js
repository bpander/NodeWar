define(function (require) {
    'use strict';

    var Node = require('game/Object/Node/Node');


    function Base () {
        Node.call(this);

        this.element.classList.add('node_base');

    }
    Base.prototype = new Node();
    Base.prototype.constructor = Base;

    Base.prototype.displayName = 'Base';

    Base.prototype.cost = 100;


    return Base;
});