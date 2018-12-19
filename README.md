[![Build Status](https://api.travis-ci.com/arshadkazmi42/ak-url-valdiate.svg?branch=master)](https://api.travis-ci.com/arshadkazmi42/ak-url-valdiate)

# URL Validate

This library helps in validating whether a url exists or not. It verifies url pattern and whether the url is up and running.

## Usage

```js
var auv = require('async-url-validate');

const url = 'http://github.com/arshadkazmi42';
const response = await auv.isValidUrl(url);
if (response.isValid) {
  // Do something if the url is valid
} else {
  // Do somthing if url is invalid
}

```

## Status Codes
isValid function returns status code whatever is returned from the url response. Some of the status codes are mentioned below

- **SUCCESS**: This code is returned when the url is up and running.

```
{
  code: "SUCCESS",
  isValid: true
}
```

- **404**: This code is returned when the url is not found. 

```
{
  code: 404,
  isValid: false,
  message: "Not Found"
}
```

- **ETIMEDOUT**: This code is returned when the url is not responsding and get timed out.

```
{ 
  isValid: false, 
  code: "ETIMEDOUT",
  message: "Invalid Url" 
}
```

- **INVALID**: This is an exception code, if the url does not return any status code, this code is returned in the response

```
{
  isValid: false, 
  code: "INVALID",
  message: "Invalid Url" 
}
```

## Contributing Guidelines

Read the contributing guidelines [here](CONTRIBUTING.md)