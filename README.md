VDOM
====

JavaScript Virtual DOM

## Version 0.1.0


## Change log


### 0.0.1

- init project.


### Example code

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

document.body.appendChild( dom.el );
```


### Output

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
