define(function (require) {
    'use strict';

    var Position = require('game/Position');


    function Mouse () {

        this.position = new Position(0, 0);

        this._onMouseMove = this._onMouseMove.bind(this);
    };


    Mouse.prototype.BUTTON = {
        LEFT:   0,
        MIDDLE: 1,
        RIGHT:  2
    };


    Mouse.prototype.start = function () {
        window.addEventListener('mousemove', this._onMouseMove);
        return this;
    };


    Mouse.prototype._onMouseMove = function (e) {
        this.position.set(e.pageX, e.pageY);
    };


    return new Mouse().start();
});