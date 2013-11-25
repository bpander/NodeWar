define(function (require) {
    'use strict';

    var GameObject = require('game/Object/Object');


    function Drone () {
        GameObject.call(this);

        this.element.classList.add('drone');

    }
    Drone.prototype = new GameObject();
    Drone.prototype.constructor = Drone;


    return Drone;
});