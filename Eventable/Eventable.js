define(function (require) {
    'use strict';

    function Eventable () {

        this.parent = null;

        this._events = {};

    }


    Eventable.prototype.on = function (event, callback) {
        if (this._events[event] === undefined) {
            this._events[event] = [];
        }
        this._events[event].push(callback);
        return this;
    };


    Eventable.prototype.off = function (event, callback) {
        var callbacks = this._events[event];
        var index;
        if (callbacks instanceof Array) {
            index = callbacks.indexOf(callback);
            if (index !== -1) {
                callback.splice(index, 1);
            }
        }
        return this;
    };


    Eventable.prototype.trigger = function (event, data) {
        var e = event instanceof Event ? event : new Event(event, data, this);
        var callbacks = this._events[e.type];
        if (callbacks instanceof Array) {
            e.currentTarget = this;
            callbacks.forEach(function (callback) {
                callback(e);
            });
        }
        if (this.parent !== null && e.bubbles) {
            this.parent.trigger(e);
        }
        return this;
    };


    Eventable.prototype.add = function (eventable) {
        eventable.parent = this;
        return this;
    };


    var Event = (function () {

        function Event (type, data, target) {

            this.type = type;

            this.data = data;

            this.target = target;

            this.currentTarget = null;

            this.bubbles = true;

        }


        Event.prototype.stopPropagation = function () {
            this.bubbles = false;
        };


        return Event;
    }());


    return Eventable;
});