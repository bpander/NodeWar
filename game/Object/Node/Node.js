define(function (require) {
    'use strict';

    var GameObject = require('game/Object/Object');
    var Branch = require('game/Object/Branch');


    function Node () {
        GameObject.call(this);

        this.element.classList.add('node', 'node_inactive');

        this.branches = [];

    }
    Node.prototype = new GameObject();
    Node.prototype.constructor = Node;

    Node.prototype.displayName = 'Node';

    Node.prototype.cost = 0;


    Node.EVENT = {
        ACTIVATE: 'node-activate',
        CREATION: 'node-creation'
    };


    Node.prototype.activate = function () {
        this.element.classList.remove('node_inactive');
        this.trigger(Node.EVENT.ACTIVATE);
        return this;
    };


    Node.prototype.branch = function (node) {
        var branch = new Branch(this, node);
        this.branches.push(branch);
        this.add(branch);
        this.add(node);
        return branch;
    };


    return Node;
});