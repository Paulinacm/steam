global.window = global;
global.chai = require('chai');
global.expect = require("chai").expect;
global.assert = require("chai").assert;
require('../src/data/steam/steam.js')
require('../src/data.js');

describe('example', () => {
  it('is a function', () => {
    expect(typeof example).toBe('function');
  });

  it('returns `example`', () => {
    expect(example()).toBe('example');
  });
});
