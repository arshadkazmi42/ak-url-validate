const expect = require('chai').expect;

const validator = require('../index');

describe('Check urls are valid or not', () => {

  it('should return valid response', async () => {
    const url = 'http://arshadkazmi42.github.io';
    const response = await validator.isValidUrl(url);
    expect(response).to.deep.equal({ 
      code: 'SUCCESS', 
      isValid: true 
    });
  });

  it('should return 404 (resource not found) response', async () => {
    const url = 'http://arshadkazmi42.github.io/not-found';
    const response = await validator.isValidUrl(url);
    expect(response).to.deep.equal({ 
      code: 404,
      isValid: false,
      message: 'Not Found' 
    });
  });

  it('should return invalid url response', async () => {
    const url = 'https://1github.com/arshadkazmi42/';
    const response = await validator.isValidUrl(url);
    expect(response).to.deep.equal({ 
      isValid: false, 
      code: 'ETIMEDOUT', 
      message: 'Invalid Url' 
    });
  });

});