# URL Validate

This library helps in validating whether a url exists or not. It verifies url pattern and whether the url is up and running.

```js
var auv = require('async-url-validate');

const url = 'http://github.com/arshadkazmi42';
const response = await auv.isValidUrl(url);
if (response.isValid) {
  // Do something if the url is valid
} else {
  // Do somthing if url is invalid
}

/*
Valid URL response JSON
{ 
  code: 'SUCCESS', 
  isValid: true 
}

Invalid URL response JSON
{ 
  code: 404,
  isValid: false,
  message: 'Not Found' 
}

OR

{ 
  isValid: false, 
  code: 'ETIMEDOUT', 
  message: 'Invalid Url' 
}
*/

```


