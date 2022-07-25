const request = require('axios')

let universidades = 'http://universities.hipolabs.com/search?country=uruguay'

let x = request(universidades)

console.log(x)