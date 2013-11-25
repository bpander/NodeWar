define(function (require) {
    'use strict';

    function NodeWar (element) {

        this.element = document.createElement('div');
        this.element.classList.add('nodeWar');

        this.animationRequestId = -1;

        this.update = this.update.bind(this);
    }


    NodeWar.prototype.loadLevel = function (environment) {
        this.environment = environment;
        this.element.appendChild(environment.element);
        environment.start();
        return this;
    };


    NodeWar.prototype.start = function () {
        this.update();
        return this;
    };


    NodeWar.prototype.stop = function () {
        cancelAnimationFrame(this.animationRequestId);
        return this;
    };


    NodeWar.prototype.update = function () {
        this.environment.update();
        this.animationRequestId = requestAnimationFrame(this.update);
    };


    return NodeWar;
});