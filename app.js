console.log("Starting app.js");

const fs = require('fs');
const os = require('os');
const notes = require('./notes');

 var res = notes.addNumbers(2, 4);
 console.log(res); 

// var user = os.userInfo();

// fs.appendFile('greetings.txt',`Hello ${user.username}! ${notes.age}` , function (err) {
//   if (err) {
//     console.log('Unable to write file');
//   }
// });
