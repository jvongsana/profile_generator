const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const questions = ['What\'s your name? Nicknames are also acceptable :) ',
                   'What\'s an activity you like doing? ',
                   'What do you listen to while doing that? ',
                   'Which meal is your favourite? (eg: dinner, brunch, etc.) ',
                   'What\'s your favourite thing to eat for that meal? ',
                   'Which sport is your absolute favourite? ',
                   'What is your superpower? In a few words, tell us what you are amazing at! '
                  ];

const answers = [];
let qCounter = 0;
const survey = () => {
  if (qCounter === questions.length) {
    console.log(`Profile Description: Their name is ${answers[0]}. They like ${answers[1]} while listening to ${answers[2]}. Their favourite food to eat is ${answers[4]} during ${answers[3]}. Their favourite sport is ${answers[5]}. Their superpower is ${answers[6]}`);
    rl.close();
    return '';
  }

  rl.question(questions[qCounter], (answer) => {
    console.log(`Thank you for your valuable feedback: ${answer}`);
    answers.push(answer);
    qCounter++;
    survey();
  });
};

survey();

// Callback hell/waterfall
// rl.question('What\'s your name? Nicknames are also acceptable :) ', (answer1) => {
//   rl.question('What\'s an activity you like doing? ', (answer2) => {
//     rl.question('What do you listen to while doing that? ', (answer3) => {
//       rl.question('What do you listen to while doing that? ', (answer4) => {
//         rl.question('What\'s your favourite thing to eat for that meal? ', (answer5) => {
//           rl.question('Which sport is your absolute favourite? ', (answer6) => {
//             rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (answer7) => {
              
//               console.log(`Thank you for your valuable feedback: Your name is ${answer1}. You like ${answer2} while listening to ${answer3}. Your favourite food to eat is ${answer5} during ${answer4}. Your favourite sport is ${answer6}. Your superpower is ${answer7}`);
              
//               rl.close();
//             });
//           });
//         });
//       });
//     });
//   });
// });


