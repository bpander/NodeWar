define(function (require) {
    'use strict';

    var Environment = require('game/Environment/Environment');
    var Drone = require('game/Object/Drone');
    var NodeFactory = require('game/Object/Node/NodeFactory');
    var Node = require('game/Object/Node/Node');
    var Mouse = require('game/Mouse');
    var UINodeCreation = require('game/UI/UINodeCreation');
    var Util = require('game/Util');


    function EnvironmentArena () {
        Environment.call(this);

        this.element.classList.add('environment_arena');

        this._onNodeActivate = this._onNodeActivate.bind(this);
    }
    EnvironmentArena.prototype = new Environment();
    EnvironmentArena.prototype.constructor = EnvironmentArena;


    EnvironmentArena.prototype.start = function () {
        var base = NodeFactory.create(NodeFactory.TYPE.BASE);
        var drone;
        var i = 20;
        base.position.set(60, 140);
        base.on(Node.EVENT.ACTIVATE, this._onNodeActivate);
        base.on(Node.EVENT.CREATION, this._onNodeCreation);
        this.add(base);
        base.activate();
        while (i--) {
            drone = new Drone();
            drone.position = base.position;
            base.add(drone);
        }
        return this;
    };


    EnvironmentArena.prototype._onNodeActivate = function (e) {
        var originalNode = e.target;
        var self = this;

        originalNode.element.addEventListener('mousedown', function (e) {
            e.preventDefault();
            if (e.target !== e.currentTarget) {
                return;
            }
            var onMouseUp = function (mouseEvent) {
                var uiNodeCreation;
                var onMouseDown;
                window.removeEventListener('mouseup', onMouseUp);
                if (mouseEvent.target !== self.element) {
                    return;
                }
                uiNodeCreation = new UINodeCreation();
                uiNodeCreation.element.style.left = mouseEvent.pageX + 'px';
                uiNodeCreation.element.style.top = mouseEvent.pageY + 'px';
                self.element.appendChild(uiNodeCreation.element);
                uiNodeCreation.element.addEventListener('change', function (changeEvent) {
                    var node = NodeFactory.create(NodeFactory.TYPE[changeEvent.target.value]);
                    node.position.set(mouseEvent.pageX, mouseEvent.pageY);
                    originalNode.branch(node);
                    window.removeEventListener('mousedown', onMouseDown);
                    uiNodeCreation.element.parentNode.removeChild(uiNodeCreation.element);
                    setTimeout(function () {
                        node.activate();
                    }, 1000);
                });
                onMouseDown = function (e) {
                    if (!Util.hasParent(e.target, uiNodeCreation.element)) {
                        window.removeEventListener('mousedown', onMouseDown);
                        uiNodeCreation.element.parentNode.removeChild(uiNodeCreation.element);
                    }
                };
                window.addEventListener('mousedown', onMouseDown);
            };
            window.addEventListener('mouseup', onMouseUp);
        });
    };


    EnvironmentArena.prototype._onNodeCreation = function (e) {

    };


    return EnvironmentArena;
});