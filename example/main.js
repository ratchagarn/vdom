(function() {

'use strict';

var dom = vdom('div', { className: 'dropdown' })
            .child('button', { className: 'btn btn-primary', dataToggle: 'dropdown' }, 'Dropdown')
            .root(
              vdom('ui', { className: 'dropdown-menu' })
                .root(
                  vdom('li', { className: 'active' })
                    .child('a', { href: '#' }, 'List 1')
                )
                .root(
                  vdom('li', null)
                    .child('a', { href: '#' }, 'List 2')
                )
                .root(
                  vdom('li', null)
                    .child('a', { href: '#' }, 'List 3')
                )
                .root(
                  vdom('li', null)
                    .child('a', { href: '#' }, 'List 4')
                )
            );


document.body.appendChild(dom.el);

// var $dropdown = $(dom.el);

// $dropdown.on('click', function() {
//   console.log('test click');
// }).appendTo($('#test'));


}).call(this);