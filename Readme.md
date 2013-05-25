# copier

  A JavaScript object property copier. Copies the enumerable properties of one or more objects to a target object.

## Installation

  Server-side ([Node.js](http://nodejs.org)):

    $ npm install copier

  Client-side ([component(1)](https://github.com/component)):

    $ component install shannonmoeller/copier.js

## API

### `copier(target, ...objs)`

  Copies the enumerable properties of one or more objects to a target object.

```js
var copier = require('copier'),
    foo = { a: 1, b: 2 },
    bar = { b: 3, c: 4 };

copier({}, foo, bar); // returns { a: 1, b: 3, c: 4 }

// foo and bar remain unchanged

copier(foo, bar); // foo now equals { a: 1, b: 3, c: 4 }
```

## License

  MIT
