define(function (require) {
    'use strict';


    function Position (x, y) {

        this.x = x;

        this.y = y;

    }


    Position.prototype.set = function (x, y) {
        this.x = x;
        this.y = y;
        return this;
    };


    Position.prototype.manhattanDistance = function (position) {
        var deltaX = position.x - this.x;
        var deltaY = position.y - this.y;
        return new Position(deltaX, deltaY);
    }


    Position.prototype.angle = function (position) {
        var manhattanDistance = this.manhattanDistance(position);
        return Math.atan2(manhattanDistance.y, manhattanDistance.x);
    };


    Position.prototype.distance = function (position) {
        var manhattanDistance = this.manhattanDistance(position);
        return Math.sqrt(Math.pow(manhattanDistance.x, 2) + Math.pow(manhattanDistance.y, 2));
    };


    Position.prototype.clone = function () {
        return new Position(this.x, this.y);
    };


    return Position;
});