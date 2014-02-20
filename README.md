*This repository is a mirror of the [component](http://component.io) module [shannonmoeller/copier.js](http://github.com/shannonmoeller/copier.js). It has been modified to work with NPM+Browserify. You can install it using the command `npm install npmcomponent/shannonmoeller-copier.js`. Please do not open issues or send pull requests against this repo. If you have issues with this repo, report it to [npmcomponent](https://github.com/airportyh/npmcomponent).*
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

[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/shannonmoeller/copier.js/trend.png)](https://bitdeli.com/free "Bitdeli Badge")
