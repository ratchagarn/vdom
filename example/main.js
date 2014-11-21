(function() {

'use strict';

var test = document.getElementById('test');

var dom = vdom('div', { className: 'dropdown' })
            .child('button', { className: 'btn btn-primary', dataToggle: 'dropdown' }, 'Dropdown')
            .parent(
              vdom('ui', { className: 'dropdown-menu' })
                .parent(
                  vdom('li', { className: 'active' })
                    .child('a', { href: '#' }, 'List 1')
                )
                .parent(
                  vdom('li', null)
                    .child('a', { href: '#' }, 'List 2')
                )
                .parent(
                  vdom('li', null)
                    .child('a', { href: '#' }, 'List 3')
                )
                .parent(
                  vdom('li', null)
                    .child('a', { href: '#' }, 'List 4')
                )
            );


document.body.appendChild(dom.node);



var ul = vdom('ul'),
    lists = ['list-1', 'list-2', 'list-3', 'list-4'];

lists.forEach(function(list) {
  ul.child( vdom('li', null, list) );
});

var node = ul.parent(
  vdom('li', null, 'parent')
    .child('ul')
, true);

var child_ul = vdom(node);
child_ul
  .child('li', null, 'child-list-1')
  .child('li', null, 'child-list-2')


$(ul.node).find('li').on('click', function() {
  alert(this.innerHTML);
});

document.body.appendChild(ul.node);

}).call(this);