const request = require('request');

const getFunc = (argv,callback) =>{

  request({
    url: `http://www.omdbapi.com/?apikey=b1a1bce2&t=${argv.name}`,
    json: true
  },(error,response ,body) =>{
    if(error){
      callback('An Error Acured:/');
    }else if(body.Response === 'False'){
      callback(`Movie ${argv.name} Not Found!`);
    }else{
      callback(`Movie ${argv.name} made in ${body.Year} .`);
    }
  });

};
module.exports = {
  getFunc
};
