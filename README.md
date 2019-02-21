ird-nz
======

Checksum validator for New Zealand's IRD/GST number.

Implementation based on specification available at:
https://www.ird.govt.nz/resources/6/1/6198472a-ebee-4b71-bb16-3f7275e7f2bd/2019+RWT-NRWT+Specification+v1.0.pdf

# Install
### Node
```
npm install ird-nz
```

### Browser
```html
<script src="irdnz.min.js"></script>
```

#### Using bower
```
bower install ird-nz
```

#Usage
### Node
```js
var irdnz = require('ird-nz');
irdnz.isValid(123123123);
//or pass IRD/GST number as a string
irdnz.isValid('123123123');
```

### Browser
```js
// irdnz is exposed as a global (window.irdnz)
irdnz.isValid(123123123);
// or pass IRD/GST number as a string
irdnz.isValid('123123123');
```


