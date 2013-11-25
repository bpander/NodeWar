define(function (require) {
    'use strict';

    var GameObject = require('game/Object/Object');
    var Environment = require('game/Environment/Environment');
    var Position = require('game/Position');
    var Mouse = require('game/Mouse');


    function Branch (start, end) {
        GameObject.call(this);

        this.element.classList.add('branch');

        this.start = start;

        this.end = end;

        this.position = start.position;

    }
    Branch.prototype = new GameObject();
    Branch.prototype.constructor = Branch;


    Branch.prototype.update = function () {
        GameObject.prototype.update.call(this);
        this.element.style.webkitTransform = 'rotate(' + this.position.angle(this.end.position) + 'rad)';
        this.element.style.width = this.position.distance(this.end.position) + 'px';
    };


    return Branch;
});