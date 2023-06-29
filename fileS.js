const fs = require('fs');
// create a file
// fs.writeFile('exampleFile.txt', "This is an example of a file created in Node Js.", (err) => {
//     if(err)
//         console.log(err);
//     else{
//         console.log('File was successfully created!');
//         fs.readFile('exampleFile.txt', 'utf8', (err, file) =>{
//             if(err) console.log(err);
//             else console.log(file);
//         }) 
//     }
// }); 

//  we can rename the file as follows
// fs.rename('exampleFile.txt', 'exampleFile2.txt', (err) =>{
//     if(err) console.log(err);
//     else console.log('File was renamed successfully.')
// });

// We can add data to our file with the appendFile( )

// WE can usse unlink to delete a file
fs.unlink('exampleFile2.txt', (err) =>{
    if(err) console.log(err)
    else console.log('file was successfully deleted!');
});