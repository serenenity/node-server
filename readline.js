// Require the readline module
//  set it up
const readline = require('readline');

const rl =  readline.createInterface({ input : process.stdin,
                            output : process.stdout});

let num1 = Math.floor(Math.random() * 10);
let num2 = Math.floor(Math.random() * 10);

let answer = num1 + num2;

// queation takes a string and a return function 
// rl.question(`What is the addition of ${num1} and ${num2} ? \n Answer : `, 
// (userInput) =>{
//     if(userInput.trim() == answer){
//         console.log(`the answer is ${ answer}  you are right!!!`);
//     }else{
//         console.log(`the answer is ${ answer}  you are wrong!!!`);
//     }

//     rl.close();
    // close the program on the terminal
// });

// ANOTHER SOLUTION WILL BE 

rl.question(`what is ${num1} + ${num2} ? \n`, 
(userInput) => {
    if(userInput.trim() == answer){
        rl.close();
    }
    else{
         rl.setPrompt('Incorrect answer please try again \n');
         rl.prompt(); 
         rl.on('line', (userInput) => {
            if (userInput.trim() == answer){
                rl.close();
            }
            else{
                rl.setPrompt(`Incorrect answer ${userInput} try again \n`);
                rl.prompt();
            }
         });
    }
});

rl.on('close', ()=>{
    console.log('Correct!!!');
});

