/*!
 * VDOM version 0.1.0
 * Copyright 2014-Preset
 * Author: Ratchagarn Naewbuntad
 * Licensed under MIT
 */
(function() {

'use strict';

var global = this,
    el_roots = [];


/**
 * Transform camel cast to dash
 * ------------------------------------------------------------
 * @name camelToDash
 * @param {String} string to transform
 * @param {Boolean} to lower case or not
 * @return {String} string with dash
 */

function camelToDash(str, lowercase) {
  if (lowercase == null) { lowercase = true; }

  var output = str.replace(/\W+/g, '-')
              .replace(/([a-z\d])([A-Z])/g, '$1-$2');

  if (lowercase) {
    output = output.toLowerCase();
  }

  return output;
}


/**
 * Helper for create element
 * ------------------------------------------------------------
 * @name dom
 * @param {String} name of element
 * @param {Object} element properties
 * @param {Object} child element
 * @return {Object} element object
 */

function dom(name, settings, child) {
  if (settings == null) { settings = {}; }
  var el = document.createElement(name);
  for (var prop in settings) {
    var val = settings[prop];
    if ( el.hasOwnProperty(prop) ) {
      el[prop] = val;
    }
    else {
      el.setAttribute( camelToDash(prop), val );
    }
  }

  if (typeof child === 'string') {
    el.appendChild( document.createTextNode(child) );
  }

  return el;
}


/**
 * Vdom init function
 * ------------------------------------------------------------
 * @name vdom
 * @param {String} name of element
 * @param {Object} element properties
 * @param {Object/String} child of element
 * @return {Object} element object
 */

var vdom = function(name, settings, text) {
  return new VDOM(name, settings, text);
};


/**
 * ------------------------------------------------------------
 * Core function
 * ------------------------------------------------------------
 */

var VDOM = function() {
  this.el = dom.apply( this, arguments );
  return this;
};


/**
 * Create root element for append new child
 * ------------------------------------------------------------
 * @name vdom.root
 * @param {Object} vdom object
 * @return {Object} vdom object
 */

VDOM.prototype.root = function(vdomObject) {
  this.el.appendChild( vdomObject.el );
  return this;
};


/**
 * Append child element
 * ------------------------------------------------------------
 * @name vdom.child
 * @param {*} `Same as core function`
 * @return {Object} vdom object
 */

VDOM.prototype.child = function() {
  this.el.appendChild( dom.apply(this, arguments) );
  return this;
};



/**
 * ------------------------------------------------------------
 * Set to window scrope
 * ------------------------------------------------------------
 */

window.vdom = vdom;


}).call(this);