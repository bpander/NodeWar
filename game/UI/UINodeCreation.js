define(function (require) {
    'use strict';

    var source = require('text!game/Template/UINodeCreation.html');
    var NodeFactory = require('game/Object/Node/NodeFactory');
    var Handlebars = require('Handlebars');


    function UINodeCreation (element) {

        this.element = _parse(_template(NodeFactory));

    }


    var _parse = function (html) {
        var x = document.createElement('x');
        x.innerHTML = html;
        return x.children[0];
    };

    var _template = Handlebars.compile(source);


    return UINodeCreation;
});