VDOM
====

JavaScript Virtual DOM

## Version 0.2.0


## Change log

### 0.2.0

- Change method name from `root` to `parent`
- Change property name from `el` to `node`
- Improvement method `child` now can assign with vdom object (see example)


### 0.1.0

- Init project.


### Example usage 1

```JavaScript
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
```


### Output 1

```html
<div class="dropdown">
  <button class="btn btn-primary" data-toggle="dropdown">Dropdown</button>
  <ui class="dropdown-menu">
    <li class="active">
      <a href="#">List 1</a>
    </li>
    <li>
      <a href="#">List 2</a>
    </li>
    <li>
      <a href="#">List 3</a>
    </li>
    <li>
      <a href="#">List 4</a>
    </li>
  </ui>
</div>
```


### Example usage 2

```JavaScript
// work with jQuery

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
```

### Output 2

```html
<ul>
  <li>list-1</li>
  <li>list-2</li>
  <li>list-3</li>
  <li>list-4</li>
  <li>
    Parent
    <ul>
      <li>child-list-1</li>
      <li>child-list-2</li>
    </ul>
  </li>
</ul>
```
