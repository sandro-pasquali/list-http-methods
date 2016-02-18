# list-http-methods

List all HTTP methods supported by Node.js `http` module.

## Usage

```
var lhm = require('list-http-methods');

lhm.lowercase // ['get', 'post', 'mkcol'...]

lhm.uppercase // ['GET', 'POST', 'MKCOL'...]

lhm.exclude(['get']) // ['post', 'mkcol'...]
```

Note that `lhm.exclude` will detect the case of the *first* element in the sent exclusion array and return the list in that case. There is no checking for mixed cases in the array, and the default for an empty exclusion array is lowercase.