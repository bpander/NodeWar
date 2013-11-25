define(function (require) {
    'use strict';

    var Environment = require('game/Environment/Environment');
    var Position = require('game/Position');


    function GameObject () {
        Environment.call(this);

        this.element = document.createElement('div');
        this.element.classList.add('object');

        this.position = new Position(0, 0);

    }
    GameObject.prototype = new Environment();
    GameObject.prototype.constructor = GameObject;


    GameObject.prototype.update = function () {
        Environment.prototype.update.call(this);
        this.element.style.left = this.position.x + 'px';
        this.element.style.top = this.position.y + 'px';
    };


    return GameObject;
});