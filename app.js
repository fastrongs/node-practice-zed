const request = require('request');
const yargs = require('yargs');
const getYear = require('./year');
const argv = yargs
  .options({
    n: {
      demand: true,
      alias: 'name',
      describe: 'Title of film',
      string: true
    }
  })
  .help()
  .alias('help','h')
  .argv;

getYear.getFunc(argv,(error , response) => {
  if(error){
    console.log(error);
  }else{
    console.log(JSON.stringify(response , undefined , 2));
  }
});
