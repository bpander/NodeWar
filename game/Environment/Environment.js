define(function (require) {
    'use strict';

    var Eventable = require('bower_components/Eventable/Eventable');


    function Environment () {
        Eventable.call(this);

        this.element = document.createElement('div');
        this.element.classList.add('environment');

        this.objects = [];

    }
    Environment.prototype = new Eventable();
    Environment.prototype.constructor = Environment;


    Environment.prototype.add = function (gameObject) {
        Eventable.prototype.add.call(this, gameObject);
        this.element.appendChild(gameObject.element);
        this.objects.push(gameObject);
        return this;
    };


    Environment.prototype.update = function () {
        var i = 0;
        var l = this.objects.length;
        for (; i !== l; i++) {
            this.objects[i].update();
        }
    };


    Environment.prototype.remove = function (gameObject) {
        var index = this.objects.indexOf(gameObject);
        if (index !== -1) {
            this.objects.splice(index, 1);
            gameObject.element.parentNode.removeChild(gameObject.element);
        }
        return this;
    };


    return Environment;
});