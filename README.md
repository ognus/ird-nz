ird-nz
======

Checksum validator for New Zealand's IRD/GST number.

Implementation based on specification available at:
http://www.ird.govt.nz/resources/9/e/9e408a004e329f16a91bbf8ad6853786/rwt-nrwt-spec-2013+v1.0+.pdf

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


