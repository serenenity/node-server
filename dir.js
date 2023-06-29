const fs = require('fs');

fs.mkdir('exampleFile', (err) => {
    if (err) console.log(err);
    else console.log('successful');
});

// you can use the rmdir to delete folders