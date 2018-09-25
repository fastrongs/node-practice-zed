// const request = require('request');
// const yargs = require('yargs');
// const getYear = require('./year');
// const argv = yargs
//   .options({
//     n: {
//       demand: true,
//       alias: 'name',
//       describe: 'Title of film',
//       string: true
//     }
//   })
//   .help()
//   .alias('help','h')
//   .argv;
//
// getYear.getFunc(argv,(error , response) => {
//   if(error){
//     console.log(error);
//   }else{
//     console.log(JSON.stringify(response , undefined , 2));
//   }
// });
const express = require('express')
const port = process.env.PORT || 3000;
var app = express();
app.get('/',(req,res) => {
  res.send('Hello Express!');
})
app.listen(port);
