const request = require('request')

let options = {
    method: 'GET',
    url: 'http://universities.hipolabs.com/search?country=uruguay',
    json: true
}


request(options, function (error, response) {
    if (error) throw new Error(error);
    console.log(response.body);
  });