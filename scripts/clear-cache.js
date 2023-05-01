const fs = require('fs');

fs.rm('./node_modules/.cache', { recursive: true }, () => console.log('CLEAR CACHE DONE'));
