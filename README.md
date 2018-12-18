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

# Contributors

[![](https://sourcerer.io/fame/arshadkazmi42/arshadkazmi42/ak-url-valdiate/images/0)](https://sourcerer.io/fame/arshadkazmi42/arshadkazmi42/ak-url-valdiate/links/0)[![](https://sourcerer.io/fame/arshadkazmi42/arshadkazmi42/ak-url-valdiate/images/1)](https://sourcerer.io/fame/arshadkazmi42/arshadkazmi42/ak-url-valdiate/links/1)[![](https://sourcerer.io/fame/arshadkazmi42/arshadkazmi42/ak-url-valdiate/images/2)](https://sourcerer.io/fame/arshadkazmi42/arshadkazmi42/ak-url-valdiate/links/2)[![](https://sourcerer.io/fame/arshadkazmi42/arshadkazmi42/ak-url-valdiate/images/3)](https://sourcerer.io/fame/arshadkazmi42/arshadkazmi42/ak-url-valdiate/links/3)[![](https://sourcerer.io/fame/arshadkazmi42/arshadkazmi42/ak-url-valdiate/images/4)](https://sourcerer.io/fame/arshadkazmi42/arshadkazmi42/ak-url-valdiate/links/4)[![](https://sourcerer.io/fame/arshadkazmi42/arshadkazmi42/ak-url-valdiate/images/5)](https://sourcerer.io/fame/arshadkazmi42/arshadkazmi42/ak-url-valdiate/links/5)[![](https://sourcerer.io/fame/arshadkazmi42/arshadkazmi42/ak-url-valdiate/images/6)](https://sourcerer.io/fame/arshadkazmi42/arshadkazmi42/ak-url-valdiate/links/6)[![](https://sourcerer.io/fame/arshadkazmi42/arshadkazmi42/ak-url-valdiate/images/7)](https://sourcerer.io/fame/arshadkazmi42/arshadkazmi42/ak-url-valdiate/links/7)

