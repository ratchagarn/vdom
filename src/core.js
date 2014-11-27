(function() {

'use strict';

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

  // transform camel case
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
  // set default settings
  if (settings == null) { settings = {}; }

  // create element
  var el = document.createElement(name);

  // assign prop
  for (var prop in settings) {
    var val = settings[prop];

    // set avaliable prop
    if ( el[prop] || prop === 'className' ) {
      el[prop] = val;
    }
    // set free style prop
    else {
      el.setAttribute( camelToDash(prop), val );
    }
  }

  // set text node
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
 * VDOM core function
 * ------------------------------------------------------------
 * @name VDOM
 * @param {*} `Same as dom function`
 * @return {Object} vdom object
 */

var VDOM = function() {
  var node = null;
  if (typeof arguments[0] === 'object') {
    node = arguments[0];
  }
  else {
    node = dom.apply(this, arguments);
  }
  this.node = node;
  return this;
};


/**
 * Create parent element for append new child
 * ------------------------------------------------------------
 * @name vdom.parent
 * @param {Object} vdom object
 * @param {Boolean} get latest child or not
 * @return {Object} vdom object
 */

VDOM.prototype.parent = function(vdomObject, get_latest_child) {
  this.node.appendChild(vdomObject.node);
  if (get_latest_child === true) {
    var node = vdomObject.node.children;
    while(node.children) {
      node = node.children;
    }
    return node[0];
  }
  else {
    return this;
  }
};


/**
 * Append child element
 * ------------------------------------------------------------
 * @name vdom.child
 * @param {*} `Same as dom function`
 * @return {Object} vdom object
 */

VDOM.prototype.child = function() {
  var child = null;

  if (arguments[0].node) {
    child = arguments[0].node;
  }
  else {
    child = dom.apply(this, arguments);
  }

  this.node.appendChild(child);
  return this;
};


/**
 * Append child element of html string
 * ------------------------------------------------------------
 * @name vdom.html
 * @param {String} String of HTML
 * @return {Object} vdom object
 */

VDOM.prototype.html = function(str) {
  var frag = document.createDocumentFragment(),
      temp = document.createElement('DIV');

  temp.insertAdjacentHTML('beforeend', str);
  while (temp.firstChild) {
    frag.appendChild(temp.firstChild);
  }

  // nulling out the reference, there is no obvious dispose method
  temp = null;

  this.node.appendChild(frag);
  return this;
};


/**
 * ------------------------------------------------------------
 * assign to window scope
 * ------------------------------------------------------------
 */

window.vdom = vdom;

}).call(this);