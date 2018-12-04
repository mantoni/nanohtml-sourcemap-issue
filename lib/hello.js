'use strict';

const html = require('nanohtml');
const hi = require('./world');

module.exports = () => html`
  <body>
    ${hi()}
  </body>
`;
